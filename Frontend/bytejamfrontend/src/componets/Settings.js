import React, { useState } from "react";
import { View, Text, TextInput, Switch, Button, Alert } from "react-native";
import DatePicker from "react-native-datepicker";

export default function VotingDateControl() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [trackingDisabled, setTrackingDisabled] = useState(false);

  const handleSave = async () => {
    try {
      // Handle save 
    } catch (error) {
      // Handle error
    }
  };

  return (
    <View className="flex-1 p-5 bg-gray-100">
      <Text className="text-xl font-bold mb-5 text-center">Voting Date Control</Text>
      
      <Text className="text-lg mb-2">Start Date</Text>
      <DatePicker
        className="w-full mb-4"
        date={startDate}
        mode="date"
        placeholder="Select start date"
        format="YYYY-MM-DD"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        onDateChange={setStartDate}
        disabled={trackingDisabled}
      />

      <Text className="text-lg mb-2">End Date</Text>
      <DatePicker
        className="w-full mb-4"
        date={endDate}
        mode="date"
        placeholder="Select end date"
        format="YYYY-MM-DD"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        onDateChange={setEndDate}
        disabled={trackingDisabled}
      />

      <View className="flex-row items-center justify-between mb-5">
        <Text>{trackingDisabled ? "Tracking Disabled" : "Tracking Enabled"}</Text>
        <Switch value={trackingDisabled} onValueChange={setTrackingDisabled} />
      </View>

      <Button title="Save Settings" onPress={handleSave} />
    </View>
  );
}
