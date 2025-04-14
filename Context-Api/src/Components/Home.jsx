import React, { useContext } from 'react'
import { BioContext } from '.'

const Home = () => {
    const {myName,myAge}=useContext(BioContext)
  return (
    <div>
        <h1>Hii Context_api my Name is :{myName} and I am {myAge} years Old</h1>
    </div>
  )
}

export default Home