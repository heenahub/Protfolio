import React from "react";
import "./Project.css"
const projects = [
  {
    name: "CaroBar - A Car Website",
    description: "Buy, sell, and service cars online. Built with HTML, CSS, Bootstrap.",
    link: "https://car-deal-six.vercel.app/",
  },
  {
    name: "Cloudburst Prediction",
    description: "Predicts cloudbursts using Machine Learning and NLP.",
    link: "https://cloud-burst.vercel.app/",
  },
];

const Projects = () => {
  return (
    
    <div id="proj" style={{ padding: "40px" }}>
        <div className="container fade-in !important">
        <div className="position-relative d-flex align-items-center justify-content-center mb-5">
          <h1
            className="display-1 text-uppercase "
            style={{
              WebkitTextStroke: "1px #444", // Light gray outline
              color: "#000" // Black fill
            }}
          >
            Project
          </h1>
          <h1 className="position-absolute text-uppercase text-primary">
            Project
          </h1>
        </div>
      </div>

      {projects.map((project, index) => (
        <div key={index} style={{ marginBottom: "30px", padding: "20px", border: "1px solid #ddd", borderRadius: "10px" }}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              marginTop: "10px",
              padding: "10px 20px",
              backgroundColor: "#4F46E5",
              color: "#fff",
              textDecoration: "none",
              borderRadius: "6px",
            }}
          >
            View Project
          </a>
        </div>
      ))}
    </div>
  );
};

export default Projects;
