import React from "react";
import "./Testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, enim. Ab ea est saepe voluptatibus eligendi quam minima ex id sed sint rerum exercitationem fuga distinctio velit sapiente, repellendus eum?'
  },
  {
    avatar: AVTR2,
    name: 'Shatta Wale',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, enim. Ab ea est saepe voluptatibus eligendi quam minima ex id sed sint rerum exercitationem fuga distinctio velit sapiente, repellendus eum?'
  },
  {
    avatar: AVTR3,
    name: 'Kwame Despite',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, enim. Ab ea est saepe voluptatibus eligendi quam minima ex id sed sint rerum exercitationem fuga distinctio velit sapiente, repellendus eum?'
  },
  {
    avatar: AVTR4,
    name: 'Mane McBrown',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, enim. Ab ea est saepe voluptatibus eligendi quam minima ex id sed sint rerum exercitationem fuga distinctio velit sapiente, repellendus eum?'
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
          // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}    
      pagination={{ clickable: true }}      
      >
        {
          data.map(({ avatar, name, review}, index) => {
            return(
              <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={avatar} alt="avatar" />
            </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>         
        </SwiperSlide>          
            )
          })
        }        
      </Swiper>
    </section>
  );
};

export default Testimonials;
