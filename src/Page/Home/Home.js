import React from 'react';
import Footer from '../Sheard/Footer';
import Navbar from '../Sheard/Navbar';
import Contact from './Contact';
import DrAppoinment from './DrAppoinment';
import Hero from './Hero';
import Info from './Info';
import Service from './Service';
import ServiceHero from './ServiceHero';
import Testimonial from './Testimonial';




const Home = () => {
    return (
        <div >
            <Navbar></Navbar>
            <Hero></Hero>
            <Info></Info>
            <Service></Service>
            <ServiceHero></ServiceHero>
            <DrAppoinment></DrAppoinment>
            <Testimonial></Testimonial>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;