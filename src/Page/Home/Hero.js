import React from 'react';
import heroBanar from '../../assets/images/chair.png'
import bgimg from '../../assets/images/bg.png'
import Button from '../Sheard/Button';

const Hero = () => {
    return (
        <div className="hero min-h-screen w-full" style={{ backgroundImage: `url(${bgimg})` }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img className='w-[594px] h-[355px]' src={heroBanar} />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <Button>Get Started</Button>
                </div>
            </div>
        </div>
    );
};

export default Hero;