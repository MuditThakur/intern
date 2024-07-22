import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './MyJob.css'; // Import the CSS file

const MyJob = () => {
  const location = useLocation();
  const { jobData } = location.state || {}; // Access the jobData passed from the Card component

  const [appliedJobs, setAppliedJobs] = useState([]);

  // Load applied jobs from localStorage when the component mounts
  useEffect(() => {
    const storedJobs = JSON.parse(localStorage.getItem('appliedJobs')) || [];
    setAppliedJobs(storedJobs);
  }, []);

  // Update localStorage whenever appliedJobs state changes
  useEffect(() => {
    localStorage.setItem('appliedJobs', JSON.stringify(appliedJobs));
  }, [appliedJobs]);

  // Add job to the list if it doesn't already exist
  useEffect(() => {
    if (jobData) {
      setAppliedJobs(prevJobs => {
        if (!prevJobs.some(job => job.id === jobData.id)) {
          return [...prevJobs, jobData];
        }
        return prevJobs;
      });
    }
  }, [jobData]);

  // Function to remove a job from the applied jobs list
  const handleCancelApplication = (jobId) => {
    const updatedJobs = appliedJobs.filter(job => job.id !== jobId);
    setAppliedJobs(updatedJobs);
  };

  return (
    <div className="my-job">
      <h1>Applied Jobs</h1>
      {appliedJobs.length === 0 ? (
        <p className="no-jobs">No jobs applied yet.</p>
      ) : (
        <div className="job-list">
          {appliedJobs.map((job) => (
            <div key={job.id} className="job-card">
              <img src={job.companyLogo} alt={job.companyName} className="company-logo" />
              <div className="job-info">
                <h2 className="company-name">{job.companyName}</h2>
                <h3 className="job-title">{job.jobTitle}</h3>
              </div>
              <button
                onClick={() => handleCancelApplication(job.id)}
                className="cancel-button"
              >
                Cancel Application
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyJob;
