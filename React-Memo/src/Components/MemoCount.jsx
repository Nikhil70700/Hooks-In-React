import { memo } from "react";
import { useRef } from "react"

 const Count=()=>{
    const renderCount=useRef(0);
    console.log(renderCount);

    return(
        <div className="mt-3 font-display text-center">
            <p>
                Nothing changed here but I've now rendered:
                <span className="text-red-600">{renderCount.current++}time(s)</span> 
            </p>
        </div>
    )

}

export default memo(Count);