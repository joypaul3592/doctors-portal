import React from 'react';
import DrAppoinment from './DrAppoinment';
import Hero from './Hero';
import Info from './Info';
import Service from './Service';
import ServiceHero from './ServiceHero';




const Home = () => {
    return (
        <div className=' px-12 '>
            <Hero></Hero>
            <Info></Info>
            <Service></Service>
            <ServiceHero></ServiceHero>
            <DrAppoinment></DrAppoinment>
        </div>
    );
};

export default Home;