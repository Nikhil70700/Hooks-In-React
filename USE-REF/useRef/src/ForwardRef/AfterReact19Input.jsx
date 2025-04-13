import React from 'react'
import { useId } from 'react'

const AfterReact19Input=((props)=>{
    const id=useId();
    return(
        <div>
            <label htmlFor={id}>{props.label}</label>
            <input type="text" ref={props.ref} />
        </div>
    )
})

export default AfterReact19Input