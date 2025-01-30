import React, { useState } from "react";
import { View, Text, TextInput, Switch, Button, Alert, StyleSheet } from "react-native";
import DatePicker from "react-native-datepicker";


export default function VotingDateControl() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [trackingDisabled, setTrackingDisabled] = useState(false);

  const handleSave = async () => {
    try {
    
    } catch (error) {
     
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Voting Date Control</Text>
      
      <Text style={styles.label}>Start Date</Text>
      <DatePicker
        style={styles.datePicker}
        date={startDate}
        mode="date"
        placeholder="Select start date"
        format="YYYY-MM-DD"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        onDateChange={setStartDate}
        disabled={trackingDisabled}
      />

      <Text style={styles.label}>End Date</Text>
      <DatePicker
        style={styles.datePicker}
        date={endDate}
        mode="date"
        placeholder="Select end date"
        format="YYYY-MM-DD"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        onDateChange={setEndDate}
        disabled={trackingDisabled}
      />

      <View style={styles.switchContainer}>
        <Text>{trackingDisabled ? "Tracking Disabled" : "Tracking Enabled"}</Text>
        <Switch
          value={trackingDisabled}
          onValueChange={setTrackingDisabled}
        />
      </View>

      <Button title="Save Settings" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8f9fa",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  datePicker: {
    width: "100%",
    marginBottom: 15,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
});
