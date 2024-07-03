import "./portfolio.css";

import { dataReact, dataAngular, dataResponsive} from "../../data/data-projects"
import ProjectItem from "../projectItem/ProjectItem";
import { Link, useParams } from "react-router-dom";
import NotFound from "../../Pages/NotFound";
import { MdArrowBackIos } from "react-icons/md";

const Portfolio = () => {
  const { name } = useParams();

  return (
    <section id="portfolio" className="portfolio-page">
      <div>
        <Link to={"/"}>
          <MdArrowBackIos className="icon-back" />
        </Link>
      </div>
      <h2>My Recent Work in {name}: </h2>

      {name === "React" ? (
        <div className="container portfolio_container">
          {dataReact.map(({ id, image, title, github, demo }) => {
            return (
              <ProjectItem
                id={id}
                image={image}
                title={title}
                github={github}
                demo={demo}
              />
            );
          })}
        </div>
      ) : name === "Angular" ? (
        <div className="container portfolio_container">
          {dataAngular.map(({ id, image, title, github, demo }) => {
            return (
              <ProjectItem
                id={id}
                image={image}
                title={title}
                github={github}
                demo={demo}
              />
            );
          })}
        </div>
      ) : name === "Responsive" ? (
        <div className="container portfolio_container">
          {dataResponsive.map(({ id, image, title, github, demo }) => {
            return (
              <ProjectItem
                id={id}
                image={image}
                title={title}
                github={github}
                demo={demo}
              />
            );
          })}
        </div>
      ) : (
        <NotFound />
      )}
    </section>
  );
};

export default Portfolio;
