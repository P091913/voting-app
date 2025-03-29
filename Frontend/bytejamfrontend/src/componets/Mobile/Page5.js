import React, { useState } from 'react';

const App = () => {
  const [answers, setAnswers] = useState({
    appealing: '',
    amazement: '',
    theme: '',
    performance: ''
  });

  const [selectedTeam, setSelectedTeam] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [name]: value
    }));
  };

  return (
    <div style={styles.container}>
      <p style={styles.Text1}>Select a Team</p>
      <select
        value={selectedTeam}
        onChange={(event) => setSelectedTeam(event.target.value)}
        style={styles.picker}
      >
        <option value="">Select a team</option>
        <option value="Team 1">Team 1</option>
        <option value="Team 2">Team 2</option>
        <option value="Team 3">Team 3</option>
        <option value="Team 4">Team 4</option>
      </select>

      <p style={styles.Text1}>Please rate the following aspects (1-5):</p>

      {/* Appealing */}
      <p style={styles.questionText}>1. How appealing is the project?</p>
      <input
        type="number"
        name="appealing"
        value={answers.appealing}
        onChange={handleInputChange}
        style={styles.input}
        placeholder="Rate 1 to 5"
        min="1"
        max="5"
      />

      {/* Amazement */}
      <p style={styles.questionText}>2. How amazing is the project?</p>
      <input
        type="number"
        name="amazement"
        value={answers.amazement}
        onChange={handleInputChange}
        style={styles.input}
        placeholder="Rate 1 to 5"
        min="1"
        max="5"
      />

      {/* Theme */}
      <p style={styles.questionText}>3. How well does the project align with the theme?</p>
      <input
        type="number"
        name="theme"
        value={answers.theme}
        onChange={handleInputChange}
        style={styles.input}
        placeholder="Rate 1 to 5"
        min="1"
        max="5"
      />

      {/* Performance */}
      <p style={styles.questionText}>4. How would you rate the performance of the project?</p>
      <input
        type="number"
        name="performance"
        value={answers.performance}
        onChange={handleInputChange}
        style={styles.input}
        placeholder="Rate 1 to 5"
        min="1"
        max="5"
      />
    </div>
  );
};

const styles = {
  container: {
    padding: '10px',
  },
  Text1: {
    fontSize: '14px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  questionText: {
    fontSize: '12px',
    margin: '10px 0',
  },
  input: {
    height: '30px',
    borderColor: 'gray',
    borderWidth: '1px',
    borderRadius: '5px',
    marginBottom: '15px',
    paddingLeft: '10px',
    width: '100%',
  },
  picker: {
    height: '35px',
    width: '100%',
    marginBottom: '20px',
  },
};

export default App;
