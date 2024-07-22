import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiMapPin, FiClock, FiDollarSign, FiCalendar } from "react-icons/fi";

const Card = ({ data }) => {
  const navigate = useNavigate();

  const handleApplyClick = () => {
    navigate('/my-job', { state: { jobData: data } }); // Pass data as state
  };

  const { companyName, jobTitle, companyLogo, minPrice, maxPrice, jobLocation, employmentType, postingDate, description } = data;

  return (
    <section className='card'>
      <div className='flex gap-4 flex-col sm:flex-row items-start'>
        <img src={companyLogo} alt="" />
        <div>
          <h4 className='text-primary mb-1'>{companyName}</h4>
          <h3 className='text-lg font-semibold mb-2'>{jobTitle}</h3>
          <div className='text-primary/70 text-base flex flex-wrap gap-2 mb-2'>
            <span className='flex items-center gap-2 text-sm'><FiMapPin />{jobLocation}</span>
            <span className='flex items-center gap-2 text-sm'><FiClock />{employmentType}</span>
            <span className='flex items-center gap-2 text-sm'><FiDollarSign />{minPrice}-{maxPrice}K</span>
            <span className='flex items-center gap-2 text-sm'><FiCalendar />{postingDate}</span>
          </div>
          <p className='text-base text-primary/70'>{description}</p>
          <button
            onClick={handleApplyClick}
            className="apply-button p-2 border text-base bg-blue text-white hover:bg-green-500 hover:text-white"
          >
            Apply Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default Card;
