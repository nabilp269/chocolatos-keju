import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="site-name">Sinau Vite</div>
      <nav className="nav-menu">
        <a href="#home">Home</a>
        <a href="#materi">Materi</a>
        <a href="#kontak">Kontak</a>
      </nav>
        <div className="user-info">
        <span className="user-name">chocolatos keju</span>
        <button className="logout-button">Logout</button>
      </div>
    </header>
  );
}

export default Header;
