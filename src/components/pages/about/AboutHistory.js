import React from 'react';

import Header from '../../layout/Header';

import About from '../../layout/dropdown/About';

const AboutHistory = () => {
  return (
    <div>
      <Header text={'학원소개'} />

      <div className='container'>
        <h4>연혁</h4>

        <div className='pageGrid'>
          <div className='page-g1'>
            <About current={'history'} />
          </div>
          <div className='page-g2'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo illum
            quibusdam quo pariatur ad earum deserunt, sit sunt. Autem in, quasi,
            accusantium dignissimos ipsum voluptatum earum enim fugit ratione
            facilis consectetur consequuntur pariatur. Neque totam architecto
            cumque nihil consequatur repellat, reiciendis porro laborum
            quibusdam, perferendis praesentium! Amet in totam tempore velit eos,
            sed est iure voluptas aspernatur magni saepe blanditiis soluta non
            quisquam illum hic, sequi exercitationem temporibus at? Facilis et,
            commodi ea dolore, laudantium delectus tenetur omnis quae minus nam
            modi similique ipsa incidunt inventore sequi hic! Voluptas deleniti
            obcaecati aperiam maxime error dignissimos voluptate exercitationem
            quod nihil iure!
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHistory;
