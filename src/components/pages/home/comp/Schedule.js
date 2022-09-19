import React from 'react';
import campSchedule from '../../../../media/home/schedule.png';
import campPrice from '../../../../media/home/price.png';

const Schedule = () => {
  return (
    <div>
      <div className='d-inline'>
        <img
          src={campSchedule}
          className='homeCampImg'
          alt='Camp Home Schedule'
        />
        <img src={campPrice} className='homeCampImg' alt='Camp Home Price' />
      </div>
    </div>
  );
};

export default Schedule;
