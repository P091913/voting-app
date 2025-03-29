import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";


const MobilePage2 = () => {

  const [selectedValue, setSelectedValue] = useState("");

  const navigate = useNavigate();
  
  const handleNext = () => 
    {

      if(selectedValue != "option1"){
          navigate("/mobile3");
        } else 
        {
          navigate("/mobile4");
        }
    };
  

  return (
    <div>
      <label htmlFor="educationLevel">Select an option:</label>
      <select
        id="educationLevel"
        name="educationLevel"
        value={selectedValue}
        onChange={(e) => setSelectedValue(e.target.value)}
      >
        <option value="">Select an option</option>
        <option value="option1">High School/College Student</option>
        <option value="option2">Company</option>
        <option value="option3">School Representative</option>
      </select>
      <button onClick={handleNext} >Next</button>
    </div>
  );
}

export default MobilePage2;
