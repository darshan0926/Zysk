import React from "react";
import "../styles/Features.css";

function Features() {
  return (
    <section className="features-section">
      <div className="container">
        {/* Subtitle and Main Title */}
        <p className="features-subtitle">Features</p>
        <h2 className="features-title">Analytics that feels like it’s from the future</h2>
        <p className="features-description">
          Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users.
          Trusted by over 4,000 startups.
        </p>
        
        {/* Features Grid */}
        <div className="features-grid">
          <div className="feature-item">
            {/* Icons for "Share team inboxes" */}
            <div className="feature-logos">
              <img src={require("../assets/Share.png")} alt="Inbox Logo" />
            </div>
            <h3>Share team inboxes</h3>
            <p>Easily collaborate across team inboxes with features designed to enhance productivity and communication.</p>
          </div>
          <div className="feature-item">
            {/* Icons for "Deliver instant answers" */}
            <div className="feature-logos">
              <img src={require("../assets/Deliver.png")} alt="Instant Answer Logo" />
            </div>
            <h3>Deliver instant answers</h3>
            <p>Provide seamless solutions to customer queries with AI-powered tools for instant responses.</p>
          </div>
          <div className="feature-item">
            {/* Icons for "Manage your team with reports" */}
            <div className="feature-logos">
              <img src={require("../assets/Manage.png")} alt="Reports Logo" />
            </div>
            <h3>Manage your team with reports</h3>
            <p>Track your team’s performance and improve workflows with detailed analytics and reports.</p>
          </div>
          
          {/* New Features Added */}
          <div className="feature-item">
            {/* Icons for "Connect with customers" */}
            <div className="feature-logos">
              <img src={require("../assets/Connect.png")} alt="Connect Logo" />
            </div>
            <h3>Connect with customers</h3>
            <p>Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.</p>
          </div>
          <div className="feature-item">
            {/* Icons for "Connect the tools you already use" */}
            <div className="feature-logos">
              <img src={require("../assets/Connect-tool.png")} alt="Tools Logo" />
            </div>
            <h3>Connect the tools you already use</h3>
            <p>Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.</p>
          </div>
          <div className="feature-item">
            {/* Icons for "Our people make the difference" */}
            <div className="feature-logos">
              <img src={require("../assets/our-people.png")} alt="People Logo" />
            </div>
            <h3>Our people make the difference</h3>
            <p>We're an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
