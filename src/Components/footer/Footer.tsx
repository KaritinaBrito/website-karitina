import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        <img src="/src/assets/flor-de-loto.png" alt="" />
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#testimonials">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_copyright">
        <small> © KaritinaBrito </small>
      </div>
    </footer>
  );
};

export default Footer;
