import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import emailPic from '../../../assets/images/sendMail.jpg';
import emailPic2 from '../../../assets/images/emailPic.png';

const EmailSection = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_2vj8pvl', 'template_ifctkgy', form.current, 'EhYtvAW6SlN0rnwPg')
            .then((result) => {
                console.log(result.text);
                alert('email sent successfully');
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div>
            <h2 className='text-3xl font-bold text-center mb-4'>Send a Mail to us</h2>

            <div className='hero-content flex-col lg:flex-row bg-slate-100 rounded'>
                <div className='h-80 items-end'>
                    <form ref={form} onSubmit={sendEmail} className='flex flex-col justify-center items-center w-1/2'>
                        <div className='form-control'>
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input className='input input-bordered' placeholder='your name' type="text" name="user_name" />
                        </div>
                        <div className='form-control'>
                            <label>Email</label>
                            <input className='input input-bordered' placeholder='your Email' type="email" name="user_email" />
                        </div>
                        <div className='form-control'>
                            <label>Message</label>
                            <textarea className='input input-bordered' placeholder='write message' name="message" />
                        </div>
                        <input className='btn btn-primary mt-4' type="submit" value="Send" />
                    </form>
                </div>
                <div>
                    <img className='w-40 h-40 hidden lg:block' src={emailPic2} alt='' />
                </div>
            </div>

        </div>
    );
};

export default EmailSection;