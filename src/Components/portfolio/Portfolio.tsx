import "./portfolio.css";
import img1 from "../../assets/portfolio/gymMobile.png";
import img2 from "../../assets/portfolio/kanban.png";
import img3 from "../../assets/portfolio/movflixMobile.png";
import img4 from "../../assets/portfolio/recipePageDesktop.png";
import img5 from "../../assets/portfolio/checkoutMobile.png";
import img6 from "../../assets/portfolio/edieMobile.png";
import img7 from "../../assets/portfolio/ecommerceAngular.png";
import img8 from "../../assets/portfolio/budget-example.png";
import img9 from "../../assets/portfolio/todoAngular.png";
import img10 from "../../assets/portfolio/ecommerceReactM.png";
import img11 from "../../assets/portfolio/batatabitM.png";

import { Data } from "../../interfaces/Data";
import ProjectItem from "../projectItem/ProjectItem";
import { Link, useParams } from "react-router-dom";
import NotFound from "../../Pages/NotFound";
import { MdArrowBackIos } from "react-icons/md";

const dataReact: Data[] = [
  {
    id: 1,
    image: img1,
    title: "Gym website developed with React and CSS.",
    github: "https://github.com/KaritinaBrito/gym-typescript",
    demo: "https://charming-chaja-cca4c0.netlify.app/",
  },
  {
    id: 2,
    image: img2,
    title:
      "Task list, CRUD created with React and CSS, allowing dragging tasks and task lists.",
    github: "https://github.com/KaritinaBrito/kanban-to-do",
    demo: "https://dashing-sherbet-4d9814.netlify.app/",
  },
  {
    id: 3,
    image: img3,
    title: "MovFlix page that consumes The movie DB API with React and CSS.",
    github: "https://github.com/KaritinaBrito/movFlix",
    demo: "https://unrivaled-cat-0184f5.netlify.app/",
  },
  {
    id: 4,
    image: img10,
    title: "Ecommerce website developed with React y Tailwind.",
    github: "https://github.com/KaritinaBrito/ecommerce-minimal-react",
    demo: "https://animated-tanuki-02cce1.netlify.app/",
  },
];

const dataAngular: Data[] = [
  {
    id: 1,
    image: img7,
    title: "Ecommerce with angular 17 with API consumption",
    github: "https://github.com/KaritinaBrito/store-angular-17",
    demo: "https://store-angular-17.web.app/?category_id=3",
  },
  {
    id: 2,
    image: img8,
    title:
      "Application that allows you to control expenses and budget balance.",
    github: "https://github.com/KaritinaBrito/budget-application",
    demo: "https://budget-demo.netlify.app/enter-budget",
  },
  {
    id: 3,
    image: img9,
    title: "ToDo list CRUD, allows you to filter by categories",
    github: "https://github.com/KaritinaBrito/todoApp",
    demo: "https://todoapp-2fbdd.web.app/",
  },
];

const dataResponsive: Data[] = [
  {
    id: 1,
    image: img4,
    title: "Cooking recipe, page with responsive design based on given design",
    github: "https://github.com/KaritinaBrito/Recipe-page",
    demo: "https://karitinabrito.github.io/Recipe-page/",
  },
  {
    id: 2,
    image: img5,
    title: "Cooking recipe, page with responsive design based on given design",
    github: "https://github.com/KaritinaBrito/Recipe-page",
    demo: "https://karitinabrito.github.io/Recipe-page/",
  },
  {
    id: 3,
    image: img6,
    title: "Cooking recipe, page with responsive design based on given design",
    github: "https://github.com/KaritinaBrito/Recipe-page",
    demo: "https://karitinabrito.github.io/Recipe-page/",
  },
  {
    id: 4,
    image: img11,
    title: "Cooking recipe, page with responsive design based on given design",
    github: "https://github.com/KaritinaBrito/Recipe-page",
    demo: "https://karitinabrito.github.io/MobileFirst/",
  },
];

const Portfolio = () => {
  const { name } = useParams();

  return (
    <section id="portfolio" className="portfolio-page">
      <div>
        <Link to={"/"}>
          <MdArrowBackIos className="icon-back" />
        </Link>
      </div>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

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
