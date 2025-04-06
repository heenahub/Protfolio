import React from 'react';
import './TechnicalSkills.css';

const skills = [
  { name: 'HTML/HTML5', proficiency: '100%', icon: 'http://www.webcoderskull.com/img/icon/html.svg' },
  { name: 'CSS', proficiency: '100%', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShuEmJAUIYjZy4iVym0-uf4dDG82UsrMmBFg&s' },
  { name: 'JavaScript', proficiency: '80%', icon: 'https://e7.pngegg.com/pngimages/640/199/png-clipart-javascript-logo-html-javascript-logo-angle-text-thumbnail.png' },
  { name: 'React', proficiency: '70%', icon: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' },
  { name: 'AI/ML/NLP', proficiency: '50%', icon: 'https://e7.pngegg.com/pngimages/145/893/png-clipart-artificial-intelligence-natural-language-processing-machine-learning-computer-icons-chatbot-others-text-logo-thumbnail.png' },
  { name: 'Java', proficiency: '75%', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkCCdLCDhY7mwKXP4bHVQ1SFZxn3pPM2QLFw&s' },
  { name: 'Python', proficiency: '60%', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpQ6sS7Y2Y5x3hYYGtDjju12C1UFPs4hWSSA&s' },
  { name: 'MySQL', proficiency: '70%', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEX4TOxFuGMLSyuIm8s6fZ4sQOCQGV2oAWog&s' },
  { name: 'PHP', proficiency: '70%', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCZgHpkWPUZ3sICFf86S0_y-H3hyPPchjtDw&s' }
];

const SkillsSection = () => {
  return (
    <div id="skills">

      

      <div className="container fade-in !important">
        <div className="position-relative d-flex align-items-center justify-content-center mb-5">
          <h1
            className="display-1 text-uppercase "
            style={{
              WebkitTextStroke: "1px #444", // Light gray outline
              color: "#000" // Black fill
            }}
          >
            Skill
          </h1>
          <h1 className="position-absolute text-uppercase text-primary">
            Skills
          </h1>
        </div>
      </div>

      <div className="skill-setcontainer">
        <div className="content content--mlarge skill-set__flex">
          {skills.map((skill, index) => (
            <div className="skill-set__item" key={index}>
              <div className="skill-set__icon">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  onError={(e) => { e.target.src = '/images/fallback.png'; }} 
                />
              </div>
              <div className="skill-set__detail">
                <div className="skill-set__meta">
                  <div className="skill-set__name">
                    <h4 className="small-title small-title--skill">{skill.name}</h4>
                  </div>
                  <p className="small-title1 small-title--skill">{skill.proficiency}</p>
                </div>
                <div className="skill-set__bar">
                  <div
                    className="skill-set__progress"
                    style={{ '--bar-width': skill.proficiency }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  );
};

export default SkillsSection;
