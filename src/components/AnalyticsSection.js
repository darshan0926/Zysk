import React from "react";
import "../styles/AnalyticsSection.css";

function AnalyticsSection() {
  return (
    <section className="analytics-section">
      <div className="container">
        {/* Feature Button */}
        <div className="analytics__feature-btn">
          Feature
        </div>

        {/* Section Title and Description */}
        <h2>Cutting-edge features for advanced analytics</h2>
        <p>
          Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users.
        </p>

        {/* Analytics Images */}
        <div className="analytics__content">
          <img
            src={require('../assets/3_2 screen mockup (3).png')}
            alt="Analytics Dashboard"
            className="first-image"
          />
          <img
            src={require('../assets/iPhone 12 Pro mockup (2).png')}
            alt="Analytics Dashboard"
            className="second-image"
          />
          <img
            src={require('../assets/iPhone 12 Pro mockup (1).png')}
            alt="Third Mockup"
            className="third-image"
          />
        </div>

        {/* Features Section */}
        <div className="analytics__features">
          {/* Feature 1 */}
          <div className="feature-item">
            <div className="feature-logos">
              <img src={require("../assets/Share.png")} alt="Inbox Logo" />
            </div>
            <h3>Share team inboxes</h3>
            <p>
              Easily collaborate across team inboxes with features designed to enhance productivity and communication.
            </p>
            <a href="#learn-more" className="feature-link">Learn more →</a>
          </div>

          {/* Feature 2 */}
          <div className="feature-item">
            <div className="feature-logos">
              <img src={require("../assets/Deliver.png")} alt="Instant Answer Logo" />
            </div>
            <h3>Deliver instant answers</h3>
            <p>
              Provide seamless solutions to customer queries with AI-powered tools for instant responses.
            </p>
            <a href="#learn-more" className="feature-link">Learn more →</a>
          </div>

          {/* Feature 3 */}
          <div className="feature-item">
            <div className="feature-logos">
              <img src={require("../assets/Manage.png")} alt="Reports Logo" />
            </div>
            <h3>Manage your team with reports</h3>
            <p>
              Track your team’s performance and improve workflows with detailed analytics and reports.
            </p>
            <a href="#learn-more" className="feature-link">Learn more →</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AnalyticsSection;
