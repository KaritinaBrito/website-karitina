import { useRef } from "react";
import emailjs from "emailjs-com";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import "./contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_lvfoz03",
      "template_sw9u7sb",
      form.current,
      "6VqkNJpxKDm6jMevq"
    );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact-container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>karitinabrito@gmail.com</h5>
            <a href="mailto:karitinabrito@gmail.com" target="_blanck">
              Send a message
            </a>
          </article>

          <article className="contact_option">
            <FaWhatsapp className="contact_option-icon" />
            <h4>WhatsApp</h4>
            <h5>+52 55 42 44 01 05</h5>
            <a href="https://wa.me/5542440105" target="_blanck">
              Send a message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            placeholder="Your message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
