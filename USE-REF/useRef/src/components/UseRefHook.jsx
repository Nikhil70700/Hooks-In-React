import React, { useState, useRef } from 'react';


function UseRefHook() {
  // Create a ref for the input element.
  const refElement = useRef(" ");
  // State for the input's value.
  const [name, setName] = useState("Nikhil");

  // Log the ref (for debugging).
  console.log(refElement);

  // Function to reset the input field and focus on it.
  function Reset() {
    setName("");
    refElement.current.focus();
  }
  function handleInput(){
    refElement.current.style.color="blue";
    refElement.current.value="Nikhil Pandey";
  }

  return (
    <>
      <h1>Learning useref</h1>
      <div>
      <input 
        ref={refElement} 
        type='text' 
        value={name} 
        onChange={(e) => setName(e.target.value)}
      />
      <div className='btn'>
      <button className='reset' onClick={Reset}>Reset</button>
      <button className='upgrade' onClick={handleInput}>Upgrade</button>
      </div>
      </div>
    </>
  );
}

export default UseRefHook;
