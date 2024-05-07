import React from 'react';
import { Link } from 'react-router-dom';
import '../styling/NavigationBar.css'; // Import your CSS file for styling

function NavigationBar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="navbar-links">
          <li><Link to="/" className="nav-link">About Us</Link></li>
        </ul>
        <Link to="/restaurant" className="nav-link">Restaurant App</Link>
      </div>
    </nav>
  );
}

export default NavigationBar;
