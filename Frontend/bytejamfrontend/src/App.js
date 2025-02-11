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
import Results from "./componets/Results";
import AllResults from "./componets/AllResults";
//import Settings from "./componets/Settings"; Has React-Native Stuff
//import WelcomeMobile from "./componets/Mobile/MobileWelcome" Has React-Native Stuff


function App() {
  return (
    <div className="App">
      {/* Navigation Bar and data for it useing React-Router-Dom */}
      <Router>
        <Navbar/>

        <Routes>
          {/*Route Definitions For Pages*/}
          {/* Page one is landing page */}

          <Route path="/admin/" element={<SignUp />} ></Route>
          <Route path="/admin/login" element={<Login />} ></Route>
          <Route path="/admin/bits" element={<Bits />} ></Route>
          <Route path="/admin/bytes" element={<Bytes />} ></Route>
          <Route path="/admin/pins" element={<Pins />} ></Route>
          <Route path="/admin/company" element={<Company />} ></Route>
          <Route path="/admin/schoolrep" element={<SchoolRep />} ></Route>
          <Route path="/admin/results" element={<Results />} ></Route>
          <Route path="/admin/allResults" element={<AllResults />} ></Route>
          
          
          

        </Routes>

      </Router>
      
      {/* Page Content */}
      

      
    
    </div>
  );
}

export default App;
