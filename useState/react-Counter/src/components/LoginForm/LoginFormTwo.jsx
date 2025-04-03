import React, { useState } from 'react';
import './LoginForm.css';

const LoginFormTwo = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className='container'>
      <div className="Card">
        <h1>Login Form</h1>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name='username'
            required
            autoComplete='off'
            value={formData.username}
            onChange={handleChange}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name='password'
            required
            autoComplete='off'
            value={formData.password}
            onChange={handleChange}
          />

          <button type='submit'>Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginFormTwo;
