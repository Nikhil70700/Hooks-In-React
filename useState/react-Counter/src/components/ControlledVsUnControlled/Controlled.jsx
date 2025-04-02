import React, { useState } from 'react'

const Controlled = () => {
const[name,setName]=useState('');

const handleChnage=(event)=>{
    setName(event.target.value);
}
const handleSubmit=(event)=>{
    event.preventDefault();
    const dataValue=document.querySelector('#inputName').value;

    console.log(dataValue);

}

  return (
    
    <section>
    <h1>Controlled Component</h1>
    <form onSubmit={handleSubmit}>
        <label>
            Name:
            <input id='inputName' name='name' type="text" value={name} onChange={handleChnage} />
        </label>
        <br />
        
        <button  type='submit'>Submit</button>
    </form>
</section>

  )
}

export default Controlled