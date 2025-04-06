import React from 'react';
import './Service.css';

const services = [
  {
    name: 'Web Design',
    description: 'Creating responsive and visually appealing websites.',
    icon: 'fa-solid fa-laptop',
    logo: 'https://img.icons8.com/fluency/96/web-design.png'
    
  },
  {
    name: 'Frontend Developer',
    description: 'Building interactive and user-friendly web interfaces.',
    icon: 'fa-solid fa-code',
     logo: 'https://cdn-icons-png.flaticon.com/512/1055/1055687.png'
  },
  {
    name: 'Backend Developer',
    description: 'Developing robust server-side logic and databases.',
    icon: 'fa-solid fa-server',
     logo: 'https://cdn-icons-png.flaticon.com/512/4248/4248443.png'
  },
  {
    name: 'Digital Marketing',
    description: 'Implementing SEO and digital strategies for online growth.',
    icon: 'fa-solid fa-chart-line',
    logo: 'https://cdn-icons-png.flaticon.com/512/4149/4149647.png'

  }
];

const Services = () => {
  return (
    <div className="services-container"  id="Ser">
      
      <div className="container fade-in">
        <div className="position-relative d-flex align-items-center justify-content-center mb-5">
          <h1
            className="display-1 text-uppercase text-white"
            style={{ WebkitTextStroke: "1px #dee2e6" }}
          >
            Services
          </h1>
          <h1 className="position-absolute text-uppercase text-primary">
          Service
          </h1>
        </div>
        </div>
      <div className="services-flex">
        {services.map((service, index) => (
          <div className="service-item" key={index}>
            <div className="logo-wrapper">
              <img src={service.logo} alt={`${service.name} logo`} className="service-logo" />
            </div>
            <i className={`fa ${service.icon} service-icon`}></i>
            <h4>{service.name}</h4>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
