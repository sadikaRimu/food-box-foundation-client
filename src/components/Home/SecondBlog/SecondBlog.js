import React from 'react';
import { Link } from 'react-router-dom';
import blogImg from '../../../assets/images/donation6.jpg';

const SecondBlog = () => {
    return (
        <div className='my-14'>
            <h2 className='text-4xl font-bold mb-4 text-center'>Recent Event</h2>
            <div className="hero bg-slate-100 rounded">
                <div className="hero-content flex-col lg:flex-row p-8">
                    <img src={blogImg} alt='' className="rounded-lg shadow-2xl w-96 h-96" />
                    <div>
                        <h1 className="text-3xl font-bold">No More Homeless,
                            No More Hunger</h1>
                        <p className="py-6">Lorem ipsum dolor sit amet, usu cu esse possit referrentur, at eam falli deterruisset. No duo populo animal noluisse, enim</p>
                        <p className='pb-4'>Lorem ipsum dolor sit amet, usu cu esse possit referrentur, at eam falli deterruisset.</p>
                        <Link to='/donate'><button className="btn btn-primary">Donate Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecondBlog;