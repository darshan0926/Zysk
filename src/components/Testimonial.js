import React from "react";
import "../styles/Testimonial.css";

function Testimonial() {
  return (
    <section className="testimonial-section">
      <div className="container">
        {/* Header: Logo beside "Sisyphus" */}
        <div className="testimonial-header">
          <img
            src={require('../assets/Logomark (10).png')}
            alt="Logo"
            className="testimonial-logo"
          />
          <h4 className="testimonial-company">Sisyphus</h4>
        </div>

        {/* Testimonial Text */}
        <h1 className="testimonial-text">
          "We've been using Untitled to kickstart every new project and can't imagine working without it."
        </h1>

        {/* Author Details (Avatar, Name, and Role) */}
        <div className="testimonial-author-details">
          <img
            src={require('../assets/Avatar (1).png')}
            alt="Avatar"
            className="testimonial-author-avatar"
          />
          <div className="testimonial-author-info">
            <h4 className="testimonial-author">Camila Wu</h4>
            <p className="testimonial-role">Product Manager, Sisyphus</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
