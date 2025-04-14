import React from 'react'
import { useId } from 'react';

const UseId = () => {
    const usernameId=UseId();
    const emailID=useId();

  return (
   <form>
    <div>
        <label htmlFor={usernameId}>User Name:</label>
        <input type="text" id={usernameId} name='name' />
    </div>
    <div>
        <label htmlFor={emailID}>Email:</label>
        <input type="email" id={emailID} name='email' />
    </div>
    <button type='submit'>Submit</button>
   </form>
  )
}

export default UseId;