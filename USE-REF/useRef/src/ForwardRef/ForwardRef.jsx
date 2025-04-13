import React, { useRef } from 'react'
import BeforeReact19Input from '../ForwardRef/BeforeReact19Input';


const ForwardRef = () => {
  const username = useRef(null);
  const password = useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(username.current.value, password.current.value)
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <BeforeReact19Input type="text" label="username"   ref={username} />
      <BeforeReact19Input type="password" label="password" ref={password} />
      <button>Submit</button>
      

    </form>
  )
}

export default ForwardRef