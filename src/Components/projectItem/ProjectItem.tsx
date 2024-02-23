import { Project } from "../../interfaces/Data";
import "./ProjectItem.css";
import { FaGithub } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";

const ProjectItem = ({ id, image, title, github, demo }: Project) => {
  return (
    <article key={id} className="portfolio_item">
      <div className="portfolio_item-img">
        <img src={image} alt={title} />
      </div>
      <h3>{title}</h3>
      <div className="portfolio_item-cta">
        <a href={github} target="_blank" className="btn">
          Github <FaGithub className="btn-icon" />
        </a>
        <a href={demo} target="_blank" className="btn btn-primary">
          Live demo <FaLocationArrow className="btn-icon" />
        </a>
      </div>
    </article>
  );
};

export default ProjectItem;
