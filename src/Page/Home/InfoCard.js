import React from 'react';

const InfoCard = ({ img, bg, titile, dec }) => {
    return (
        <div className={`card lg:card-side bg-base-100 shadow-xl ${bg}`}>
            <figure><img src={img} className='lg:ml-12 ml-0 mt-5 lg:mt-0 lg:mr-2' alt="Album" /></figure>
            <div className="card-body">
                <h2 className=" text-white font-sans font-bold text-xl">{titile}</h2>
                <p className='text-white font-sans text-base'>{dec}</p>
            </div>
        </div>
    );
};

export default InfoCard;