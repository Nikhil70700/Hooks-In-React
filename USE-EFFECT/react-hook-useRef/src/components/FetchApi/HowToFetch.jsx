import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const HowToFetch = () => {
    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((data) => {
                setApiData(data)
            })
            .catch((error) => console.log(error))
    }, [])

    return (
        <div className='container effect-container'>
            <ul>data:
                {
                    apiData.map((currData) => {
                        return <li key={currData.key}>{currData.title}</li>
                    })
                }

            </ul>
        </div>
    )
}

export default HowToFetch; 