import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Client } from "../../interfaces/Data";
import avatar1 from "../../assets/skills/react.png";
import avatar2 from "../../assets/skills/angular.png";
import avatar3 from "../../assets/skills/responsive.png";
import "./testimonials.css";
import { Link } from "react-router-dom";

const data: Client[] = [
  {
    avatar: avatar1,
    name: "React",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate saepe ipsum porro molestiae asperiores tenetur minima hic quibusdam iure id similique, rem placeat",
  },
  {
    avatar: avatar2,
    name: "Angular",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate saepe ipsum porro molestiae asperiores tenetur minima hic quibusdam iure id similique, rem placeat",
  },
  {
    avatar: avatar3,
    name: "Responsive",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate saepe ipsum porro molestiae asperiores tenetur minima hic quibusdam iure id similique, rem placeat",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

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
