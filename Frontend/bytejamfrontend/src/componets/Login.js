import React, { useState, useEffect } from "react";


{/*Page: 2*/}



// Functional Component: A reusable, self-contained piece of UI in React
const LoginPage = () => {
    const [formData, setFormData] = useState({
      username: '',
    email: '',
    password: '',
    general:
    {
      name:''
    }
    });
  
    
  //Diffrent States
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loginError, setLoginError] = useState("");

  // Updates Text fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Get all the admins from the api link
  const fetchAdmins = async () => {
      try {
        const response = await fetch('http://localhost:5276/api/admin');
        if (response.ok) {
          const data = await response.json();
          setAdmins(data);
          setLoading(false);
        } else {
          alert('Failed to fetch admins.');
        }
      } catch (error) {
        console.error('Error fetching admins:', error);
        setLoading(false);
      }
    };
  
    // Used To Get All The Admins
    useEffect(() => {
      fetchAdmins();
    }, []);

    const handleDelete = async (id) => 
      {
        try {
          const response = await fetch(`http://localhost:5276/api/admin/${id}`, {
            method: 'DELETE',
          });
    
          if (response.ok) {
            //remove admin
            setAdmins(admins.filter((admin) => admin.id !== id));
            alert('Admin deleted successfully');
          } else {
            alert('Failed to delete admin');
          }
        } catch (error) {
          console.error('Error deleting admin:', error);
          alert('Error deleting admin');
        }
      };
    


    const handleSubmit = async (e) => {
      e.preventDefault();
  
      // Search for a matching admin based on username and password
      const admin = admins.find(
        (admin) => admin.username === formData.username && admin.password === formData.password
      );
  
      if (admin) {

        alert('Login successful!');

        setLoginError(""); 
        
      } else {
        setLoginError("Invalid username or password, Please Try Again");
      }
    };



  return (
    <div>

      <h1>Admin Sign In Form</h1>
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
            type="password" 
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit">Login</button>
        </form>
        
        {loginError && <p>{loginError}</p>}
      </div>

      <div className="admins-list">
        {loading ? 
        (
          <p>Loading admins...</p>
        ) : (
          <div>
            <h2>All Admins (this is just test stuff)</h2>

            <ul>
              {admins.length > 0 ? (
                admins.map((admin) => (
                  <li key={admin.id}>
                    <strong>Id: {admin.id} - {admin.username}</strong> - {admin.email} - {admin.password}
                    <button onClick={() => handleDelete(admin.id)}>Delete</button>
                  </li>
                ))
              ) : (
                <p>No admins found.</p>
              )}
            </ul>

          </div>
        )}
      
      </div>
    </div>
  );
};

export default LoginPage;
