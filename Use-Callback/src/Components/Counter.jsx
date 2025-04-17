import React, { useCallback, useState } from 'react';
import ChildComponent from './ChildComponent';

const Counter = () => {
  const [count, setCount] = useState(0);

  // stable handlers that always operate on the latest state
  const handleIncrement = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  const handleDecrement = useCallback(() => {
    setCount(c => c - 1);
  }, []);

  return (
    <div className="h-lvh font-display tracking-wider flex flex-col justify-center items-center bg-black text-white">
      <div className="p-2">Count: {count}</div>
      <button
        className="btn text-white bg-green-500 p-2 rounded mb-2"
        onClick={handleIncrement}
      >
        Increment
      </button>
      <ChildComponent
        buttonName="Decrement"
        handleClick={handleDecrement}
      />
    </div>
  );
};

export default Counter;
