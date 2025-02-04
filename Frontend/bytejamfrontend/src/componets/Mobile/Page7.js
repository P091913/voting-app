// React Mobile Page 7

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const App = () => {
    const handleNext = () => {
        console.log('button clicked');
    };

    return (
    <View>
      <Text style={styles.Text1}>Thank you for voting!</Text>
      <Text style={styles.Text2}>We will start the event soon!</Text>
      <Text style={styles.Text3}>Thank you to all the staff and employees for making this possible!</Text>
    <TouchableOpacity onPress={handleNext}>
        <Text style={styles.Button}>Submit</Text>
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  Text1: {
    fontSize: 20,
    fontWeight: 'bold', 
  },
  Text2: {
    fontSize: 15,
    fontWeight: 'bold', 
  },
  Text3: {
    fontSize: 15,
    fontWeight: 'bold', 
  },
  Button: {
    fontSize: 15,
    color: 'Red',
  },
});

export default App;

