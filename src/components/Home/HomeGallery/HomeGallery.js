import React from 'react';
import img1 from '../../../assets/images/donationPic1.JPG';
import img2 from '../../../assets/images/donationPic9.JPG';
import img3 from '../../../assets/images/donationPic10.JPG';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../Home/shared/Spinner/Spinner';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

const HomeGallery = () => {
    const {
      data: images = [],
      refetch,
      isLoading,
    } = useQuery({
      queryKey: ["blog"],
      queryFn: async () => {
        const res = await fetch("http://localhost:5000/gallery");
        const data = await res.json();
        return data;
      },
    });
    if (isLoading) {
      return <Spinner></Spinner>;
    }
     const settings = {
       className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
      autoplay:true,
      autoplaySpeed: 2000,
       responsive: [
         {
           breakpoint: 1024,
           settings: {
             slidesToShow: 3,
             slidesToScroll: 3,
             infinite: true,
             dots: true,
           },
         },
         {
           breakpoint: 600,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1,
             initialSlide: 1,
           },
         },
         {
           breakpoint: 480,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1,
           },
         },
       ],
     };
    return (
      <div className="my-24">
        <h2 className="text-4xl font-bold text-center mb-4">Gallery</h2>
        <Slider {...settings} className="mx-auto">
          {images.map((image) => (
            <div key={image._id} className="w-96 h-64">
              <img src={image.img} alt="" className="w-full h-full px-3" />
            </div>
          ))}
        </Slider>
        <div className="flex justify-center w-full my-5">
          <Link to={`/gallery`}>
            <button className="btn btn-primary text-center btn-wide rounded-none mx-auto ">
              View Gallery
            </button>
          </Link>
        </div>
      </div>
    );
};

export default HomeGallery;