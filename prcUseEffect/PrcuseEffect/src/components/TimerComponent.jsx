import React, { useState } from 'react'
import { useEffect } from 'react';

function TimerComponent() {
    const[seconds,setSecond]=useState(0);
    useEffect(()=>{
        const intervalId=setInterval(() => {
          console.log("setInterval executed");
            setSecond(prevSeconds => prevSeconds + 1);
    },1000);

    return()=>{
      console.log("TIme to Stop");
      clearInterval(intervalId);
    };
  },[]);

  //It will run on first render
  return (
    <div>
      <h1>Seconds:{seconds}</h1>
    </div>
  )
}

export default TimerComponent;