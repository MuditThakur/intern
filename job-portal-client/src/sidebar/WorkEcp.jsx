import React from 'react'
import InputFields from '../components/InputFields';

const WorkEcp = ({handleChange}) => {
  return (
    <div>
      <h4 className='text-lg font-medium mb-2'>Work Exprience</h4>
      <div>
        <label className='sidebar-label-container'>
          <input
            type="radio"
            name='location'
            id='test'
            value=""
            onChange={handleChange}
          />
          <span className='checkmark'></span>Any Exprience
        </label>
        <InputFields handleChange={handleChange} value="intership" title="Intership" name="location" />
        <InputFields handleChange={handleChange} value="work remotely" title="Work remotely" name="location" />

      </div>
    </div>
  )
}

export default WorkEcp
