import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

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
    </div>
  );
};

export default SocialMedia;
