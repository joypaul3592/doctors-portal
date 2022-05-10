import React from 'react';

const TestimonialCard = ({ review }) => {
    return (
        <div class="card card-compact w-96 bg-base-100 shadow-xl p-5">
            <div className='mb-8'>
                <p>{review.review}</p>
            </div>
            <div className='flex items-center'>
                <img className='w-[75px] h-[75px] mr-5' src={review.img} alt="people" />
                <div>
                    <h1>{review.name}</h1>
                    <h4>{review.country}</h4>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;