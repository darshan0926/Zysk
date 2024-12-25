import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Footer Top */}
        <div className="footer-top">
          {/* Footer Links */}
          <div className="footer-links">
            <div className="footer-column">
              <h4>Product</h4>
              <p>Overview</p>
              <p>Features</p>
              <div className="footer-solutions">
                <p>Solutions</p>
                <button className="footer-new-btn">New</button>
              </div>
              <p>Tutorials</p>
              <p>Pricing</p>
              <p>Releases</p>
            </div>
            <div className="footer-column">
              <h4>Company</h4>
              <p>About us</p>
              <p>Careers</p>
              <p>Press</p>
              <p>News</p>
              <p>Media Kit</p>
              <p>Contact</p>
            </div>
            <div className="footer-column">
              <h4>Resources</h4>
              <p>Blog</p>
              <p>Newsletter</p>
              <p>Events</p>
              <p>Help center</p>
              <p>Tutorials</p>
              <p>Support</p>
            </div>
            <div className="footer-column">
              <h4>Use Cases</h4>
              <p>Startups</p>
              <p>Enterprise</p>
              <p>Government</p>
              <p>SaaS center</p>
              <p>Marketplaces</p>
              <p>Ecommerce</p>
            </div>
            <div className="footer-column">
              <h4>Social</h4>
              <p>Twitter</p>
              <p>Linkedin</p>
              <p>Facebook</p>
              <p>GitHub</p>
              <p>AngelList</p>
              <p>Dribbble</p>
            </div>
            <div className="footer-column">
              <h4>Legal</h4>
              <p>Terms</p>
              <p>Privacy</p>
              <p>Cookies</p>
              <p>Licenses</p>
              <p>Settings</p>
              <p>Contact</p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-logo-section">
            <img
              src={require('../assets/Logomark (2).png')}
              alt="Company Logo"
              className="footer-main-logo"
            />
            <div className="footer-logo">Untitled UI</div>
          </div>
          <p>&copy; 2024 Untitled UI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
