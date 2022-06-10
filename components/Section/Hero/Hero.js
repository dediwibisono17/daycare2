import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './Hero.module.scss'

const Hero = (props) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div className={styles.img}>
        <img src="https://lilo.qodeinteractive.com/wp-content/uploads/2018/05/h1-slider-backround-1.jpg" title="" alt="" />
      </div>
      <div className={styles.img}>
        <img src="https://lilo.qodeinteractive.com/wp-content/uploads/2018/05/h1-slider-backround-1.jpg" title="" alt="" />
      </div>
      
    </Slider>
  );
};

export default Hero;
