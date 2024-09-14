import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Add this for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <span>Researches</span>
          <ul className="dropdown">
            <li><Link to="/researches">Add researches</Link></li>
            <li><Link to="/">Ongoing projects</Link></li>
            <li><Link to="/">Research projects</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <span>IPR</span>
          <ul className="dropdown">
            <li><Link to="/ipr">Manage patents</Link></li>
            <li><Link to="/ipr">IPR Status</Link></li>
            <li><Link to="/ipr">Patent Track</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <span>Innovation</span>
          <ul className="dropdown">
            <li><Link to="/innovation">Innovation projects</Link></li>
            <li><Link to="/innovation">New innovation</Link></li>
            <li><Link to="/innovation">Innovation support</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <span>Startups</span>
          <ul className="dropdown">
            <li><Link to="/startups">Add Startup</Link></li>
            <li><Link to="/">Working Startup</Link></li>
            <li><Link to="/">Startup Resources</Link></li>
            <li><Link to="">Collaboration</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link to="/funds">Funds</Link>
        </li>
        <li className="nav-item">
          <span>Support</span>
          <ul className="dropdown">
            <li><Link to="/support">Mentor Program</Link></li>
            <li><Link to="/support">Support resources</Link></li>
            <li><Link to="/support">Funding opportunities</Link></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
