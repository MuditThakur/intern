import React from 'react';
import Location from './Location';
import Salary from './Salary';
import JobPosting from './JobPosting';
import WorkEcp from './WorkEcp';
import TypeEmp from './TypeEmp';

const Sidebar = ({ handleChange,handleClick }) => {
  return (
    <div>
      <Location handleChange={handleChange} />
      <Salary handleChange={handleChange} handleClick ={handleClick}/>
      <JobPosting handleChange={handleChange} />
      <WorkEcp handleChange={handleChange} />
      <TypeEmp handleChange={handleChange} />
      
    </div>
  );
};

export default Sidebar;
