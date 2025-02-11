import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export default function VotingDateControl() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [trackingDisabled, setTrackingDisabled] = useState(false);

  const handleSave = async () => {
    try {
      // Handle save
      console.log("Settings saved", { startDate, endDate, trackingDisabled });
    } catch (error) {
      console.error("Error saving settings", error);
    }
  };

  return (
    <div className="p-5 bg-gray-100 min-h-screen">
    
      <h1 className="text-xl font-bold mb-5 text-center">Voting Date Control</h1>
      
      <label className="text-lg mb-2 block">Start Date</label>
      <DatePicker
        className="w-full p-2 border rounded mb-4"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="yyyy-MM-dd"
        placeholderText="Select start date"
        disabled={trackingDisabled}
      />

      <label className="text-lg mb-2 block">End Date</label>
      <DatePicker
        className="w-full p-2 border rounded mb-4"
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        dateFormat="yyyy-MM-dd"
        placeholderText="Select end date"
        disabled={trackingDisabled}
      />

      <div className="flex items-center justify-between mb-5">
        <label>{trackingDisabled ? "Tracking Disabled" : "Tracking Enabled"}</label>
        <input
          type="checkbox"
          checked={trackingDisabled}
          onChange={() => setTrackingDisabled(!trackingDisabled)}
        />
      </div>

      <button 
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleSave}
      >
        Save Settings
      </button>
    </div>
  );
}
