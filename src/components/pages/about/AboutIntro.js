import React from 'react';

import Header from '../../layout/Header';
import About from '../../layout/dropdown/About';

const AboutIntro = () => {
  return (
    <div>
      <Header text={'학원소개'} sub={'인사말'} />

      <div className='container'>
        <h4>인사말</h4>

        <div className='pageGrid'>
          <div className='page-g1'>
            <About current={'intro'} />
          </div>
          <div className='page-g2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            molestiae nam? Voluptatum culpa quisquam itaque reiciendis cum fugit
            harum, distinctio iure similique delectus placeat eos ex, quis ipsum
            nulla sunt facilis saepe nemo excepturi dolores dignissimos
            voluptatibus minima. Perspiciatis, autem.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutIntro;
