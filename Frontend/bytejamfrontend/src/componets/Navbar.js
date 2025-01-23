import React from 'react';
import './Navbar.css'

const Navbar = () => {
  return (

    <nav className="navbar">

      <div className='navbar-center'>

        <ul className='nav-links'>
          
          <li>
            <p1 className="admin-page-text">Admin Page</p1>
          </li>

          <li>
            <a href="/">Sign Up</a>
          </li>

          <li>
            <a href="/login">Login</a>
          </li>

          <li>
            <a href="/bits">Bits</a>
          </li>

          <li>
            <a href="/bytes">Bytes</a>
          </li>

          <li>
            <a href="/companies">Companies</a>
          </li>

          <li>
            <a href="/schoolrep">School Rep</a>
          </li>

          <li>
            <a href="/pins">Pins</a>
          </li>

          <li>
            <a href="/results">Results</a>
          </li>

          <li>
            <a href="/results">All Results</a>
          </li>

          <li>
            <a href="/settings">Settings</a>
          </li>
        </ul>

      </div>

    </nav>
);
};

export default Navbar;
