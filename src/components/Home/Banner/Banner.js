import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import backImg from '../../../assets/images/donation14.webp';
import backgroundPic from '../../../assets/images/donationPic11.JPG';
import './Banner.css';

//style={{ backgroundImage: `url(${backImg})` }}

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: null,
    nextArrow: null,
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
          <div className="px-24 py-44 text-center absolute top-0 banner-bg">
            <h1 className="text-white text-5xl font-bold mb-8">
              No kid should be left hungry
            </h1>
            <p className="text-slate-300 text-xl font-light hidden lg:block">
              Food Box Foundation’s key campaign is aimed at providing daily
              nutritious & hygienic meals to poor underprivileged kids across
              the country. The aim of this campaign is “No kid should be left
              hungry”.
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