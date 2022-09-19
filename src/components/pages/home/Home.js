import React from 'react';

import Boxes from './comp/Boxes';
import HomeCarousel from './comp/HomeCarousel';
import Schedule from './comp/Schedule';

const Home = () => {
  return (
    <div className='homeBackground'>
      <HomeCarousel />
      <div className='seperator'></div>
      <Schedule />
      <div className='seperator'></div>
      <div></div>
      <Boxes />
    </div>
  );
};

export default Home;
