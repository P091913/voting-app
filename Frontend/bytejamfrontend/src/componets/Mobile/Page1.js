// React Mobile Page 1

import React from 'react';

const App = () => {
    const handleNext = () => {
        console.log('button clicked');
    };

    return (
        <div>
            <h1 style={styles.Text1}>Welcome To Byte Jam!</h1>
            <p style={styles.Text2}>This is the voting app for Byte Jam for 2025!</p>
            <button onClick={handleNext} style={styles.Button}>Next</button>
        </div>
    );
};

const styles = {
  Text1: {
    fontSize: '15px',
    fontWeight: 'bold',
  },
  Text2: {
    fontSize: '15px',
    fontWeight: 'bold',
  },
  Button: {
    fontSize: '15px',
    color: 'red',
    backgroundColor: 'white',
    border: 'none',
    cursor: 'pointer',
  },
};

export default App;
