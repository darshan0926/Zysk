import React, { useState } from 'react';
import {
  Menu,
  Home,
  Person,
  Settings,
  ExitToApp,
  Api,
  KeyboardAlt,
  CorporateFare,
  GroupAdd,
  Article,
  IntegrationInstructions,
  Forum,
} from '@mui/icons-material';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [isResourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const [isAvatarDropdownOpen, setAvatarDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleProductsDropdown = () => {
    setProductsDropdownOpen(!isProductsDropdownOpen);
  };

  const toggleResourcesDropdown = () => {
    setResourcesDropdownOpen(!isResourcesDropdownOpen);
  };

  const toggleAvatarDropdown = () => {
    setAvatarDropdownOpen(!isAvatarDropdownOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="navbar__logo-section">
        <img
          src={require('../assets/Logomark (2).png')}
          alt="Small Logo"
          className="navbar__small-logo"
        />
        <div className="navbar__logo">Untitled UI</div>
      </div>

      {/* Navbar Links */}
      <ul className={`navbar__links ${isMobileMenuOpen ? 'active' : ''}`}>
        <li>
          <a href="#home">
            <Home /> Home
          </a>
        </li>
        <li>
          <button onClick={toggleProductsDropdown} className="dropdown__btn">
            Products <span>{isProductsDropdownOpen ? '▲' : '▼'}</span>
          </button>
          {isProductsDropdownOpen && (
  <div className="dropdown__container">
    {/* Left Section */}
    <ul className="dropdown__menu">
      <li>
        <a href="#blog">
          <Article />
          <div>
            <h3>Blog</h3>
            <p>The latest industry news, updates, and info.</p>
          </div>
        </a>
      </li>
      <li>
        <a href="#customer-stories">
          <GroupAdd />
          <div>
            <h3>Customer Stories</h3>
            <p>Learn how our customers are making big changes.</p>
          </div>
        </a>
      </li>
      <li>
        <a href="#video-tutorials">
          <IntegrationInstructions />
          <div>
            <h3>Video Tutorials</h3>
            <p>Get up and running on new features and techniques.</p>
          </div>
        </a>
      </li>
    </ul>

    {/* Right Section */}
    <div className="dropdown__announcement">
      {/* Image Section */}
      <div className="announcement__image">
        <img src={require('../assets/Avatar (1).png')}  alt="Announcement img" />
      </div>

      {/* Update Announcement */}
      <h4>We've just released an update!</h4>
      <p>Check out the all-new dashboard view. Pages now load faster.</p>
      <div className="announcement__links">
        <a href="#dismiss">Dismiss</a>  <a href="#changelog">Changelog</a>
      </div>
    </div>
  </div>
)}

        </li>
        <li>
          <button onClick={toggleResourcesDropdown} className="dropdown__btn">
            Resources <span>{isResourcesDropdownOpen ? '▲' : '▼'}</span>
          </button>
          {isResourcesDropdownOpen && (
  <div className="dropdown__container">
    {/* Left Section */}
    <ul className="dropdown__menu">
      <li>
        <a href="#blog">
          <Article />
          <div>
            <h3>Blog</h3>
            <p>The latest industry news, updates, and info.</p>
          </div>
        </a>
      </li>
      <li>
        <a href="#customer-stories">
          <GroupAdd />
          <div>
            <h3>Customer Stories</h3>
            <p>Learn how our customers are making big changes.</p>
          </div>
        </a>
      </li>
      <li>
        <a href="#video-tutorials">
          <IntegrationInstructions />
          <div>
            <h3>Video Tutorials</h3>
            <p>Get up and running on new features and techniques.</p>
          </div>
        </a>
      </li>
    </ul>

    {/* Right Section */}
    <div className="dropdown__announcement">
      {/* Image Section */}
      <div className="announcement__image">
        <img src={require('../assets/Avatar (1).png')}  alt="Announcement img" />
      </div>

      {/* Update Announcement */}
      <h4>We've just released an update!</h4>
      <p>Check out the all-new dashboard view. Pages now load faster.</p>
      <div className="announcement__links"> 
        <a href="#dismiss">Dismiss</a>  <a href="#changelog">Changelog</a>
      </div>
    </div>
  </div>
)}
        </li>
        <li>
          <a href="#pricing">Pricing</a>
        </li>
      </ul>

      {/* Profile Section */}
      <div className="navbar__profile">
        <img
          src={require('../assets/Navigation actions.png')}
          alt="Avatar"
          className="navbar__avatar-image"
          onClick={toggleAvatarDropdown}
        />
        {isAvatarDropdownOpen && (
          <div className="avatar__dropdown">
            <div className="avatar__header">
              <img
                src={require('../assets/Navigation actions.png')}
                alt="Avatar"
                className="avatar__header-image"
              />
              <div>
                <h4>Olivia Rhye</h4>
                <p>olivia@untitledui.com</p>
              </div>
            </div>
            <ul>
              <li>
                <a href="#profile">
                  <Person /> View Profile
                </a>
              </li>
              <li>
                <a href="#settings">
                  <Settings /> Settings
                </a>
              </li>
              <li>
                <a href="#keyboard-shortcuts">
                  <KeyboardAlt /> Keyboard Shortcuts
                </a>
              </li>
              <li>
                <a href="#company-profile">
                  <CorporateFare /> Company Profile
                </a>
              </li>
              <li>
                <a href="#team">
                  <GroupAdd /> Team
                </a>
              </li>
              <li>
                <a href="#invite">
                  <GroupAdd /> Invite Colleagues
                </a>
              </li>
              <li>
                <a href="#changelog">
                  <Article /> Changelog
                </a>
              </li>
              <li>
                <a href="#community">
                  <Forum /> Slack Community
                </a>
              </li>
              <li>
                <a href="#api">
                  <Api /> API
                </a>
              </li>
              <li>
                <a href="#logout">
                  <ExitToApp /> Log Out
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Mobile Menu Icon */}
      <div className="navbar__menu-icon" onClick={toggleMobileMenu}>
        <Menu />
      </div>
    </nav>
  );
};

export default Navbar;
