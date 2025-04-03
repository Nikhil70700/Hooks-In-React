import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import '../Styles/UseEffectWatch.css'

const UseEffectWatch = () => {
    const [time, SetTime] = useState(0);

    useEffect(() => {
        setInterval(() => {
            const updatedTime = new Date();
            SetTime(updatedTime.toLocaleTimeString());
        }, 1000)
    }, [time])
    return (
        <div className="watch-container">
      <p className="watch-text">Watch: {time}</p>
    </div>
    )
}

export default UseEffectWatch