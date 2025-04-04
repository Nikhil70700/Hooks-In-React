import React from 'react'
import { useState } from 'react';
import '../Styles/CleanUp.css';
import { useEffect } from 'react';

const Cleanup = () => {
    const[count,setCount]=useState(0);
   
    useEffect(()=>{
        const intervalId= setInterval(()=>{
        setCount((prev)=>prev+1)
        },1000);
        return ()=>clearInterval(intervalId)
    },[])
    

  return (
    <div className='container'>
     <div className='counter'>
        <p>My Subscriber on YouTube</p>
        <div className='odometer' id='odometer'>
            {count}
        </div>
        <h3 className='title'>
            Subscriber <br /> Realtime Counter
        </h3>
     </div>
    </div>
  )
}

export default Cleanup;


