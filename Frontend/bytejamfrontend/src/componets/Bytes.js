import React from "react";
import '../index.css';


{/*Page: 4*/}


const BytesPage = () => {
  return (
    <div>
      

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

export default BytesPage;