import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Picker } from 'react-native';

const App = () => {
  const [answers, setAnswers] = useState({
    appealing: '',
    amazement: '',
    theme: '',
    performance: ''
  });

  const [selectedTeam, setSelectedTeam] = useState('');

  const handleInputChange = (value, question) => {
    setAnswers({
      ...answers,
      [question]: value
    });
  };

  return (
    <View>
      <Text style={styles.Text1}>Select a Team</Text>
      <Picker
        selectedValue={selectedTeam}
        onValueChange={(itemValue) => setSelectedTeam(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="1" value="" />
        <Picker.Item label="2" value="" />
        <Picker.Item label="3" value="" />
        <Picker.Item label="4" value="" />
      </Picker>

      <Text style={styles.Text1}>Please rate the following aspects (1-5):</Text>

      {/* Question 1 - Appealing */}
      <Text style={styles.questionText}>1. How appealing is the project?</Text>
      <TextInput
        style={styles.input}
        value={answers.appealing}
        onChangeText={(value) => handleInputChange(value, 'appealing')}
        keyboardType="numeric"
        placeholder="Rate 1 to 5"
      />

      {/* Question 2 - Amazement */}
      <Text style={styles.questionText}>2. How amazing is the project?</Text>
      <TextInput
        style={styles.input}
        value={answers.amazement}
        onChangeText={(value) => handleInputChange(value, 'amazement')}
        keyboardType="numeric"
        placeholder="Rate 1 to 5"
      />

      {/* Question 3 - Theme */}
      <Text style={styles.questionText}>3. How well does the project align with the theme?</Text>
      <TextInput
        style={styles.input}
        value={answers.theme}
        onChangeText={(value) => handleInputChange(value, 'theme')}
        keyboardType="numeric"
        placeholder="Rate 1 to 5"
      />

      {/* Question 4 - Performance */}
      <Text style={styles.questionText}>4. How would you rate the performance of the project?</Text>
      <TextInput
        style={styles.input}
        value={answers.performance}
        onChangeText={(value) => handleInputChange(value, 'performance')}
        keyboardType="numeric"
        placeholder="Rate 1 to 5"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  Text1: {
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  questionText: {
    fontSize: 10,
    marginVertical: 10,
  },
  input: {
    height: 30,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingLeft: 10,
  },
  picker: {
    height: 30,
    width: '100%',
    marginBottom: 20,
  },
});

export default App;
