import React from 'react';
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import img from '../../../assets/images/donation10.jpg';
import Slider from "react-slick";
import { Component } from "react";


const CardCarousel = () => {
    // let sliderContainer = document.getElementById('sliderContainer');
    // let slider = document.getElementById('slider');
    // let cards = slider.getElementsByTagName('li');
    // let elementsToShow = 3;
    // let sliderContainerWidth = sliderContainer.clientWidth;

    // let cardWidth = sliderContainerWidth / elementsToShow;
    // slider.style.width = cards.length * cardWidth + 'px';
    // for (let index = 0; index < cards.length; index++) {
    //     const element = cards[index];
    //     element.style.width = cardWidth + 'px';
    // }
    const prev = () => {
        // if (+slider.style.marginLeft.slice(0, -2) !== -cardWidth * (cards.length - elementsToShow))
        //     slider.style.marginLeft = ((+slider.style.marginLeft.slice(0, -2)) - cardWidth) + 'px'; //100px
    }
    const next = () => {
        // if (+slider.style.marginLeft.slice(0, -2) !== 0)
        //     slider.style.marginLeft = ((+slider.style.marginLeft.slice(0, -2)) + cardWidth) + 'px';
    }
    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        swipeToSlide: true,
        afterChange: function (index) {
            console.log(
                `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
            );
        }
    };


    return (
        <div>
            {/* <div className='flex'>
                <div className='w-2/12 flex items-center'>
                    <div className='w-full text-right'>
                        <button onClick={prev} className='p-3 rounded-full bg-white border-gray-100 shadow-lg mr-5'>
                            <HiArrowNarrowLeft />
                        </button>
                    </div>
                </div>
                <div id="sliderContainer" className='w-10/12 overflow-hidden'>
                    <ul id='slider' className='flex w-full transition-margin duration-700'>
                        <li className='w-96 p-5'>
                            <div className='border rounded-lg p-5'>
                                <img className='h-50 w-full object-cover rounded-md' src={img} alt='' />
                                <h2 className='mt-2 text-2xl font-bold text-gray-700'>Some big heading</h2>
                                <p className='mt-2 text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis temporibus neque magnam maiores enim asperiores! Deserunt ipsam odio totam illo labore? Fuga, magni. Exercitationem minima ipsam dolores porro aperiam facere?</p>
                                <button className='mt-4 px-6 py-3 rounded-md bg-green-700 text-white font-bold'>Read More</button>
                            </div>
                        </li>
                        <li className='w-96 p-5'>
                            <div className='border rounded-lg p-5'>
                                <img className='h-50 w-full object-cover rounded-md' src={img} alt='' />
                                <h2 className='mt-2 text-2xl font-bold text-gray-700'>Some big heading</h2>
                                <p className='mt-2 text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis temporibus neque magnam maiores enim asperiores! Deserunt ipsam odio totam illo labore? Fuga, magni. Exercitationem minima ipsam dolores porro aperiam facere?</p>
                                <button className='mt-4 px-6 py-3 rounded-md bg-green-700 text-white font-bold'>Read More</button>
                            </div>
                        </li>
                        <li className='w-96 p-5'>
                            <div className='border rounded-lg p-5'>
                                <img className='h-50 w-full object-cover rounded-md' src={img} alt='' />
                                <h2 className='mt-2 text-2xl font-bold text-gray-700'>Some big heading</h2>
                                <p className='mt-2 text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis temporibus neque magnam maiores enim asperiores! Deserunt ipsam odio totam illo labore? Fuga, magni. Exercitationem minima ipsam dolores porro aperiam facere?</p>
                                <button className='mt-4 px-6 py-3 rounded-md bg-green-700 text-white font-bold'>Read More</button>
                            </div>
                        </li>
                        <li className='w-96 p-5'>
                            <div className='border rounded-lg p-5'>
                                <img className='h-50 w-full object-cover rounded-md' src={img} alt='' />
                                <h2 className='mt-2 text-2xl font-bold text-gray-700'>Some big heading</h2>
                                <p className='mt-2 text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis temporibus neque magnam maiores enim asperiores! Deserunt ipsam odio totam illo labore? Fuga, magni. Exercitationem minima ipsam dolores porro aperiam facere?</p>
                                <button className='mt-4 px-6 py-3 rounded-md bg-green-700 text-white font-bold'>Read More</button>
                            </div>
                        </li>
                        <li className='w-96 p-5'>
                            <div className='border rounded-lg p-5'>
                                <img className='h-50 w-full object-cover rounded-md' src={img} alt='' />
                                <h2 className='mt-2 text-2xl font-bold text-gray-700'>Some big heading</h2>
                                <p className='mt-2 text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis temporibus neque magnam maiores enim asperiores! Deserunt ipsam odio totam illo labore? Fuga, magni. Exercitationem minima ipsam dolores porro aperiam facere?</p>
                                <button className='mt-4 px-6 py-3 rounded-md bg-green-700 text-white font-bold'>Read More</button>
                            </div>
                        </li>
                        <li className='w-96 p-5'>
                            <div className='border rounded-lg p-5'>
                                <img className='h-50 w-full object-cover rounded-md' src={img} alt='' />
                                <h2 className='mt-2 text-2xl font-bold text-gray-700'>Some big heading</h2>
                                <p className='mt-2 text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis temporibus neque magnam maiores enim asperiores! Deserunt ipsam odio totam illo labore? Fuga, magni. Exercitationem minima ipsam dolores porro aperiam facere?</p>
                                <button className='mt-4 px-6 py-3 rounded-md bg-green-700 text-white font-bold'>Read More</button>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='w-2/12 flex items-center'>
                    <div className='w-full'>
                        <button onClick={next} className='p-3 rounded-full bg-white border-gray-100 shadow-lg ml-5'>
                            <HiArrowNarrowRight />
                        </button>
                    </div>
                </div>
            </div> */}
            <div>
                <h2>Swipe To Slide</h2>
                <Slider {...settings}>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div>
                    <div>
                        <h3>7</h3>
                    </div>
                    <div>
                        <h3>8</h3>
                    </div>
                    <div>
                        <h3>9</h3>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default CardCarousel;