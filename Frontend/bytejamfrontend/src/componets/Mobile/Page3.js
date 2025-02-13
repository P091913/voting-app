import React, { useState, useEffect } from 'react';

const MobilePage3 = () => {
  const [formDataCompany, setFormDataCompany] = useState({
    businessname: '',
    numberofpeople: '',
    businessLogin: {
      username: '',
      password: ''
    },
    general: {
      name: ''
    }
  });

  const [formDataRep, setFormDataRep] = useState({
    username: '',
    staffCoachType: null,
    password: '',
    general: {
      name: ''
    }
  });

  const [password, setPassword] = useState(""); 
  const [businesses, setBusinesses] = useState([]);
  const [staffCoach, setStaffCoach] = useState([]);
  const [loading, setLoading] = useState(false); 
  const [loginError, setLoginError] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Get Companies
  const fetchBusinesses = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:5276/api/Business");

      if (response.ok) {
        const data = await response.json();
        if (Array.isArray(data)) {
          setBusinesses(data);
        } else {
          alert("Unexpected response format.");
        }
      } else {
        alert("Failed to fetch businesses.");
      }
    } catch (error) {
      console.error("Error fetching businesses:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch StaffCoach
  const fetchStaffCoach = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:5276/api/StaffCoach");

      if (response.ok) {
        const data = await response.json();
        if (Array.isArray(data)) {
          setStaffCoach(data);
        } else {
          alert("Unexpected response format.");
        }
      } else {
        alert("Failed to fetch StaffCoach.");
      }
    } catch (error) {
      console.error("Error fetching StaffCoaches:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBusinesses();
    fetchStaffCoach();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const businessLogin = businesses.find(biz => biz.businessLogin?.password === password);
    const staffLogin = staffCoach.find(rep => rep.password === password);

    if (businessLogin || staffLogin) {
      alert('Login successful!');
      setLoginError("");
      // You can navigate to the next page here using useNavigate()
    } else {
      setLoginError("Invalid username or password. Please try again.");
    }
  };

  return (
    <div>
      <h2>Team Voting</h2>
      <h1>Company & School Representative</h1>

      <form onSubmit={handleSubmit}>
        <label>Enter Your Password Given To You</label>
        <input 
          type="password"
          value={password}
          onChange={handlePasswordChange} 
          placeholder="Enter your pin" 
        />
        <button type="submit">Next</button>
      </form>

      {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
    </div>
  );
};

export default MobilePage3;
