import React, { useState } from 'react';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <h2>Team Voting</h2>
      <h1>Company & School Representative</h1>
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleChange} 
        placeholder="Enter your pin" 
      />
    </div>
  );
}

export default App;
