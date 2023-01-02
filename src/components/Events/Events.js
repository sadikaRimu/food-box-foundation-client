import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../assets/images/donation11.jpg';
import img2 from '../../assets/images/donation13.jpg';

const Events = () => {
    return (
        <div>
            <h2 className='text-3xl font-bold text-center mb-4'>All Events</h2>
            <div className='grid gap-4 grid-cols-1 lg:grid-cols-3 md:grid-cols-2'>
                <div className="card w-96 bg-slate-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">No More Homeless,
                            No More Hunger</h2>
                        <p><strong>Author: </strong>Mandheer</p>
                        <p>Lorem ipsum dolor sit amet....</p>
                        <div className="card-actions">
                            <Link to='/blogDetails'><button className="btn btn-primary">View Details</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-slate-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img2} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Give Someone’s Life
                            By Giving Of Yours</h2>
                        <p><strong>Author: </strong>Mandheer</p>
                        <p>Lorem ipsum dolor sit amet....</p>
                        <div className="card-actions">
                            <Link to='/blogDetails'><button className="btn btn-primary">View Details</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-slate-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">No More Homeless,
                            No More Hunger</h2>
                        <p><strong>Author: </strong>Mandheer</p>
                        <p>Lorem ipsum dolor sit amet....</p>
                        <div className="card-actions">
                            <Link to='/blogDetails'><button className="btn btn-primary">View Details</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-slate-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img2} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Give Someone’s Life
                            By Giving Of Yours</h2>
                        <p><strong>Author: </strong>Mandheer</p>
                        <p>Lorem ipsum dolor sit amet....</p>
                        <div className="card-actions">
                            <Link to='/blogDetails'><button className="btn btn-primary">View Details</button></Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Events;