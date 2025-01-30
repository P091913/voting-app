import React, { useState, useEffect } from "react";


{/*Page: 7*/}

const SchoolRepPage = () => {
    
    const [formData, setFormData] = useState({
        username: '',
        staffCoachType: null,
        password: '',
        general:
        {
          name:''
        }
        });
    
        const [staffCoach, setStaffCoach] = useState([]); 
        const [loading, setLoading] = useState(true); 
      
        const handleChange = (e) => {
            const { name, value } = e.target;
            // If it's the staffCoachType dropdown, ensure the value is converted to a number
            const updatedValue = name === 'staffCoachType' ? Number(value) : value;
            setFormData({
              ...formData,
              [name]: updatedValue,
            });
          };
        
       // create a new StaffCoach
        const handleSubmit = async (e) => {
          e.preventDefault();
      
          try {
            const response = await fetch('http://localhost:5276/api/StaffCoach', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(formData),
            });
      
            if (response.ok) {
              alert('Staff Coach information submitted successfully!');
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
              const response = await fetch(`http://localhost:5276/api/StaffCoach/${id}`, {
                method: 'DELETE',
              });
        
              if (response.ok) {
                //remove admin
                setStaffCoach(staffCoach.filter((staffCoach) => staffCoach.id !== id));
                alert('StaffCoach deleted successfully');
              } else {
                alert('Failed to delete business');
              }
            } catch (error) {
              console.error('Error deleting StaffCoach:', error);
              alert('Error deleting admin');
            }
          };
    
          const fetchStaffCoach = async () => {
            try {
              const response = await fetch("http://localhost:5276/api/StaffCoach"); 
                
                
              if (response.ok) {
                const data = await response.json();

                if (Array.isArray(data)) {
                    setStaffCoach(data);
                  } else {
                    alert("Unexpected response format.");
                  }
                setLoading(false);
              } else {
                alert("Failed to fetch StaffCoach.");
                setLoading(false);
              }
            } catch (error) {
              console.error("Error fetching StaffCoaches:", error);
              setLoading(false);
            }
          };
      
        // Fetch StaffCoach
        useEffect(() => {
          fetchStaffCoach();
        }, []);
    
    return (
    <div>
        <div className="form-container">
            
            <h2>Add School Rep</h2>

            <form onSubmit={handleSubmit}>
                <label >Name:</label>
                <input 
                    type="text"
                    name="username" 
                    value={formData.username}
                    onChange={handleChange}
                    required 
              />

                <label>Education Division:</label>
                    <select 
                        name="staffCoachType" 
                        value={formData.staffCoachType} 
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled selected>Select an option</option>
                        <option value={1}>IHCC</option>
                        <option value={2}>Bits</option>
                        <option value={3}>Bytes</option>
                    </select>
            <button type="submit">Add StaffCoach</button>
        </form>
      </div>

    
        <div >
            <h1>All StaffCoaches</h1>
            {loading ? (
                <p>Loading StaffCoaches...</p>
            ) : (
                <div>
                    {staffCoach.length > 0 ? (
                        <ul>
                            <h4>Name</h4>
                            {staffCoach.map((coach) => (
                                <li key={coach.id}>
                                    <strong>{coach.username}</strong>
                                    {
                                        coach.staffCoachType === 1 ? ' (IHCC)' : 
                                        coach.staffCoachType === 2 ? ' (Bits)' : 
                                        coach.staffCoachType === 3 ? ' (Bytes)' : ' (Unknown)'
                                    }
                                </li>
                            ))}

                            <h4>Pins</h4>
                            {staffCoach.map((coach) => (
                                <li key={coach.id}>
                                    <strong>{coach.password}</strong>
                                    <button onClick={() => handleDelete(coach.id)}>Delete</button>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No Staff Coaches Found</p>
                    )}
                </div>
            )}
        </div>
    </div>
        );
    };
    
export default SchoolRepPage;
