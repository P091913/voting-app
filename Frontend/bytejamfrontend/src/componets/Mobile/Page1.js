// React Mobile Page 1

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const App = () => {
    const handleNext = () => {
        console.log('button clicked');
    };

    return (
    <View>
      <Text style={styles.Text1}>Welcome To Byte Jam!</Text>
      <Text style={styles.Text2}>This is the voting app for Byte Jam for 2025!</Text>
      <TouchableOpacity onPress={handleNext}>
        <Text style={styles.Button}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  Text1: {
    fontSize: 10,
    fontWeight: 'bold', 
  },
  Text2: {
    fontSize: 10,
    fontWeight: 'bold', 
  },
  Button: {
    fontSize: 10,
    color: 'Red',
  },
});

export default App;

