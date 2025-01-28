// React Mobile Page 1

import React from 'react';
import { View, Text, StyleSheet, onPress } from 'react-native';

const App = () => {
    const handleNext = () => {
        console.log('button clicked');
    };

    return (
    <View>
      <Text>Welcome To Byte Jam!</Text>
      <Text>This is the voting app for Byte Jam for 2025!</Text>
      <Text onPress={handleNext}>
        Next
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  
});

export default App;

