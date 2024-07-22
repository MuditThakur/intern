const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 5000;

const { MongoClient, ServerApiVersion } = require('mongodb');

// Use backticks for template literals
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@job-portal-demo.qjntlgm.mongodb.net/?retryWrites=true&w=majority&appName=job-portal-demo`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    //create db
    const db = client.db("mernJobPortal");
    const jobCollections = db.collection("demoJobs")
    //get all jobs
    app.get("/all-jobs",async(req,res)=>{
      const jobs = await jobCollections.find().toArray()
      res.send(jobs)
    })

//post a job
    app.post("/post-job",async(req,res)=>{
      const body = req.body;
      body.createAt = new Date();
      const result=await jobCollections.insertOne(body);
      if(result.insertedId){
        return res.status(200).send(result);
      }
      else{
        return res.status(404).send({
          message:" can not insert try again later",
          status:false
        })
      }
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
  } finally {
    // Commenting out the client close to keep the connection open
    // await client.close();
  }
}

run().catch(console.dir);

// Middleware
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
