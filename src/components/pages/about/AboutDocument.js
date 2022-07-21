import React from 'react';

import Header from '../../layout/Header';
import About from '../../layout/dropdown/About';

const AboutDocument = () => {
  return (
    <div>
      <Header text={'학원소개'} />

      <div className='container'>
        <h4>허가서류</h4>

        <div className='pageGrid'>
          <div className='page-g1'>
            <About current={'document'} />
          </div>
          <div className='page-g2'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
            facere molestiae quae aut. Eum nostrum non aperiam, quibusdam fugit
            quae?
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDocument;
