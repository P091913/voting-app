import React, { useState } from 'react';





function AdminForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    general: {
      voter_id: '',
      name: '',
      businessLogin_id: '',
      staffCoach_id: '',
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const [parent, key] = name.split('.');

    if (parent === 'general') {
      setFormData((prevData) => ({
        ...prevData,
        general: {
          ...prevData.general,
          [key]: value,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
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
        alert('Admin and General information submitted successfully!');
      } else {
        alert('Submission failed.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Admin Information</h2>
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </label>

      <h2>General Information</h2>
      <label>
        Voter ID:
        <input
          type="number"
          name="general.voter_id"
          value={formData.general.voter_id}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Name:
        <input
          type="text"
          name="general.name"
          value={formData.general.name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Business Login ID:
        <input
          type="number"
          name="general.businessLogin_id"
          value={formData.general.businessLogin_id}
          onChange={handleChange}
        />
      </label>
      <label>
        Staff Coach ID:
        <input
          type="number"
          name="general.staffCoach_id"
          value={formData.general.staffCoach_id}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
}

export default AdminForm;
