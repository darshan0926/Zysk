import React from "react";
import "../styles/BlogSection.css";

function BlogSection() {
  return (
    <section className="blog-section">
      <div className="blog-container">
        {/* Header Section */}
        <div className="blog-header">
          <div className="blog-header__left">
            <p className="blog-small-text">Blog</p>
          </div>
          <div className="blog-header__right">
            <button className="view-all-btn">View all posts</button>
          </div>
        </div>

        {/* Title and Description */}
        <div className="blog-header__content">
          <h2>Latest blog posts</h2>
          <p className="blog-description">
            Tools and strategies modern teams need to help their companies grow.
          </p>
        </div>

        {/* Blog Posts */}
        <div className="blog-posts">
          <div className="blog-post">
            <img src={require('../assets/Blog post card.png')} alt="Blog 1" />
          </div>
          <div className="blog-post">
            <img src={require('../assets/Blog post card (1).png')} alt="Blog 2" />
          </div>
          <div className="blog-post">
            <img src={require('../assets/Blog post card (2).png')} alt="Blog 3" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
