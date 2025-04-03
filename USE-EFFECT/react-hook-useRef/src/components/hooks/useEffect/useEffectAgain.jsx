// import React from 'react'
// import { useState } from 'react'
// import { useEffect } from 'react'
// import { FaPlus, FaMinus } from 'react-icons/fa';
// import '../Styles/UseEffectAgain.css'

// const UseEffectAgain = () => {
//     const[count,setCount]=useState(0);
//     useEffect(()=>{
//         console.log('Count Value :', count);
//     },[count]);
//   return (
//     <div className='container effect-container'>
//         <h1>UseEffectAgain</h1>
//         <p>Count:{count}</p>
//         <div className='button-container'>
//         <FaPlus onClick={()=>setCount(count+1)} size={24} color="#333" />
//         <FaMinus onClick={()=>setCount(count-1)} size={24} color="#333" />
//         </div>
//     </div>
//   )
// }

// export default UseEffectAgain;



import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const useEffectAgain = () => {
    const[date,setDate]=useState(0);
    

    useEffect(()=>{
        setInterval(()=>{
         const updatedDate=new Date();
        setDate(updatedDate.toLocaleTimeString())
        },1000)
        

    },[date])
  return (
    <div>

        <p>Date:{date}</p>
        
    </div>
  )
}

export default useEffectAgain