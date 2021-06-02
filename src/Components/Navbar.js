import React from 'react';
import { NavLink } from 'react-router-dom';


function Navbar() {
    return (
      <div className="Navbar">
          <NavLink to="/"
          exact
          >Home</NavLink>
          <NavLink to="/about-me"
          exact
          >ABOUT ME</NavLink>
          <NavLink to="/resume"
          exact
          >RESUME</NavLink>
          <NavLink to="/projects"
          exact
          >PROJECTS</NavLink>
          <NavLink to="/contact"
          exact
          >CONTACT</NavLink>

      </div>
    );
  }
  
  export default Navbar;