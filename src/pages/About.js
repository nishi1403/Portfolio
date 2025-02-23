import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/About.css"; // Custom styles
import dp from '../assets/dp.jpg'

const About = () => {
  return (
    <div className="About">
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section bg-dark text-white text-center py-5">
        <div className="container">
          <h1 className="display-4 animate-fade-in">About Me</h1>
          <p className="lead animate-slide-up">
            Crafting digital experiences with passion and precision
          </p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="bio-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 text-center mb-4 mb-lg-0">
              <img
                src={dp} // Replace with your image
                alt="Profile"
                className="img-fluid rounded-circle profile-img animate-pop"
              />
            </div>
            <div className="col-lg-8">
              <h2 className="mb-4">Who I Am</h2>
              <p className="lead">
                I'm a passionate developer with a love for creating intuitive and
                beautiful web applications. With a blend of creativity and technical
                expertise, I turn ideas into reality.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies,
                sipping coffee, or sketching designs that inspire my next project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-5">My Skills</h2>
          <div className="row">
            {[
              { name: "React", level: 90 },
              { name: "JavaScript", level: 85 },
              { name: "CSS", level: 80 },
              { name: "Node.js", level: 75 },
            ].map((skill, index) => (
              <div key={index} className="col-md-6 mb-4">
                <div className="skill-card animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                  <h5>{skill.name}</h5>
                  <div className="progress">
                    <div
                      className="progress-bar bg-info"
                      role="progressbar"
                      style={{ width: `${skill.level}%` }}
                      aria-valuenow={skill.level}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      {skill.level}%
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fun Facts Section */}
      <section className="fun-facts-section py-5">
        <div className="container">
          <h2 className="text-center mb-5">Fun Facts</h2>
          <div className="row text-center">
            {[
              { fact: "Cups of Coffee", count: "500+" },
              { fact: "Projects Completed", count: "20+" },
              { fact: "Lines of Code", count: "50K+" },
              { fact: "Happy Clients", count: "15+" },
            ].map((item, index) => (
              <div key={index} className="col-md-3 mb-4">
                <div className="fact-card animate-pop" style={{ animationDelay: `${index * 0.2}s` }}>
                  <h3>{item.count}</h3>
                  <p>{item.fact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
    <br/>
    <br/>
    </div>
  );
};

export default About;