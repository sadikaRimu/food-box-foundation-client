import React from 'react';
import img from '../../../assets/images/donation14.webp';
import './BannerItem.css';

const BannerItem = () => {
    return (
        <div className="carousel-item relative w-full">
            <div className='carousel-image'>
                <img src={img} alt="" className="w-full rounded-xl" />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24  top-1/4">
                <h1 className='text-6xl font-bold text-white'>
                    Books,  <br />
                    Things with Feelings<br />

                </h1>
            </div>
            <div className="absolute flex justify-end w-2/5 transform -translate-y-1/2 left-24 top-2/3 py-6 lg:top-1/2">
                <p className='text-white text-xl'>
                    Different categories second hand books are available here,you can buy second hand books from here also you can sell your old books here.
                </p>
            </div>
            <div className="absolute flex justify-start w-2/5 transform -translate-y-1/2 left-24  top-3/4">
                <button className="btn btn-primary mr-5 font-bold">Search Category</button>

            </div>
            {/* <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle mr-5">❯</a>
            </div> */}
        </div>
    );
};

export default BannerItem;