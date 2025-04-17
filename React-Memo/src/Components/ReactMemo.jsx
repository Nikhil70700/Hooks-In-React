import React, { useMemo } from 'react'
import { useState } from 'react'
import { Count } from './MemoCount';



const ReactMemo = () => {
  const [count, setCount] = useState(0);
  const myBioData = useMemo(() => {
    return {
      fName: 'Nikhil',
      mName:'Kumar',
      lName:"Pandey",
      Age: 25,
    };
  }, [])

  return (
    <>
      <div className="p-4 h-52 font-display tracking-wider flex flex-col justify-end items-center">
        <h1 className="text-4xl mb-2 font-extrabold text-red-500 text-shadow-lg/70">{count}</h1>
        <button
          className="btn bg-green-600 font-bold  py-2 px-3 rounded hover:shadow-xl/50"
          onClick={() => setCount(prev => prev + 1)}
        >
          Increment
        </button>
      </div>
      <Count bioData={myBioData} />
    </>
  )
}

export default ReactMemo