import { FaAward } from "react-icons/fa";
import Me from "../../../src/assets/me/karen2.png";
import { VscFolderLibrary } from "react-icons/vsc";

import "./aboutMe.css";

const AboutMe = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <img src={Me} alt="Me Image" className="about_me-img" />
        </div>

        <div className="about_content">
          <div className="about_content-text">
            <p>
              My focus is on frontend development, with notable skills in React,
              JavaScript, HTML, CSS and Bootstrap. In addition to having
              knowledge in Backend and databases.
            </p>
            <p>
              I am a proactive person, an excellent teammate, organized,
              goal-oriented and responsible.
            </p>
          </div>
          <div className="about_cards">
            <a className="about_card" href="#experience">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>2+ Years working</small>
            </a>
            <a className="about_card" href="#testimonials">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>40+ Completed</small>
            </a>
          </div>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
