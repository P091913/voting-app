// React Mobile Page 6

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const App = () => {
    const handleNext = () => {
        console.log('button clicked');
    };

    // Arrow going back to signify you go back a page
    return (
    <View>
      <Text style={styles.Text1}>Would you like to vote again?</Text>
      <TouchableOpacity onPress={handleNext}>
        <Text style={styles.Button}>Go Back</Text>
        <Text style={styles.Button2}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  Text1: {
    fontSize: 15,
    fontWeight: 'bold', 
  },
  Button: {
    fontSize: 15,
    color: 'Red',
  },
  Button2: {
    fontSize: 15,
    color: 'Red',
  },
});

export default App;

