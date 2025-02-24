import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Certificate.css"; // Custom styles
import certi from '../assets/certi.webp'; // Default certificate image

const certificatesData = [
  {
    title: "React Developer Certification",
    description:
      "Completed an intensive course on React, mastering components, hooks, and state management.",
    issuer: "Coursera",
    image: certi, // Image path
  },
  {
    title: "Full Stack Web Development",
    description:
      "Earned a certificate in full-stack development, covering front-end and back-end technologies.",
    issuer: "Udemy",
    image: certi, // Image path
  },
  {
    title: "UI/UX Design Essentials",
    description:
      "Learned design principles and tools like Figma to create user-friendly interfaces.",
    issuer: "DesignCode",
    image: certi, // Image path
  },
];

const experienceData = [
  {
    role: "Frontend Developer",
    company: "TechCorp",
    duration: "Jan 2022 - Present",
    description:
      "Developed responsive web applications using React and TypeScript, improving user engagement by 30%.",
  },
  {
    role: "Web Design Intern",
    company: "Creative Solutions",
    duration: "Jun 2021 - Dec 2021",
    description:
      "Assisted in designing and prototyping websites, contributing to 5+ client projects.",
  },
];

const Certificate = () => {
  return (
    <div className="certificates-page">
      {/* Header Section */}
      <section className="header-section bg-dark text-white text-center py-5">
        <div className="container">
          <h1 className="display-4 animate-fade-in">Certificates & Experience</h1>
          <p className="lead animate-slide-up">
            A showcase of my achievements and professional journey
          </p>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="certificates-section py-5">
        <div className="container">
          <h2 className="text-center mb-5">Certificates</h2>
          <div className="row justify-content-center">
            {certificatesData.map((cert, index) => (
              <div key={index} className="col-md-6 col-lg-4 mb-4">
                <div className="card certificate-card">
                  <img src={cert.image} alt="Certificate" className="certificate-img" />
                  <div className="card__content">
                    <p className="card__title">{cert.title}</p>
                    <p className="card__description">
                      {cert.description} <br /> <strong>Issuer:</strong> {cert.issuer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience-section bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-5">Experience</h2>
          <div className="row">
            {experienceData.map((exp, index) => (
              <div key={index} className="col-md-6 mb-4">
                <div className="experience-card animate-slide-up">
                  <h3 className="experience-title">{exp.role}</h3>
                  <p className="experience-company">{exp.company}</p>
                  <p className="experience-duration">{exp.duration}</p>
                  <p className="experience-description">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <br/><br/>
    </div>
  );
};

export default Certificate;
