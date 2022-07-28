import React from 'react';

import Header from '../../layout/Header';
import About from '../../layout/dropdown/About';

const AboutDocument = () => {
  return (
    <div>
      <Header text={'학원소개'} sub={'허가서류'} />

      <div className='container'>
        <div className='pageGrid'>
          <div className='page-g1'>
            <div className='sideTitle'>학원소개</div>
            <About current={'document'} />
          </div>
          <div className='page-g2'>
            <div className='pageTitle'>
              <span className='subTitleNav'>허가서류</span>
            </div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
            soluta quos cupiditate sequi dolore itaque necessitatibus doloremque
            corporis consequuntur quibusdam, ad, excepturi optio nulla rerum at
            nemo officiis aliquid velit? Ut, eius, dolore eos, beatae optio
            veniam ipsa necessitatibus quia laboriosam eveniet amet sit itaque
            doloremque. Odit dignissimos sed tempore libero, possimus
            perferendis sint officia eum non voluptates quod repudiandae
            voluptate voluptas aspernatur nam quisquam nesciunt hic sapiente ut.
            Culpa ratione deleniti quas quasi a cupiditate aliquam impedit illo.
            Corrupti a vel deleniti magni impedit explicabo, perferendis
            mollitia praesentium. Quo illo recusandae, facilis modi maiores
            atque! Error voluptatum rem itaque. Aliquam, nesciunt ipsum nobis
            neque velit consequatur harum minus adipisci aut obcaecati dolor
            iste repellendus accusamus impedit dolores autem minima accusantium
            quis dicta fuga ad aperiam? Tenetur, placeat ullam. Veritatis sed
            deserunt architecto, cupiditate esse officiis impedit maiores quod
            distinctio vitae, odio, fuga odit dolor fugiat laudantium facere
            totam porro natus. Libero voluptatem autem necessitatibus commodi
            dolorum, laudantium consequuntur quas repellendus architecto alias
            aliquam. Non, praesentium, officiis asperiores adipisci iste
            repellendus odio nesciunt at quibusdam sapiente voluptate a impedit
            velit enim? Voluptate magni ipsa expedita, vel provident perferendis
            ad illo dolore doloribus culpa, impedit at cum animi enim corrupti
            corporis?
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDocument;
