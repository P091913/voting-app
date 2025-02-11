// React Mobile Page 6

import React from 'react';
import { StyleSheet } from 'react-native';

const App = () => {
    const handleNext = () => {
        console.log('button clicked');
    };

    // Arrow going back to signify you go back a page
    return (
    <div>
      <p style={styles.Text1}>Would you like to vote again?</p>
      <button onPress={handleNext}>
        <p style={styles.Button}>Go Back</p>
        <p style={styles.Button2}>Submit</p>
      </button>
    </div>
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

