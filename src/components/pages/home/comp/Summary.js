import React from 'react';

const Summary = () => {
  const blocks = [1, 2, 3, 4, 5];

  return (
    <div className='blocks-container'>
      {blocks.map((block, index) => (
        <div className='block' key={index}>
          {block}
        </div>
      ))}
    </div>
  );
};

export default Summary;
