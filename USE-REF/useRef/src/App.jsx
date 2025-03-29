import React, {  useRef, useState } from 'react'

export default function App() {
const[time,setTime]=useState(0);

let timeRef=useRef(null);


function startTimer(){
 timeRef.current= setInterval(() => {
    setTime(time => time+1);
  }, 1000);

}
function stopTimer(){
  clearInterval(timeRef.current);
  timeRef.current=null;

}
function resetTimer(){
  stopTimer();
  setTime(0);

} 

  return (
    <div>
      <h1>Stopwatch: {time} seconds</h1>
      <button onClick={startTimer}>Start</button>
      <br /><br />
      <button onClick={stopTimer}>Stop</button>
      <br /><br />
      <button onClick={resetTimer}>Reset</button>
      
    </div>
  )
}

















// import React, { useEffect, useRef, useState } from 'react'

// function App() {
// const[count,setCount]=useState(0);
// let val=useRef(0);

// let btnRef=useRef();

// function handleIncrement(){
//   val.current=val.current+1;
//   console.log("Value Of Val:",val.current);
//   setCount(count+1);
// }


// function changeColor(){
//   btnRef.current.style.backgroundColor="red"

// }

// //It runs of every render

// useEffect(()=>{
//   console.log("Le fir aa gae" );
// })

//   return (
//     <div>
//       <div>
//         Count:{count}
//       </div>
//       <button ref={btnRef} onClick={handleIncrement}>Increment</button>
//       <br />
//       <button onClick={changeColor}>
//         Click to Change button
//       </button>
      
//     </div>
//   )
// }

// export default App;