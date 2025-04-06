import React from "react";
import "./About.css";

const AboutMe = () => {
  return (
    <section id="about" className="p-5">
      <div className="container fade-in">
        <div className="position-relative d-flex align-items-center justify-content-center mb-5">
          <h1
            className="display-1 text-uppercase text-white"
            style={{ WebkitTextStroke: "1px #dee2e6" }}
          >
            About
          </h1>
          <h1 className="position-absolute text-uppercase text-primary">
            About Me
          </h1>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-5 px-5 pb-5 d-flex justify-content-center">
            <div className="image-card">
              <img
                src="/WhatsApp3.jpg"
                alt="About Me"
                className="img-fluid rounded shadow about-img fade-in-delay"
                loading="lazy"
              />
            </div>
          </div>

          <div className="col-lg-7 text-center text-lg-start">
            <p className="lead fade-in-text">
              Hi! I’m a passionate web developer and designer, currently
              exploring AI, ML, and full-stack development. Let’s build
              something amazing together!
            </p>

            <div
              className="animated-text"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="900"
            >
              <h3>Web Developer</h3>
              <h3>Web Designer</h3>
              <h3>Programmer</h3>
            </div>

            <h3 className="text-primary mt-4">
            Designing digital dreams, one line of code at time
            </h3>
            <p>
              Passionate about creating stunning and user-friendly digital
              experiences. I specialize in modern web development and user
              interface design.
            </p>

            <div className="row mb-4">
              <div className="col-md-6">
                <p>
                  <strong>Name:</strong> Heena Budhabaware
                </p>
                <p>
                  <strong>Birthday:</strong> 17 July 2004
                </p>
                <p>
                  <strong>Degree:</strong> B.Tech
                </p>
                
              </div>
              <div className="col-md-6">
                <p>
                  <strong>Phone:</strong> +91 8080090959
                </p>
                <p>
                  <strong>Email:</strong> heenabudh@gmail.com
                </p>
                <p>
                  <strong>Address:</strong> Nagpur, Maharashtra, India
                </p>
                <p>
                  <strong>Freelance:</strong> Available
                </p>
              </div>
            </div>

            <div className="button-group mt-4">
  <a
    href="#cont"
    className="btn"
    style={{
      backgroundColor: "white",
      color: "black",
      border: "2px solid #000",
      padding: "10px 25px",
      fontWeight: "500",
      marginRight: "50px" 
      
    }}
      >
    Hire Me
  </a>
  <a
  href="/resum.pdf"
  download="My_Resume.pdf"
  className="btn"
  style={{
    backgroundColor: "#000",
    color: "#fff",
    border: "2px solid #000",
    padding: "10px 25px",
    fontWeight: "500",
    marginLeft: "50px"
  }}
>
  Download CV
</a>


</div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
