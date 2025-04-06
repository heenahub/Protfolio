import React, { useState } from 'react';
 // Make sure this file is created
import './card.css';
const ContactFlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [flipDisabled, setFlipDisabled] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', project: '' });

  const handleFlip = () => {
    if (flipDisabled || isFlipped) return;

    setIsFlipped(true);
    setFlipDisabled(true);

    setTimeout(() => {
      setFlipDisabled(false);
    }, 60000); // 1 minute delay
  };

  const handleBack = (e) => {
    e.stopPropagation();
    setIsFlipped(false);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form Submitted!');
  };

  return (
    <div id="cont" className="contact-wrapper">
      

     
      <div className="container fade-in">
        <div className="position-relative d-flex align-items-center justify-content-center mb-5">
          <h1
            className="display-1 text-uppercase text-white"
            style={{ WebkitTextStroke: "1px #dee2e6" }}
          >
           Contact
          </h1>
          <h1 className="position-absolute text-uppercase text-primary">
          Contact Us
          </h1>
        </div>
        </div>


      <p className="description">
        For any project inquiries, email me at <a href="mailto:contact@domain.com">heenabudh@gmail.com</a>
      </p>

      <div className="card-container" onClick={handleFlip}>
        <div className={`card ${isFlipped ? 'flipped' : ''}`}>
          {/* Front */}
          <div className="card-face card-front">
            <h3>Contact Us</h3>
            <p>Click to fill out the form</p>
          </div>

          {/* Back */}
          <div className="card-face card-back" onClick={(e) => e.stopPropagation()}>
            <h3>Contact Form</h3>
            <form onSubmit={handleSubmit}>
              <label>Name</label>
              <input type="text" id="name" value={formData.name} onChange={handleChange} required />
              
              <label>Email</label>
              <input type="email" id="email" value={formData.email} onChange={handleChange} required />

              <label>Project Details</label>
              <textarea id="project" value={formData.project} onChange={handleChange} required></textarea>
              
              <div className="btn-group">
                <button type="submit">Submit</button>
                <button type="button" onClick={handleBack}>Back</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFlipCard;
