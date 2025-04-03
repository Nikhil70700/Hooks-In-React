import React, { useState } from 'react'
import '../ContactForm/ContactForm.css'

const ContactForm = () => {

    const[userName,setUsername]=useState("");
    const[email,setEmail]=useState("");
    const[message,setMessage]=useState("");
const handleFormSubmit=(event)=>{
event.preventDefault();
const userData={
    userName,
    email,
    message
}
console.log(userData);

}

    return (
        <div>
            <div>
                <h1>Contact Form</h1>
                <form onSubmit={handleFormSubmit}>
                    <label htmlFor="username">UserName</label>
                    <input type="text" name='userName' required autoComplete='off' value={userName} onChange={(e)=>setUsername(e.target.value)} />

                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' required autoComplete='off' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <label htmlFor="message">Message</label>
                    <textarea type="message" name="message" required autoComplete='off' rows="6" value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
                    <button type='submit'>Send Message</button>


                </form>
            </div>

        </div>
    )
}

export default ContactForm