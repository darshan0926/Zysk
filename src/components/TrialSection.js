// Testimonial Component: components/Testimonial.js
import React from "react";
import "../styles/TrialSection.css";

function TrialSection() {
  return (
    <section className="trial-section">
      <div className="container">
        <h2 className="trial-heading"> Start your free trial</h2>
        <p className="trial-text">
          join over 4,000+ startups already growing with Untitled.
        </p>

         <div className="hero__buttons">
            <button className="hero__btn learn">
                 Learn more 
             </button>
            <button className="hero__btn get-start">Get started </button>
        </div>
       
      </div>
    </section>
  );
}

export default TrialSection;