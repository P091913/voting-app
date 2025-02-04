import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const App = () => {
  const [selectedValue, setSelectedValue] = useState('option1');

  const options = {
    option1: "Team 1",
    option2: "Team 1",
    option3: "Team 3",
    option4: "Team 3",
    option5: "Team 3",
    option6: "Team 3",
    option7: "Team 3"
  };

  return (
    <View>
    <Text style={styles.WelcomeText}>Thank you for voting!</Text>
      <Text>Pick Team and Vote</Text>
      <Picker
              selectedValue={selectedValue}
              onValueChange={(itemValue) => setSelectedValue(itemValue)}
            >
              <Picker.Item label="Team 1" value="option1" />
              <Picker.Item label="Team 1" value="option2" />
              <Picker.Item label="Team 3" value="option3" />
              <Picker.Item label="Team 3" value="option4" />
              <Picker.Item label="Team 3" value="option5" />
              <Picker.Item label="Team 3" value="option6" />
              <Picker.Item label="Team 3" value="option7" />
            </Picker>
      
            <Text>You selected: {options[selectedValue]}</Text>
    </View>        
  );
}

const styles = StyleSheet.create({
    WelcomeText: {
      fontSize: 15,
      fontWeight: 'bold', 
    },
  });

export default App;
