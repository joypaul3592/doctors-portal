import React from 'react';
import Contact from './Contact';
import DrAppoinment from './DrAppoinment';
import Hero from './Hero';
import Info from './Info';
import Service from './Service';
import ServiceHero from './ServiceHero';
import Testimonial from './Testimonial';




const Home = () => {
    return (
        <div className=' px-12 '>
            <Hero></Hero>
            <Info></Info>
            <Service></Service>
            <ServiceHero></ServiceHero>
            <DrAppoinment></DrAppoinment>
            <Testimonial></Testimonial>
            <Contact></Contact>
        </div>
    );
};

export default Home;