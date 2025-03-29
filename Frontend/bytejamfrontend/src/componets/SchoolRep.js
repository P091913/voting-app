import React, { useState, useEffect, useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";


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


    const pageRef = useRef();
    const handleExport = async () => {
      

      const input = pageRef.current;

      const canvas = await html2canvas(input, { scale: 3 });
      const imgData = canvas.toDataURL("image/png");


      // jsPDF(x,x,x)
      // Orienatation: p(Portrait) or l(Landscape)
      // Unit of Measurement: mm, cm, in, px, pt
      // Page Size: a4, letter, a3, a5, ect
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("page-exportschoolRep.pdf");
    
    };
    
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

    
      <div ref={pageRef} className="p-5 border-8 border-[#5C1D29] rounded-lg">
      <h1 className="text-xl font-bold mb-4">All StaffCoaches</h1>
      
      {loading ? (
        <p>Loading StaffCoaches...</p>
      ) : (
        <div>
          {staffCoach.length > 0 ? (
            <div className="grid grid-cols-2 w-full max-w-2xl gap-4">

              {/* Column for Names */}
              <div>
                <h4 className="text-lg font-semibold border-b-2 mb-2">Name</h4>
                {staffCoach.map((coach) => (
                  <p key={coach.id} className="py-1">
                    {coach.username} 
                    {
                      coach.staffCoachType === 1 ? ' (IHCC)' : 
                      coach.staffCoachType === 2 ? ' (Bits)' : 
                      coach.staffCoachType === 3 ? ' (Bytes)' : ' (Unknown)'
                    }
                  </p>
                ))}
              </div>

              {/* Column for Pins */}
              <div>
                <h4 className="text-lg font-semibold border-b-2 mb-2">Pins</h4>
                {staffCoach.map((coach) => (
                  <div key={coach.id} className="flex items-center gap-2 py-1">
                    <span>{coach.password}</span>
                    <button 
                      onClick={() => handleDelete(coach.id)} 
                      className="bg-red-500 text-white rounded hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>

            </div>
          ) : (
            <p>No Staff Coaches Found</p>
          )}
        </div>
      )}
      <button onClick={handleExport} className="bg-red-500 text-white py-1 rounded hover:bg-red-700">Export Page To PDF</button>
      <br></br>
      <br></br>
      <button className="bg-red-500 text-white py-1 rounded hover:bg-red-700">Delete All (NO WORK YET)</button>
    </div>
    </div>
        );
    };
    
export default SchoolRepPage;
