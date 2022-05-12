import React from 'react';
import Button from '../Sheard/Button';

const AppoinmentService = ({ service, treatment, setTreatment }) => {

    const { name, slots } = service;

    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className="card-title text-secondary mx-auto">{name}</h2>
                {
                    slots.length ? <span>{slots[0]}</span> : <span className=' text-red-500'>Try Another Day</span>
                }
                <p>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} Available</p>
                <div class="card-actions justify-center">

                    <label for="boocking-modal" disabled={slots.length === 0}
                        onClick={() => setTreatment(service)}
                        className='btn btn-sm  bg-gradient-to-r from-secondary to-primary  text-white border-0'>Book Appointment</label>

                </div>
            </div>
        </div>
    );
};

export default AppoinmentService;