import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Donate = () => {
    const [amountFromButton, setAmountFromButton] = useState('');
    const handleAmountValue = event => {
        event.preventDefault();
        setAmountFromButton(event.target.value);
    }
    const handlePayment = event => {
        event.preventDefault();
        const form = event.target;
        console.log(form.amount.value);
    }
    return (
        <div className='text-center'>
            <div className='my-8 text-center'>
                <h2 className='text-2xl font-bold mb-4'>Donate Today</h2>
                <p>Lorem ipsum dolor sit amet, usu cu esse possit referrentur, at eam falli deterruisset. No duo populo animal noluisse, enim</p>
            </div>
            {/* <div onClick={handleAmountValue} className='text-center mx-28 flex justify-center'>
                <button value={100} className='btn m-2 h-20 w-20 border border-blue-500 rounded'>100 INR</button>
                <button value={200} className='btn m-2 h-20 w-20 border border-blue-500 rounded'>200 INR</button>
                <button value={500} className='btn m-2 h-20 w-20 border border-blue-500 rounded'>500 INR</button>
                <button value={1000} className='btn m-2 h-20 w-20 border border-blue-500 rounded'>1000 INR</button>
                <button value={2000} className='btn m-2 h-20 w-20 border border-blue-500 rounded'>2000 INR</button>
            </div> */}
            <form onSubmit={handlePayment} className='text-center mt-8'>
                <input name='amount' type="text" placeholder="Enter Donate amount Here" className="input input-bordered w-full max-w-xs" /><br />
                <button type='submit' className='btn btn-primary mt-4'>Donate</button>
            </form>
            <div>
                <h2 className='text-3xl'>Payment for </h2>
                <p className='text-xl'>Please pay <strong>$</strong>
                    for you  at </p>
                <div className='w-96 my-12'>
                    {/* <Elements stripe={stripePromise}>
                        <CheckoutForm
                            booking={booking}
                        />
                    </Elements> */}
                </div>
            </div>
        </div>
    );
};

export default Donate;