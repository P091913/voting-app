// React Mobile Page 2

import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const App = () => {
  const [selectedValue, setSelectedValue] = useState('option1');

  const options = {
    option1: "High School",
    option2: "Colleges",
    option3: "Company",
    option4: "School Representative",
    option5: "Other (Visitor)",
  };

  return (
    <div>
      <p style={styles.WelcomeText}>Welcome to the Byte Jam voting app</p>
      <p>Select an which team you are on:</p>
      <label for="educationLevel">Select an option:</label>
<select id="educationLevel" name="educationLevel" onchange="handleSelectChange(event)">
  <option value="option1">High School</option>
  <option value="option2">College (Any College or Indian Hills Community College)</option>
  <option value="option3">Company</option>
  <option value="option4">School Representative</option>
  <option value="option5">Other (Visitor)</option>
</select>

<script>
  function handleSelectChange(event) {
    console.log("Selected value:", event.target.value);
    
  }
</script>


      <p>You selected: {options[selectedValue]}</p>
    </div>
  );
};

const styles = StyleSheet.create({
  WelcomeText: {
    fontSize: 15,
    fontWeight: 'bold', 
  },
});

export default App;

