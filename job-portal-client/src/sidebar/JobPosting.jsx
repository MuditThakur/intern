import React from 'react'
import InputFields from '../components/InputFields';

const JobPosting = ({ handleChange }) => {
  const now = new Date();
  const twentyfourhoursago =new Date(now-24*60*60*1000)
  const sevenDAysAgo =new Date(now-7*24*60*60*1000)
  const thirtyDAysAgo =new Date(now-30*24*60*60*1000)

  // convert date t ostring 
  const twentyfourhoursagoDate = twentyfourhoursago.toISOString().slice(0,10);
  const sevenDaysagoDate = sevenDAysAgo.toISOString().slice(0,10);
  const thirtyDaysagoDate = thirtyDAysAgo.toISOString().slice(0,10);
  return (
    <div>
      <h4 className='text-lg font-medium mb-2'>Date of Posting</h4>
      <div>
        <label className='sidebar-label-container'>
          <input
            type="radio"
            name='location'
            id='all'
            value=""
            onChange={handleChange}
          />
        </label>
        <InputFields handleChange={handleChange} value={twentyfourhoursagoDate} title="Last 24 hours" name="test" />
        <InputFields handleChange={handleChange} value={sevenDaysagoDate} title="Last seven days" name="test" />
        <InputFields handleChange={handleChange} value={thirtyDaysagoDate}title="Last Month" name="test" />

      </div>
    </div>
  )
}

export default JobPosting
