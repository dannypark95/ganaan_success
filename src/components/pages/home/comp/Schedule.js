import React from 'react';
import campSchedule from '../../../../media/home/schedule.png';
import campPrice from '../../../../media/home/price.png';

const Schedule = () => {
  return (
    <div className='row mt-2 container'>
      <div className='col text-center'>
        <div className='fw-bolder fs-5 fontMICE'>영어캠프 스케줄</div>
        <img
          src={campSchedule}
          className='homeCampImg'
          alt='Camp Home Schedule'
        />
      </div>
      <div className='col'>
        <div className='fw-bolder fs-5 fontMICE'>주니어 영어캠프 비용</div>
        <img src={campPrice} className='homeCampImg' alt='Camp Home Price' />
      </div>
    </div>
  );
};

export default Schedule;
