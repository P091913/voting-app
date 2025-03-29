// React Mobile Page 7

import React from 'react';

const App = () => {
    const handleNext = () => {
        console.log('button clicked');
    };

    return (
    <div>
      <h1 style={styles.Text1}>Thank you for voting and your input!</h1>
      <p style={styles.Text2}>We will start the event soon!</p>
      <p style={styles.Text3}>Thank you to all the staff and employees for making this possible!</p>
    <button OnClick={handleNext} style={styles.Button}>Submit</button>
    </div>
  );
};

const styles = {
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
};

export default App;

