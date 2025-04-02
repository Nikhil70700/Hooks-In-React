import React, { useState } from 'react';
import '../Styles/Registration.css'

const Registration = () => {

    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleInputChnage = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case "firstName": setfirstName(value);
                break;
            case "lastName": setlastName(value);
                break;
            case "email": setemail(value);
                break;
            case "password": setpassword(value);
                break;
            case "phoneNumber": setPhoneNumber(value);

        }





        // if(name==="firstName"){
        //     setfirstName(value);
        // }
        // else if(name==="lastName"){
        //     setlastName(value);
        // }
        // else if(name==="email"){
        //     setemail(value);
        // }
        // else if(name==="password"){
        //     setpassword(value);
        // }
        // else{
        //     setPhoneNumber(value);
        // }



        // setfirstName(e.target.value);
        // setlastName(e.target.value);
        // setemail(e.target.value);
        // setpassword(e.target.value);
        // setPhoneNumber(e.target.value);

    };
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const formData = {
            firstName,
            lastName,
            email,
            password,
            phoneNumber,

        }

        console.log(formData);
    }

    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <div className='container'>
                    <h1>Sign Up</h1>
                    <p>Please fill this form to create an account</p>

                    <label htmlFor="firstName">
                        <b>First Name</b>
                    </label>
                    <input type="text" name='firstName' placeholder='Enter firstName' required value={firstName} onChange={handleInputChnage} />
                    <label htmlFor="lastName">
                        <b>Last Name</b>
                    </label>
                    <input type="text" name='lastName' placeholder='Enter lastName' required value={lastName} onChange={handleInputChnage} />
                    <label htmlFor="email">
                        <b>Email</b>
                    </label>
                    <input type="text" placeholder='Enter Email' name='email' required value={email} onChange={handleInputChnage} />
                    <label htmlFor="password">
                        <b>Password</b>
                    </label>
                    <input type="password" placeholder='Enter password' name='password' required value={password} onChange={handleInputChnage} />
                    <label htmlFor="phone">
                        <b>Phone Number</b>
                    </label>
                    <input type="tel" name='phoneNumber' placeholder='Enter  Phone Number' required value={phoneNumber} onChange={handleInputChnage} />
                    <p>
                        By create an account you agree to our <a href="#" style={{ color: "dodgerblue" }}>Term & privacy</a>
                    </p>
                    <div className="clearfix">
                        <button type='submit' className='btn'>Sign Up</button>
                    </div>

                </div>

            </form>

            <section className='summary'
            style={{textAlign:"center",marginTop:"30px"}}
            >
                <p>Hello my name is
                    <span>{firstName} {lastName}</span>
                    .My email address is <span>{email}</span> and my phone number is <span>{phoneNumber}</span>
                </p>
            </section>



        </>
    )
}

export default Registration;