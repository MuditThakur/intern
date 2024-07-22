import React from 'react';
import InputFields from '../components/InputFields';

const Location = ({ handleChange }) => {
  return (
    <div>
      <h4 className='text-lg font-medium mb-2'>Location</h4>
      <div>
        <label className='sidebar-label-container'>
          <input
            type="radio"
            name='location'
            id='all'
            value=""
            onChange={handleChange}
          />
          <span className='checkmark'></span>All
        </label>
        <InputFields handleChange={handleChange} value="london" title="London" name="location" />
        <InputFields handleChange={handleChange} value="Brussels" title="Brussels" name="location" />
        <InputFields handleChange={handleChange} value="San Francisco" title="San Francisco" name="location" />
        <InputFields handleChange={handleChange} value="Seattle" title="Seattle" name="location" />
        <InputFields handleChange={handleChange} value="Madrid" title="Madrid" name="location" />
        <InputFields handleChange={handleChange} value="Boston" title="Boston" name="location" />
      </div>
    </div>
  );
};

export default Location;
