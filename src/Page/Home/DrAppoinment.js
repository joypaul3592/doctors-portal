import React from 'react';
import doctro from '../../assets/images/doctor-small.png'
import appointment from '../../assets/images/appointment.png'
import Button from '../Sheard/Button';


const DrAppoinment = () => {
    return (
        <div className=' my-28 w-full' style={{ backgroundImage: `url(${appointment})` }}>
            <div className=" flex flex-col lg:flex-row items-center">
                <div className='flex-1'>
                    <img src={doctro} className="mt-[-100px] " />
                </div>
                <div className='flex-1 lg:pr-5 lg:mx-0 lg:mb-0 mx-5 mb-5'>
                    <h3 className="text-xl text-primary">Appoinment!</h3>
                    <h2 className='text-white text-4xl font-sans font-semibold'>Make an appointment Today</h2>
                    <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <Button>Get Started</Button>
                </div>
            </div>
        </div>
    );
};

export default DrAppoinment;