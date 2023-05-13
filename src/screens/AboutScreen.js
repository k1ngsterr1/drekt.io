import React from "react";
import styles from "../styles/about-styles/about.css";

// Swiper.js
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

// Assets
import model from "../assets/orange.png";

const AboutScreen = () => {
  return (
    <div className="about-screen">
      <div className="container">
        <div className="about-content">
          <h2 className="about-heading">ABOUT THE FAMILY</h2>
          <p className="about-p">
            There is nothing more important than family. And since you have come
            to our house, we will accept any of your wishes and use the best
            technologies. We are ready to make a unique product of any
            complexity.
          </p>
          <div className="regular-cases">
            <h3 className="reg-cases-heading">About regular cases</h3>
            <div className="swiper-container">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutScreen;
