import React from 'react';
import appointment from '../../assets/images/appointment.png'
import Button from '../Sheard/Button';


const Contact = () => {
    return (
        <div className='py-20 my-28 w-full' style={{ backgroundImage: `url(${appointment})` }}>
            <h4 className='text-center text-primary text-xl font-sans font-bold'>Contact Us</h4>
            <h2 className='text-center text-white font-sans text-4xl '>Stay connected with us</h2>


            <div className='w-1/2 mx-auto my-8'>
                <input type="email" className='w-full rounded placeholder:text-sm py-1 pl-2 mb-4' placeholder='Enter Your Email' />
                <input type="text" className='w-full rounded placeholder:text-sm py-1 pl-2 mb-4' placeholder='Subject' />
                <textarea class="textarea textarea-bordered w-full" placeholder="Your Message"></textarea>
                <div className='flex justify-center mt-6'>
                    <Button >Submit</Button>
                </div>
            </div>
        </div>
    );
};

export default Contact;