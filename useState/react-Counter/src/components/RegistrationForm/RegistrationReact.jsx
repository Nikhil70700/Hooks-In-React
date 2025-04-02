import React, { useState } from 'react';
import '../../Styles/Registration.css';

const RegistrationReact = () => {

    const [user, setUser] = useState({
        firstName: '',
        middleName:'',
        lastName: '',
        email: '',
        password: '',
        phoneNumber: '',

    });


    const handleInputChnage = (e) => {
        const { name, value } = e.target;

        setUser((prev) => ({ ...prev, [name]: value }));

    };
    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(user);
    }

    return (
        <>
        <section className='summary '
                style={{ marginBottom: "5px", textAlign:"center" }}
            >
                <p>Hello my name Is:
                    <span> {user.firstName} {user.middleName} {user.lastName}</span> <br />
                    My email address Is: <span>{user.email}</span> <br /> My phone number Is: <span>{user.phoneNumber}</span>
                </p>
            </section>
            <form onSubmit={handleFormSubmit}>
                <div className='container'>
                    <h1>Sign Up</h1>
                    <p>Please fill this form to create an account</p>

                    <label htmlFor="firstName">
                        <p>First Name</p>
                    </label>
                    <input type="text" name='firstName' placeholder='Enter firstName' required value={user.firstName} onChange={handleInputChnage} />
                    <label htmlFor="text">
                       <p> Middle Name</p>
                    </label>
                    <input type="text" name='middleName' placeholder='Enter middleName' required value={user.middleName} onChange={handleInputChnage} />
                    <label htmlFor="lastName">
                        <p>Last Name</p>
                    </label>
                    <input type="text" name='lastName' placeholder='Enter lastName' required value={user.lastName} onChange={handleInputChnage} />
                    <label htmlFor="email">
                        <p>Email</p>
                    </label>
                    <input type="text" placeholder='Enter Email' name='email' required value={user.email} onChange={handleInputChnage} />
                    <label htmlFor="password">
                        <p>Password</p>
                    </label>
                    <input type="password" placeholder='Enter password' name='password' required value={user.password} onChange={handleInputChnage} />
                    <label htmlFor="phone">
                        <p>Phone Number</p>
                    </label>
                    <input type="tel" name='phoneNumber' placeholder='Enter  Phone Number' required value={user.phoneNumber} onChange={handleInputChnage} />
                    <p>
                        By create an account you agree to our <a href="#" style={{ color: "dodgerblue" }}>Term & privacy</a>
                    </p>
                    <div className="clearfix">
                        <button type='submit' className='btn'>Sign Up</button>
                    </div>

                </div>

            </form>
        </>
    )
}

export default RegistrationReact;