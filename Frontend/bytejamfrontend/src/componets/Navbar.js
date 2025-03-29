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
            <a href="/admin/login">Login</a>
          </li>

          <li>
            <a href="/admin/bits">Bits</a>
          </li>

          <li>
            <a href="/admin/bytes">Bytes</a>
          </li>

          <li>
            <a href="/admin/company">Companies</a>
          </li>

          <li>
            <a href="/admin/schoolrep">School Rep</a>
          </li>

          <li>
            <a href="/admin/pins">Pins</a>
          </li>

          <li>
            <a href="/admin/results">Results</a>
          </li>

          <li>
            <a href="/admin/allResults">All Results</a>
          </li>

          <li>
            <a href="/admin/settings">Settings</a>
          </li>

        

          
        </ul>

      </div>

    </nav>
);
};

export default Navbar;
