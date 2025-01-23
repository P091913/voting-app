import React from "react";


{/*Page: 6*/}
{/*Jerica Still Needs To Finish Her Page*/}

const CompanyPage = () => {
    
    return (
        <div>

<div>
      

      {/* Page Content */}
      <div className="form-container">
        <h2>Current Company</h2>
        <form action="/add-team" method="POST">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="numberneeded">Number Needed: </label>
          <input type="text" id="name" name="name"
            required />
          <button type="submit">Add Company</button>
        </form>
    
        <div className="companyitem">
          <h3>Current Company</h3>
          <div className="companyitem">
            <span>Name</span>
            <div>
              <button onClick={()=> alert('Edit functionalitypending')}>Edit</button>
              <button className="delete-button" onClick={()=>
                alert('Delete functionality pending')}>Delete</button>
            </div>
          </div>
    
          <div className="companyitem">
            <span>Pin</span>
            <div>
              <button onClick={()=> alert('Edit functionalitypending')}>Edit</button>
              <button className="delete-button" onClick={()=>
                alert('Delete functionality pending')}>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div> 
            {/*Look At HTML below*/}
            {/*TO_DO Link To Figma Design: https://www.figma.com/design/1KBtOMoOeuQ8uqH429KYcI/Untitled?node-id=0-1&p=f&t=EXLxoC9YmXLyaX1W-0*/}
      
            {/*Div With Text That Says Current Companies, Name:, and Pin: To Display All Pins*/}
            {/*Under Div Buttons For Drop All, Export, and Print*/}
            
            {/*Text That Says Add Company and # of People */}
            {/*Text Input Fields For Compant Name and Number of People*/}


        </div>
        );
    };

export default CompanyPage;
