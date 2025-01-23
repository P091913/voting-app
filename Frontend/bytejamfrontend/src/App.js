import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./componets/Navbar"

// Imports for Navbar
import SignUp from "./componets/SignUp";
import Login from "./componets/Login";
import Bits from "./componets/Bits";
import Bytes from "./componets/Bytes";
import Pins from "./componets/Pins";
import Company from "./componets/Company";
import SchoolRep from "./componets/SchoolRep";


function App() {
  return (
    <div className="App">
      {/* Navigation Bar and data for it useing React-Router-Dom */}
      <Router>
        <Navbar/>

        <Routes>
          {/*Route Definitions For Pages*/}
          {/* Page one is landing page */}

          <Route path="/" element={<SignUp />} ></Route>
          <Route path="/login" element={<Login />} ></Route>
          <Route path="/bits" element={<Bits />} ></Route>
          <Route path="/bytes" element={<Bytes />} ></Route>
          <Route path="/pins" element={<Pins />} ></Route>
          <Route path="/company" element={<Company />} ></Route>
          <Route path="/schoolrep" element={<SchoolRep />} ></Route>

        </Routes>

      </Router>
      
      {/* Page Content */}
      

      
    
    </div>
  );
}

export default App;
