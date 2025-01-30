import React, { useState, useEffect } from 'react';

const PinsPage = () => {
  // Company States Data
  const [business, setBusinesses] = useState([]);
  const [loadingBusiness, setLoadingBusinesses] = useState(true);

  // Fetch businesses
  const fetchBusinesses = async () => {
    try {
      const response = await fetch("http://localhost:5276/api/Business");

      if (response.ok) {
        const data = await response.json();

        if (Array.isArray(data)) {
          setBusinesses(data);
        } else {
          alert("Unexpected response format.");
        }

        setLoadingBusinesses(false);
      } else {
        alert("Failed to fetch businesses.");
        setLoadingBusinesses(false);
      }
    } catch (error) {
      console.error("Error fetching businesses:", error);
      setLoadingBusinesses(false);
    }
  };

  // Delete A Company
  const handleDeleteBusiness = async (id) => {
    try {
      const response = await fetch(`http://localhost:5276/api/Business/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Remove business from state
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

  // StaffCoach States Data
  const [staffCoach, setStaffCoach] = useState([]);
  const [loadingStaff, setLoadingStaff] = useState(true);

  const handleDeleteStaff = async (id) => {
    try {
      const response = await fetch(`http://localhost:5276/api/StaffCoach/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Remove staff coach from state
        setStaffCoach(staffCoach.filter((staffCoach) => staffCoach.id !== id));
        alert('StaffCoach deleted successfully');
      } else {
        alert('Failed to delete staff coach');
      }
    } catch (error) {
      console.error('Error deleting StaffCoach:', error);
      alert('Error deleting staff coach');
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

        setLoadingStaff(false);
      } else {
        alert("Failed to fetch StaffCoach.");
        setLoadingStaff(false);
      }
    } catch (error) {
      console.error("Error fetching StaffCoaches:", error);
      setLoadingStaff(false);
    }
  };

  // Fetch StaffCoach
  useEffect(() => {
    fetchStaffCoach();
  }, []);

  // Fetch Businesses
  useEffect(() => {
    fetchBusinesses();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Content */}
      <div className="p-6">
        {/* Pins Section */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Company Pins</h3>
          <div className="bg-white shadow-lg p-4 rounded-lg mb-4">
            <div className="flex flex-col">
              {loadingBusiness ? (
                <p>Loading businesses...</p> // Show loading message while fetching
              ) : (
                <div>
                  {business.length > 0 ? (
                    <ul>
                      {business.map((business) => (
                        <li key={business.businessId} className="flex justify-between items-center mb-2">
                          <strong>{business.businessLogin.username} - {business.businessLogin.password}</strong>
                          <button
                            className="bg-red-500 text-white py-1 px-3 rounded"
                            onClick={() => handleDeleteBusiness(business.businessId)}
                          >
                            Delete
                          </button>
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
        </div>

        {/* StaffCoach Pins */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">School Pins</h3>
          <div className="bg-white shadow-lg p-4 rounded-lg mb-4">
            <div className="flex flex-col">
              {loadingStaff ? (
                <p>Loading StaffCoaches...</p> // Show loading message while fetching
              ) : (
                <div>
                  {staffCoach.length > 0 ? (
                    <ul>
                      {staffCoach.map((coach) => (
                        <li key={coach.id} className="flex justify-between items-center mb-2">
                          <strong>{coach.username} - {coach.password}</strong>
                          <button
                            className="bg-red-500 text-white py-1 px-3 rounded"
                            onClick={() => handleDeleteStaff(coach.id)}
                          >
                            Delete
                          </button>
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
        </div>
      </div>
    </div>
  );
};

export default PinsPage;
