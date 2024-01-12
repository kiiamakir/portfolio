import { NavLink } from 'react-router-dom';
import '../styles/NavigationBar.css';
import React from 'react';


const NavigationBar = () => {

  return (
      <nav className='nav-bar'>
      <NavLink id='name-link' to='/'> 
            K<span className='hidden-on-mobile'>IIA </span>M<span className='hidden-on-mobile'>ÄKIRINTA</span>
      </NavLink>
        <div className='navlink-container'>
          <NavLink to='/'>
            Work
          </NavLink>
          <NavLink to='/about'> 
            About
          </NavLink>
          <NavLink to='/contact'> 
            Contact
          </NavLink>
        </div>
      </nav>
  );
};
  
export default NavigationBar;