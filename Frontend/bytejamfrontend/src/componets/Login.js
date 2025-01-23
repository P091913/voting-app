import React, { useState } from "react";


{/*Page: 2*/}



// Functional Component: A reusable, self-contained piece of UI in React
const LoginPage = () => {
    const [formData, setFormData] = useState({
      username: '',
      password: '',
    });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


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
    
    <form onSubmit={handleSubmit}>

        <label>Username:</label>
            <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
            />

        <label>Password:</label>
            <input
                type="text"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
            />

        

        <button type="submit">Sign Up</button>

    </form>
  </div>

    </div>
  );
};

// React export statement: Allows this component to be imported and used in other files
export default LoginPage;
