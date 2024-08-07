import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="service">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Responsive Design</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Good and Attractive web design</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Figma</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Layout</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Incident management</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Development of functional components</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Quality controls</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Unit testing</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Code maintenance</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Debugging</p>
            </li>
          </ul>
        </article>
         {/* <article className="service">
          <div className="service_head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article> */}
      </div>
    </section>
  );
};

export default Services;
