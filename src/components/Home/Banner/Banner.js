import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import backImg from '../../../assets/images/donation14.webp';
import backgroundPic from '../../../assets/images/donationPic11.JPG';
import './Banner.css';

//style={{ backgroundImage: `url(${backImg})` }}

const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    fade: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    nextArrow: false,
    prevArrow:false
  };
    return (
      <div>
        <div className="h-96 w-full relative z-10 mb-64">
          <Slider {...settings} className="text-center -z-0 w-full h-full">
            <div>
              <img
                src="https://i.ibb.co/zfX1Hcj/ALY-0006.jpg"
                alt=""
                className="h-[620px] w-full"
              />
            </div>
            <div>
              <img
                src="https://i.ibb.co/Z6vq6DQ/ALY-0007-Copy.jpg"
                alt=""
                className="h-[620px] w-full"
              />
            </div>
            <div>
              <img
                src="https://i.ibb.co/pz0PvH3/ALY-0028-1.jpg"
                alt=""
                className="h-[620px] w-full"
              />
            </div>
          </Slider>
          <div className="px-10 md:px-24 lg:px-24 py-[175px] md:py-[202px] lg:py-[182px] text-center absolute top-0 banner-bg">
            <h1 className="text-white text-5xl font-bold mb-8">
              No kid should be left hungry
            </h1>
            <p className="text-slate-300 text-lg font-light hidden lg:block">
              Food Box Foundation key camping is “No kid should be left Hungry”
              We believe everyone has the right to food and our small effort can
              help them to access food. We are working toward havingan End
              Hunger food bank in each city where the unprivileged can access
              free food.
            </p>
            <a href="/donate">
              <button className="btn btn-primary btn-md rounded-none mt-4 bg-gradient-to-r from-cyan-500 to-blue-700 border-0 hover:bg-gradient-to-l from-cyan-500 to-blue-500 text-white">
                Donate Now
              </button>
            </a>
          </div>
        </div>
      </div>
    );
};

export default Banner;