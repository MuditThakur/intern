import React, { useEffect, useState } from 'react';
import Banner from "../components/Banner";
import Card from '../components/Card';
import Job from './Job';
import Sidebar from '../sidebar/Sidebar';
import NewsLetter from '../components/NewsLetter';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  useEffect(() => {
    setIsLoading(true);
    fetch("jobs.json")
      .then(res => res.json())
      .then(data => {
        setJobs(data);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, []);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  const calculatePageRange = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return { startIndex, endIndex };
  };

  const nextPage = () => {
    if (currentPage < Math.ceil(filteredJobs.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const filteredData = (jobs, selected, query) => {
    let filteredJobs = jobs;
    if (query) {
      filteredJobs = filteredJobs.filter((job) =>
        job.jobTitle.toLowerCase().includes(query.toLowerCase())
      );
    }
    if (selected) {
      filteredJobs = filteredJobs.filter(({ jobLocation, maxPrice, salaryType, employmentType,postingDate,experienceLevel }) => (
        jobLocation.toLowerCase() === selected.toLowerCase() ||
        parseInt(maxPrice) <= parseInt(selected) ||
        postingDate >= selected ||
        salaryType.toLowerCase() === selected.toLowerCase() ||
        experienceLevel.toLowerCase() === selected.toLowerCase()||
        employmentType.toLowerCase() === selected.toLowerCase()
      ));
    }
    return filteredJobs;
  };

  const filteredJobs = filteredData(jobs, selectedCategory, query);
  const { startIndex, endIndex } = calculatePageRange();
  const displayedJobs = filteredJobs.slice(startIndex, endIndex);

  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange} />
      <div className='bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12'>
        <div className='bg-white p-4 rounded'>
          <Sidebar handleChange={handleChange} handleClick={handleClick} />
        </div>
        <div className='col-span-2 bg-white p-4 rounded-sm'>
          {
            isLoading ? (
              <p className='font-medium'>Loading...</p>
            ) : (
              <>
                {filteredJobs.length > 0 ? (
                  <>
                    
                    <Job result={displayedJobs.map((data, i) => <Card key={i} data={data} />)} />
                  </>
                ) : (
                  <>
                    <h3 className='text-lg font-bold mb-2'>0 Jobs</h3>
                    <p>No Data Found</p>
                  </>
                )}
              </>
            )
          }
          {
            filteredJobs.length > 0 && (
              <div className='flex justify-center mt-4 space-x-8'>
                <button onClick={prevPage} className='hover:underline'>Previous</button>
                <span className='mx-2'>Page {currentPage} of {Math.ceil(filteredJobs.length / itemsPerPage)}</span>
                <button onClick={nextPage} className='hover:underline'>Next</button>
              </div>
            )
          }
        </div>
        <div className='bg-white p-4 rounded'><NewsLetter/></div>
      </div>
    </div>
  );
};

export default Home;
