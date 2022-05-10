import React from 'react';
import heroBanar from '../../assets/images/chair.png'
import bgimg from '../../assets/images/bg.png'

const Hero = () => {
    return (
        <div class="hero min-h-screen" style={{ backgroundImage: `url(${bgimg})` }}>
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img className='w-[594px] h-[355px]' src={heroBanar} />
                <div>
                    <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p class="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <button class="btn bg-gradient-to-r from-primary to-secondary text-white border-0">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;