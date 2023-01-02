import React from 'react';
import { Link } from 'react-router-dom';
import backImg from '../../../assets/images/donation14.webp';
import backgroundPic from '../../../assets/images/donationPic11.JPG';
import './Banner.css';

//style={{ backgroundImage: `url(${backImg})` }}

const Banner = () => {
    return (
        <div>
            <div className='bg-gradient-to-tl from-sky-900 to-green-900 h-96 w-full relative'>
                <img className='w-full h-full object-cover absolute mix-blend-overlay' src={backgroundPic} alt='' />
                <div className='p-24 text-center'>
                    <h1 className='text-white text-5xl font-bold mb-8'>Let’s Help Those Who Are More In Need</h1>
                    <h2 className='text-slate-300 text-3xl font-light hidden lg:block'>Lorem ipsum dolor sit amet, usu cu esse possit referrentur, Lorem ipsum dolor sit amet, usu cu esse possit referrentur</h2>
                    <a href='/donate'><button className='btn btn-primary mt-4'>Donate Now</button></a>
                </div>

            </div>
        </div>

    );
};

export default Banner;