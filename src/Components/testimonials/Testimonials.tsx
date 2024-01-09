import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Client } from "../../interfaces/Data";
import avatar1 from "../../assets/react.png";
import avatar2 from "../../assets/angular.png";
import avatar3 from "../../assets/css.jpg";
import "./testimonials.css";
import { Link } from "react-router-dom";

const data: Client[] = [
  {
    avatar: avatar1,
    name: "React",
    review:
      "Projects developed with React, with navigation functionalities and responsive design.",
  },
  {
    avatar: avatar2,
    name: "Angular",
    review:
      "Projects developed with Angular, with navigation functionalities and responsive design",
  },
  {
    avatar: avatar3,
    name: "Responsive",
    review:
      "Projects with responsive design for different devices, functionalities with Javascript",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Projects with different frameworkss</h5>
      <h2>Portfolio</h2>

      <Swiper
        className="container testimonials_container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide className="testimonial" key={index}>
              <Link to={`/portfolio/${name}`}>
                <div className="client_avatar">
                  <img src={avatar} alt="image person" />
                </div>
                <h5 className="client_name">{name}</h5>
                <small className="client_review">{review}</small>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
