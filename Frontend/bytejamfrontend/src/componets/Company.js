import React, { useState, useEffect, useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";


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
      pdf.save("page-export-company.pdf");
    
    };

    
    
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


          <div ref={pageRef} className="p-5 border-8 border-[#5C1D29] rounded-lg">
          <h1 className="text-xl font-bold mb-4">All Companies</h1>

          {loading ? (
            <p>Loading businesses...</p>
          ) : (
            <div>
              {business.length > 0 ? (
                <div className="grid grid-cols-2 w-full max-w-2xl">
                  
                  <div>
                    <h4 className="text-lg font-semibold border-b-2 mb-2">Name</h4>
                    {business.map((business) => (
                      <p key={business.businessId} className="py-1">{business.businessName}</p>
                    ))}
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold border-b-2 mb-2">Pins</h4>
                    {business.map((business) => (
                      <div key={business.businessId} className="flex items-center gap-2 py-1">
                        <span>{business.businessLogin.password}</span>
                        <button 
                          onClick={() => handleDelete(business.businessId)}
                          className="bg-red-500 text-white rounded hover:bg-red-700"
                        >
                          Delete
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <p>No businesses found.</p>
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

export default CompanyPage;
