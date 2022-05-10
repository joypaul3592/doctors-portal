import React from 'react';
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import TestimonialCard from './TestimonialCard';





const Testimonial = () => {


    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            country: 'California',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: `${people1}`
        },
        {
            _id: 2,
            name: 'Jenson wili',
            country: 'North UTS',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: `${people2}`
        },
        {
            _id: 3,
            name: 'Terison Rumi',
            country: 'Filland',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: `${people3}`
        }

    ]










    return (
        <div
        >
            <h4 className=' text-primary text-xl font-sans font-bold'>Testimonial</h4>
            <h2 className='text-accent font-sans text-4xl '>What Our Patients Says</h2>

            <div className="my-8 grid grid-cols-1 lg:grid-cols-3 gap-5">
                {
                    reviews.map(review => <TestimonialCard key={review._id} review={review}></TestimonialCard>)
                }
            </div>


        </div>
    );
};

export default Testimonial;