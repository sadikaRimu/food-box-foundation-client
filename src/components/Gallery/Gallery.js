import React from 'react';
import img1 from '../../assets/images/donationPic6.JPG';
import img2 from '../../assets/images/donationPic11.JPG';
import img3 from '../../assets/images/donationPic7.JPG';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../Home/Home/shared/Spinner/Spinner';

const Gallery = () => {
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
    return <Spinner></Spinner>
  }
    return (
      <div className='my-5'>
        <h2 className="text-3xl font-bold text-center mb-4">Gallery Photos</h2>
        <div className="grid gap-20 grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
          {images.map((image) => (
            <div key={image._id} className="w-11/12 mx-auto lg:w-96 shadow-xl ">
              <div>
                <img className="rounded w-full h-56" src={image.img} alt="" />
                <div className="text-center">
                  <h2 className="text-lg font-bold">{image.title}</h2>
                  <p className="text-muted">Date: {image.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Gallery;