import React, { useState } from 'react'
import '../ContactForm/ContactFormTwo.css'

const ContactFormTwo = () => {
    const [messages, setMessages] = useState({
        firstName: "",
        email: "",
        message: "",
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setMessages((prev) => ({
            ...prev, [name]: value,
        }))

    }
    const handleFormSubmit = (event) => {
        event.preventDefault();

        console.log(messages)
    }
    return (
        <div className='container'>
            <div className='card'>
                <h1>Contact form</h1>
                <form onSubmit={handleFormSubmit}>
                    <label htmlFor="firstName">FirstName</label>
                    <input type="text" name='firstName' required autoComplete='off' value={messages.userName}
                        // onChange={(e) => setUsername(e.target.value)} 
                        onChange={handleInputChange}
                    />

                    <label htmlFor=""></label>

                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' required autoComplete='off' value={messages.email}
                        // onChange={(e) => setEmail(e.target.value)} 
                        onChange={handleInputChange}
                    />
                    <label htmlFor="message">Message</label>
                    <textarea type="message" name="message" required autoComplete='off' rows="6" value={messages.message}
                        // onChange={(e) => setMessage(e.target.value)}
                        onChange={handleInputChange}
                    ></textarea>
                    <button type='submit'>Send Message</button>


                </form>
            </div>

        </div>
    )
}

export default ContactFormTwo;