import { useState } from "react";

function DropdownComponent() {
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <div>
      <label htmlFor="educationLevel">Select an option:</label>
      <select
        id="educationLevel"
        name="educationLevel"
        value={selectedValue}
        onChange={(e) => setSelectedValue(e.target.value)}
      >
        <option value="">Select an option</option>
        <option value="option1">High School</option>
        <option value="option2">College (Any College or Indian Hills Community College)</option>
        <option value="option3">Company</option>
        <option value="option4">School Representative</option>
        <option value="option5">Other (Visitor)</option>
      </select>
      <p>Selected: {selectedValue}</p>
    </div>
  );
}

export default DropdownComponent;
