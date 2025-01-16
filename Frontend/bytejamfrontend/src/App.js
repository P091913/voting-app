import React from "react";
import AdminForm from "./componets/AdminForm";
import Navigation from "./components/Navigation"; // Assuming Navigation.js is in the same folder as AdminForm

function App() {
  return (
    <div className="App">
      {/* Navigation Bar */}
      <Navigation />

      {/* Page Content */}
      <div className="p-4">
        <h1 className="text-2xl font-bold">Admin and General Form</h1>
        <AdminForm />
      </div>
    </div>
  );
}

export default App;
