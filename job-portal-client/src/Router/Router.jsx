import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Myjobs from "../Pages/Myjobs";
import Login from "../components/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
     children: [
      {path: "/",
        element:<Home/>
      },
      {path: "/my-job",
        element:<Myjobs/>
      },
     ]
  },
  {path:"/login",
    element:<Login/>
  }

]);

export default router;