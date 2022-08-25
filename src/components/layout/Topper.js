import React, { useState } from 'react';

const Topper = () => {
  // const [isVisible, setIsVisible] = useState(true);
  // const [height, setHeight] = useState(0);

  // const listenToScroll = () => {
  //   let heightToHideFrom = 10;
  //   const winScroll =
  //     document.body.scrollTop || document.documentElement.scrollTop;

  //   if (winScroll > heightToHideFrom) {
  //     isVisible && // to limit setting state only the first time
  //       setIsVisible(false);
  //   } else {
  //     setIsVisible(true);
  //   }
  // };

  return (
    <div id='container'>
      {/* <div id='height'>
        <b>
          height: {height} - {isVisible ? 'show' : 'hide'}
        </b>
      </div>
      {isVisible && (
        <div className='topper'>Content hidden when scrolled beyond 200px</div>
      )} */}
    </div>
  );
};

export default Topper;
