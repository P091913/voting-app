import React, { useState, useEffect } from 'react';
import Navbar from './Navbar'; 


{/*Page: 1*/}


const SignUpFormPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    general:
    {
      name:''
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
 // create a new admin
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5276/api/admin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Admin information submitted successfully!');
      } else {
        alert('Submission failed.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>

      <div className="form-container">
    
      <h1>Create Admin Account Form</h1>
        <form onSubmit={handleSubmit}>

            <label>Username:</label>
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />

            <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

            <button type="submit">Sign Up</button>

        </form>
      </div>


    </div>
  );
};

export default SignUpFormPage;
