import { useEffect, useState } from "react";
import "./index.css";


//! React hook Challenge : Dynamic State Management and Document Title Updated with useEffect

//* Description : In this challenge ,you'll create a react component that dynamically manages state using `useState` hooks.Your Component will Include :
//? 1. A counter that increments when a button is clicked .
//? 2. An Input field where users can type their name .
//? 3. The Document will Update to show the current count.


export const Challenge=()=>{
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");


    useEffect(()=>{
        document.title=`count ${count}`;
    },[count])

    useEffect(()=>{
        console.log(name);
    },[name])

    return(
        <div className="container effect-container">
            <h1>Use Effect Challenge</h1>

            <p>Count : <span>{count}</span></p>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <p>Name: <span>{name}</span>
            </p>
            <input type="text" value={name} onChange={(event)=>setName(event.target.value)} />

        </div>
    )
}