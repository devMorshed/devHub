import React from 'react';

const Tag = ({text}) => {
  return (
    <button className='border border-purple-700 rounded px-3 py-2'>
      {text}
    </button>
  );
};

export default Tag;