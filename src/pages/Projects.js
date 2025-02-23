import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Projects.css"; // Custom styles
import sam from '../assets/sample.jpeg'

const projectsData = [
  {
    title: "E-Commerce Platform",
    image: sam,
    description:
      "A fully functional online store with user authentication, product catalog, and payment integration.",
    tech: ["React", "Node.js", "MongoDB"],
    link: "https://github.com/nishi1403/Portfolio",
  },
  {
    title: "Weather Dashboard",
    image: sam,
    description:
      "A real-time weather app with location-based forecasts and interactive charts.",
    tech: ["React", "API", "Chart.js"],
    link: "https://github.com/nishi1403/Portfolio",
  },
  {
    title: "Task Manager",
    image: sam,
    description:
      "A productivity tool for managing tasks with drag-and-drop functionality.",
    tech: ["React", "Redux", "Firebase"],
    link: "https://github.com/nishi1403/Portfolio",
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div className="projects-page">
      {/* Header Section */}
      <section className="header-section bg-dark text-white text-center py-5">
        <div className="container">
          <h1 className="display-4 animate-fade-in">My Projects</h1>
          <p className="lead animate-slide-up">
            A showcase of my work and creativity
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-section py-5">
        <div className="container">
          <div className="row">
            {projectsData.map((project, index) => (
              <div key={index} className="col-md-6 col-lg-4 mb-4">
                <div className="project-card animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="card-image">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="img-fluid"
                    />
                  </div>
                  <div className="card-content">
                    <h3 className="card-title">{project.title}</h3>
                    <p className="card-description">{project.description}</p>
                    <div className="card-tech">
                      {project.tech.map((tech, idx) => (
                        <span key={idx} className="tech-badge">{tech}</span>
                      ))}
                    </div>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card-link"
                      >
                        View Project
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <br/>
      <br/>
    </div>
    
  );
};

export default Projects;