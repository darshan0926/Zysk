import React from 'react';
import '../styles/HeroSection.css';
import { FaPlayCircle } from 'react-icons/fa'; // Video icon

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        {/* New Feature Badge */}
        <div className="hero__badge-container">
          <div className="hero__highlight-box">
            <div className="hero__badge">
              ✨ <span>New Feature</span>
            </div>
            <a href="#team-dashboard" className="hero__highlight-link">
              Check out the Team Dashboard →
            </a>
          </div>
        </div>

        {/* Main Content */}
        <h1>Beautiful analytics to grow smarter</h1>
        <p>
          Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
        </p>
        
        {/* Buttons */}
        <div className="hero__buttons">
          <button className="hero__btn signup">
            <FaPlayCircle className="hero__btn-icon" /> Demo
          </button>
          <button className="hero__btn demo">Sign Up</button>
        </div>
      </div>

      {/* Images */}
      <div className="hero__image">
        <img 
          src={require('../assets/Container (2).png')} 
          alt="Analytics Dashboard" 
          className="primary-image" 
        />
        <img 
          src={require('../assets/Container-mobile.png')} 
          alt="Mobile Analytics Dashboard" 
          className="secondary-image" 
        />
      </div>
    </section>
  );
};

export default HeroSection;
