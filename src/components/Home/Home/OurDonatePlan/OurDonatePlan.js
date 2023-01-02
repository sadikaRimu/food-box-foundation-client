import React from 'react';
import food from '../../../../assets/icons/food.png';
import shelter from '../../../../assets/icons/shelter.png';
import education from '../../../../assets/icons/education.png';

const OurDonatePlan = () => {
    return (
        <div className='mt-8'>
            <h2 className='text-3xl font-bold text-center my-4'>Our Donate Plan</h2>
            <p className='text-center'>Lorem ipsum dolor sit amet, usu cu esse possit referrentur, at eam falli deterruisset. No duo populo animal noluisse, enim</p>
            <div className='grid gap-4 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-8'>

                <div className="card w-96 bg-rose-100 shadow-xl">
                    <img className='h-14 w-14 ml-8 mt-6' src={food} alt='' />
                    <div className="card-body">
                        <h2 className="card-title">Food for a children</h2>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                    </div>

                </div>
                <div className="card w-96 bg-orange-200 shadow-xl">
                    <img className='h-14 w-14 ml-8 mt-6' src={shelter} alt='' />
                    <div className="card-body">
                        <h2 className="card-title">Shelter for a children</h2>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                    </div>

                </div>
                <div className="card w-96 bg-cyan-100 shadow-xl">
                    <img className='h-14 w-14 ml-8 mt-6' src={education} alt='' />
                    <div className="card-body">
                        <h2 className="card-title">Education for a child</h2>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default OurDonatePlan;