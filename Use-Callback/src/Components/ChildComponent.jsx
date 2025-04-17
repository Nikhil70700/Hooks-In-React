import React, { memo } from 'react';

const ChildComponent = ({ buttonName, handleClick }) => {
  console.log("Child Component Rendered");
  return (
    <div className='p-3'>
      <button
        className='btn text-white bg-red-500 p-2 px-4 rounded'
        onClick={handleClick}
      >
        {buttonName}
      </button>
    </div>
  );
};

// memo() will shallow‑compare props and skip re‑render if they’re the same
export default memo(ChildComponent);
