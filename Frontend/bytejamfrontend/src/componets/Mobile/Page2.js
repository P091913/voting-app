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
    <View>
      <Text style={styles.WelcomeText}>Welcome to the Byte Jam voting app</Text>
      <Text>Select an which team you are on:</Text>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="High School" value="option1" />
        <Picker.Item label="College (Any College or Indian Hills Community College)" value="option2" />
        <Picker.Item label="Company" value="option3" />
        <Picker.Item label="School Representative" value="option4" />
        <Picker.Item label="Other (Visitor)" value="option5" />
      </Picker>

      <Text>You selected: {options[selectedValue]}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  WelcomeText: {
    fontSize: 15,
    fontWeight: 'bold', 
  },
});

export default App;

