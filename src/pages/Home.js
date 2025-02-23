import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
// Make sure to add an image in your public folder or assets
import profileImage from "../assets/dp.jpg"; // Add your image path

const Home = () => {
  return (
    <div id="home" className="home-container">
      <div className="home-content">
        <div className="text-section">
          <br />
          <h1 className="title">Hi, I'm xyz</h1>
          <h2 className="subtitle">Creative Developer & Designer</h2>
          <p className="description">
            Welcome to my portfolio! I'm passionate about crafting beautiful,
            functional, and user-friendly digital experiences. With expertise
            in web development and design, I bring ideas to life through code
            and creativity.
          </p>
          <button className="ui-btn">
            <span>
              <Link to="/projects" className="link">Explore My Work</Link>
            </span>
          </button>
        </div>
        <div className="image-section">
          <img src={profileImage} alt="Profile" className="profile-image" />
        </div>
      </div>
    </div>
  );
};

export default Home;