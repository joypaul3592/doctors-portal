import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'




const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 py-16 px-12'>
            <InfoCard img={clock} bgClass={'bg-gradient-to-r from-secondary to-primary'} titile={'Opening Hours'} dec={'Lorem Ipsum is simply dummy text of the pri'}></InfoCard>

            <InfoCard img={marker} bgClass={'bg-neutral'} titile={'Visit our location'} dec={'Brooklyn, NY 10036, United States'} ></InfoCard>

            <InfoCard img={phone} bgClass={'bg-gradient-to-r from-secondary to-primary'} titile={'Contact us now'} dec={'+000 123 456789'} ></InfoCard>
        </div>
    );
};

export default Info;