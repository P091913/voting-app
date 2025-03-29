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
import Settings from "./componets/Settings"; 
import MobilePage1 from "./componets/Mobile/Page1" 
import MobilePage2 from "./componets/Mobile/Page2" 
import MobilePage3 from "./componets/Mobile/Page3" 
import MobilePage4 from "./componets/Mobile/Page4" 
import MobilePage5 from "./componets/Mobile/Page5" 
import MobilePage6 from "./componets/Mobile/Page6"
import MobilePage7 from "./componets/Mobile/Page7"  

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
          <Route path="/admin/login" element={<Login />} ></Route>
          <Route path="/admin/bits" element={<Bits />} ></Route>
          <Route path="/admin/bytes" element={<Bytes />} ></Route>
          <Route path="/admin/pins" element={<Pins />} ></Route>
          <Route path="/admin/company" element={<Company />} ></Route>
          <Route path="/admin/schoolrep" element={<SchoolRep />} ></Route>
          <Route path="/admin/results" element={<Results />} ></Route>
          <Route path="/admin/allResults" element={<AllResults />} ></Route>
          <Route path="/admin/settings" element={<Settings />} ></Route>
          <Route path="/vote" element={<MobilePage1 />} ></Route>
          <Route path="/mobile2" element={<MobilePage2 />} ></Route>
          <Route path="/mobile3" element={<MobilePage3 />} ></Route>
          <Route path="/mobile4" element={<MobilePage4 />} ></Route>
          <Route path="/mobile5" element={<MobilePage5 />} ></Route>
          <Route path="/mobile6" element={<MobilePage6 />} ></Route>
          <Route path="/mobile7" element={<MobilePage7 />} ></Route>
          
          
          
          

        </Routes>

      </Router>
      
      {/* Page Content */}
      

      
    
    </div>
  );
}

export default App;
