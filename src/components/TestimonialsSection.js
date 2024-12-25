import React from 'react';
import '../styles/TestimonialsSection.css';

const TestimonialsSection = () => {
  return (
    <section className="testimonials">
      <div className="testimonial__card">
        {/* Avatar on Top */}
        <div className="testimonial__avatar">
          <img src={require('../assets/Avatar group.png')} alt="Customer Avatar" />
        </div>
        
        {/* Main Text */}
        <h2 className="testimonial__heading">Still have questions?</h2>
        <p className="testimonial__text">
          Can't find the answer you're looking for? Please chat with our friendly team.
        </p>
        
        {/* Get in Touch Button */}
        <button className="testimonial__btn">Get in Touch</button>
      </div>
    </section>
  );
};

export default TestimonialsSection;
