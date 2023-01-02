import React from 'react';
import img1 from '../../assets/images/donation9.jpg';

const Gallery = () => {
    return (
        <div>
            <h2 className='text-3xl font-bold text-center mb-4'>Gallery Photos</h2>
            <div className='grid gap-4 grid-cols-1 lg:grid-cols-3 md:grid-cols-2'>
                <div className="w-96 shadow-xl">
                    <div className="">
                        <img className='rounded' src={img1} alt='' />
                        <div className='text-center'>
                            <h2 className="text-lg font-bold">Food for a children</h2>
                            <p className='text-muted'>19th November, 2022</p>
                        </div>
                    </div>
                </div>
                <div className="w-96 shadow-xl">
                    <div className="">
                        <img className='rounded' src={img1} alt='' />
                        <div className='text-center'>
                            <h2 className="text-lg font-bold">Food for a children</h2>
                            <p className='text-muted'>19th November, 2022</p>
                        </div>
                    </div>
                </div>
                <div className="w-96 shadow-xl">
                    <div className="">
                        <img className='rounded' src={img1} alt='' />
                        <div className='text-center'>
                            <h2 className="text-lg font-bold">Food for a children</h2>
                            <p className='text-muted'>19th November, 2022</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;