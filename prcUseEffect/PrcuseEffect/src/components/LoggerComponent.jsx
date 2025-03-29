import { useEffect,useState } from "react";

function LoggerComponent(){
    const[count,setCount]=useState(0);

    useEffect(()=>{
        console.log("   COMPONENT RENDER OR COUNT CHNAGED",count);
    });

    //runs on every render
    return(
        <div>
            <h1>Count:{count}</h1>
            <button onClick={()=>setCount(count+1)}>Increment</button>
        </div>
    )
}

export default LoggerComponent;