import React from "react";
import "../styles/Header.css"; // Updated CSS for the header

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">Untitled UI</div>
        <nav className="nav">
          <a href="#" className="nav-link">Product</a>
          <a href="#" className="nav-link">Features</a>
          <a href="#" className="nav-link">Marketplace</a>
          <a href="#" className="nav-link">Company</a>
        </nav>
        <div className="actions">
          <button className="login-btn">Log in</button>
          <button className="signup-btn">Sign up</button>
        </div>
      </div>
    </header>
  );
}

export default Header;