import React, { useState, useEffect } from "react";


{/*Page: 6*/}

const CompanyPage = () => {

  const [formData, setFormData] = useState({
      businessname: '',
      numberofpeople: '',
      businessLogin:
      {
        username: '',
        password: ''
      },
      general:
      {
        name: ''
      }
    });

    const [business, setBusinesses] = useState([]);
    const [loading, setLoading] = useState([]); 
   
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
    
   // create a new company
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await fetch('http://localhost:5276/api/Business', {
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


    const handleDelete = async (id) => 
      {
        try {
          const response = await fetch(`http://localhost:5276/api/Business/${id}`, {
            method: 'DELETE',
          });
    
          if (response.ok) {
            //remove admin
            setBusinesses(business.filter((business) => business.businessId !== id));
            alert('Admin deleted successfully');
          } else {
            alert('Failed to delete business');
          }
        } catch (error) {
          console.error('Error deleting business:', error);
          alert('Error deleting admin');
        }
      };

      const fetchBusinesses = async () => {
        try {
          const response = await fetch("http://localhost:5276/api/Business"); 
      
          if (response.ok) {
            const data = await response.json();
            
            // Check if the response is an array of businesses
            if (Array.isArray(data)) {
              setBusinesses(data);
            } else {
              alert("Unexpected response format.");
            }
            
            setLoading(false);
          } else {
            alert("Failed to fetch businesses.");
            setLoading(false);
          }
        } catch (error) {
          console.error("Error fetching businesses:", error);
          setLoading(false);
        }
      };
  
    // Fetch businesses
    useEffect(() => {
      fetchBusinesses();
    }, []);
    
    return (
        <div>
          <div className="form-container">
            <h2>Add Company</h2>

            <form onSubmit={handleSubmit}>
                <label >Name:</label>
                <input 
                  type="text"
                  name="businessname" 
                  value={formData.businessname}
                  onChange={handleChange}
                  required 
              />


              <label >Number Needed:</label>
              <input 
                type="text" 
                name="numberofpeople"
                value={formData.numberofpeople}
                onChange={handleChange}
                required 
              />
              
              
              <button type="submit">Add Company</button>
            </form>
          </div>

          <div>
      <h1>All Businesses</h1>
      {loading ? (
        <p>Loading businesses...</p> // Show loading message while fetching
      ) : (
        <div>
          {business.length > 0 ? (
            <ul>
              <h4>Name</h4>
              {business.map((business) => (
                <li key={business.businessId}>
                  <strong>{business.businessName}</strong>
                </li>
              ))}
              <h4>Pins</h4>
              {business.map((business) => (
                <li key={business.businessId}>
                  <strong>{business.businessLogin.password}</strong>
                  <button onClick={() => handleDelete(business.businessId)}>Delete</button>
                </li>
              ))}
            </ul>
          ) : (
            <p>No businesses found.</p>
          )}
        </div>
      )}
    </div>


        </div> 
        );
    };

export default CompanyPage;
