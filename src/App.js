// Step 3: App.js Structure
import React from "react";
import "./App.css"
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import AnalyticsSection from "./components/AnalyticsSection";
import FAQ from "./components/FAQ";
import BlogPosts from "./components/BlogPosts";
import Footer from "./components/Footer";
import Analytics from "./components/Analytics";
import Navbar from './components/Navbar';
import TestimonialsSection from './components/TestimonialsSection';
import TrialSection from "./components/TrialSection";
import Testimonial from "./components/Testimonial";
function App() {
  return (
    <div className="App">
      
      <Navbar />
      <HeroSection />
      <Analytics />
      <Features />
      <Testimonial />
      <AnalyticsSection />
      
      <FAQ />
      <TestimonialsSection />
      <BlogPosts />
      <TrialSection/>
      <Footer />
    </div>
  );
}

export default App;
