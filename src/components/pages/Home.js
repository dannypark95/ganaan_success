import React from 'react';

import Boxes from '../main/Boxes';

const Home = () => {
  return (
    <div>
      <div className='mainBanner'>
        <img
          src={'https://i.imgur.com/QtsL2U1.png'}
          alt='Header'
          className='banner'
        />
      </div>
      <div className='middleBanner'>This is Middle Banner</div>
      <Boxes />
    </div>
  );
};

export default Home;
