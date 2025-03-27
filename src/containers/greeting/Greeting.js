import React, { useContext } from "react";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import profileImage from "../../assets/images/anmol_landing_page.jpeg";

import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting, skillsSection } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const { isDark } = useContext(StyleContext);

  if (!greeting.displayGreeting) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className={isDark ? "dark-mode greeting-text" : "greeting-text"}>
                {greeting.title} <span className="wave-emoji">{emoji("👋")}</span>
              </h1>

              <p className={isDark ? "dark-mode greeting-text-p" : "greeting-text-p subTitle"}>
                {greeting.subTitle}
              </p>

              {/* Skill bullet points */}
              {skillsSection.skills.map((skill, index) => (
                <p key={index} className={isDark ? "dark-mode greeting-bullet" : "greeting-bullet"}>
                  {skill}
                </p>
              ))}

              {/* Software skill icons */}
              <div className="software-skills-main-div">
                <ul className="dev-icons">
                  {skillsSection.softwareSkills.map((skill, index) => (
                    <li
                      key={index}
                      className="software-skill-inline"
                      name={skill.skillName}
                    >
                      <i className={skill.fontAwesomeClassname}></i>
                      <p>{skill.skillName}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div id="resume" className="empty-div"></div>
              <SocialMedia />

              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                {greeting.resumeLink && (
                  <a
                    href={require("./resume.pdf")}
                    download="Resume.pdf"
                    className="download-link-button"
                  >
                    <Button text="Download my resume" />
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="greeting-image-div">
            <img
              src={profileImage}
              alt="Anmol Dwivedi"
              className="profile-image"
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}
