import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";

const SocialMedia = () => {
  return (
    <div className="header_socials">
      <a
        href="https://www.linkedin.com/in/karen-brito-590052125/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/KaritinaBrito" target="_blank">
        <FaGithub />
      </a>
      <a href="https://dribble.com" target="_blank">
        <FiDribbble />
      </a>
    </div>
  );
};

export default SocialMedia;
