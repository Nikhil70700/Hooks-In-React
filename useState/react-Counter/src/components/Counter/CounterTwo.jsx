import React, { useState } from 'react';
import '../Styles/CounterStyle.css';

function CounterTwo() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const handleIncrement = () => {
    setCount(count + step);
  };

  const handleDecrement = () => {
    setCount(count - step);
  };

  return (
    <div className='container state-container'>
      <h1>useState Challenge</h1>
      <p>
        <span>{count}</span>
      </p>

      <div>
        <label>
          Step:
          <input
            type="number"
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}
            disabled={step <= 0 || step >= 200}  // Updated condition
          />
        </label>
      </div>
      <div className='grid-three-cols'>
        <button onClick={handleIncrement} disabled={count >= 200}>Increment</button>
        <button onClick={handleDecrement} disabled={count <= 0}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

export default CounterTwo;
