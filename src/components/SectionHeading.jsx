import React from 'react';

const SectionHeading = ({head, text}) => {
  return (
    <div className='text-center my-10 space-y-2'>
      <h2 className='text-4xl font-medium'>{head}</h2>
      <p>{ text}</p>
    </div>
  );
};

export default SectionHeading;