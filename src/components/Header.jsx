import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

export default function Header() {
  return (
    <header className="header">
       {/* Clickable Title to go to home */}
       <h1 className="title">
        <Link to="/" className="home-link">My Portfolio</Link>
      </h1>
      <nav className="menu">
        <Link to="/orders" className="menu-item">Orders</Link>
        <Link to="/history" className="menu-item">History</Link>
      </nav>
    </header>
  );
}
