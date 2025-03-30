import React from 'react'

const UnControlled = () => {
const handleSubmit=(event)=>{
  event.preventDefault();
  const DataValue=document.querySelector('#inputName').value;
  console.log(DataValue);

}

  return (
    <section>
        <h1>Uncontrolled Component</h1>
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input id='inputName' name='name' type="text" />
            </label>
            <br />
            <button type='submit'>Submit</button>
        </form>
    </section>
  )
}

export default UnControlled;