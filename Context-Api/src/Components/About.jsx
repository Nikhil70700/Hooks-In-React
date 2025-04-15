import React, { useContext } from 'react'
import { BioContext } from '.'

const About = () => {
    const {myFname,myMname,myLname,myAge}=useContext(BioContext)
  return (
    <div>
        <h1>Hii Context_api (About) my Name is :{myFname}  {myMname} {myLname} and I am {myAge} years Old</h1>
    </div>
  )
}

export default About