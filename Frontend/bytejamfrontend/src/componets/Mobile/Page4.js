import React, { useState } from 'react';

const App = () => {
  const [selectedValue, setSelectedValue] = useState('option1');

  const options = {
    option1: "High School",
    option2: "Colleges",
    option3: "Company",
    option4: "School Representative",
    option5: "Other (Visitor)",
  };

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
    console.log("Selected value:", event.target.value);
  };

  return (
    <div>
      <p style={styles.WelcomeText}>Welcome to the Byte Jam voting app</p>
      
      <p>Select which team you are on:</p>
      
      <label htmlFor="educationLevel">Select an option:</label>
      
      <select id="educationLevel" name="educationLevel" onChange={handleSelectChange}>
        <option value="option1">High School</option>
        <option value="option2">College (Any College or Indian Hills Community College)</option>
        <option value="option3">Company</option>
        <option value="option4">School Representative</option>
        <option value="option5">Other (Visitor)</option>
      </select>

      <p>You selected: {options[selectedValue]}</p>
    </div>
  );
};

const styles = {
  WelcomeText: {
    fontSize: '15px',
    fontWeight: 'bold',
  },
};

export default App;
