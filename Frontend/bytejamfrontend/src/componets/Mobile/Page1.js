// React Mobile Page 1

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const App = () => {
    const handleNext = () => {
        console.log('button clicked');
    };

    return (
    <View>
      <Text>Welcome To Byte Jam!</Text>
      <Text>This is the voting app for Byte Jam for 2025!</Text>
      <TouchableOpacity onPress={handleNext}>
        <Text style={styles.Button}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  Button: {
    fontSize: 10,
    color: 'Red',
},
});

export default App;

