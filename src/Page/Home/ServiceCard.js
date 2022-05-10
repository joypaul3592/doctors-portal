import React from 'react';

const ServiceCard = ({ item }) => {
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={item.img} className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{item.name}</h2>
                <p>{item.dec}</p>
            </div>
        </div>
    );
};

export default ServiceCard;