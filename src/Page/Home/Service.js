import React from 'react';
import ServiceCard from './ServiceCard';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'





const Service = () => {

    const serviceItem = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            dec: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: `${fluoride}`
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            dec: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: `${cavity}`
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            dec: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: `${whitening}`
        }

    ];

    return (
        <section className='my-16 px-12'>
            <h1 className='text-center font-sans font-bold text-xl text-primary'>OUR SERVICES</h1>
            <p className='text-center text-4xl font-sans mb-10'>Services We Provide</p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {
                    serviceItem.map(item => <ServiceCard key={item._id} item={item}></ServiceCard>)
                }
            </div>

        </section>
    );
};

export default Service;