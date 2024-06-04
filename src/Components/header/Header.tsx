import Cta from "./CTA";
import "./header.css";
import myPhoto from "../../assets/me/karen2.png";
import SocialMedia from "./SocialMedia";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Karen Brito</h1>
        <h5>Full Stack Developer</h5>
        <Cta />
        <SocialMedia />

        <div className="me">
          <img src={myPhoto} alt="Me" />
        </div>

        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
