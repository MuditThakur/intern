import React from 'react'
import InputFields from '../components/InputFields';

const TypeEmp = ({handleChange}) => {
  return (
    <div>
      <h4 className='text-lg font-medium mb-2'>Type of employment</h4>
      <div>
        <label className='sidebar-label-container'>
          <input
            type="radio"
            name='location'
            id='test'
            value=""
            onChange={handleChange}
          />
        </label>
        <InputFields handleChange={handleChange} value="Temporary" title="Temporary" name="location" />
        <InputFields handleChange={handleChange} value="Part-time" title="Part-time" name="location" />
        <InputFields handleChange={handleChange} value="Full-time" title="Full-time" name="location" />

      </div>
    </div>
  )
}

export default TypeEmp
