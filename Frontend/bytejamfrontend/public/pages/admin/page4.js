import React from "react";
import { Link } from "react-router-dom";
import '../index.css';
function Page4() {
return (
<div>
 
<h1 className="text-lg bg-red-900 overflow-hidden tracking-widest">Admin Page</h1>
 
  {/* Navbar */}
  <div className="bg-red-900 overflow-hidden tracking-widest flex space-x-4">
    <a href="page1.html">Sign Up</a>
    <Link to="/login">Login</Link>
    <a href="page3.html">Bits</a>
    <a href="page4.html">Bytes</a>
    <a href="page5.html">Pins</a>
    <a href="page6.html">Companies</a>
    <a href="page7.html">School Rep</a>
    <a href="page8.html">Results</a>
    <a href="page9.html">Settings</a>
  </div>
 
  {/* Page Content */}
  <div className="form-container">
    <h2>Team Management (Bytes)</h2>
    <form action="/add-team" method="POST">
      <label htmlFor="team-name">Team Name:</label>
      <input type="text" id="team-name" name="team-name" required />
      <label htmlFor="school-name">School Name:</label>
      <input type="text" id="school-name" name="school-name"
        required />
      <button type="submit">Add Team</button>
    </form>
 
    <div className="team-list">
      <h3>Current Teams</h3>
      <div className="team-item">
        <span>Team A - School A</span>
        <div>
          <button onClick={()=> alert('Edit functionalitypending')}>Edit</button>
          <button className="delete-button" onClick={()=>
            alert('Delete functionality pending')}>Delete</button>
        </div>
      </div>
 
      <div className="team-item">
        <span>Team B - School B</span>
        <div>
          <button onClick={()=> alert('Edit functionalitypending')}>Edit</button>
          <button className="delete-button" onClick={()=>
            alert('Delete functionality pending')}>Delete</button>
        </div>
      </div>
    </div>
  </div>
</div>
);
}
export default Page4;