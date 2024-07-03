import { MdArrowBackIos } from "react-icons/md";
import notFound from "../assets/notFound3.png";
import "./NotFound.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="notfound">
      <Link to={"/"}>
        <MdArrowBackIos className="icon-back" />
      </Link>
      <img className="notFound-image" src={notFound} alt="Not found image" />
    </section>
  );
};

export default NotFound;
