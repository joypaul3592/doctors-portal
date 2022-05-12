import { format } from 'date-fns/esm';
import React, { useEffect, useState } from 'react';
import AppoinmentService from './AppoinmentService';
import BoockingModal from './BoockingModal';

const AvailableAppoinment = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null)

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])

    console.log(treatment);

    return (
        <div className='my-10'>
            <h1>{services.length}</h1>
            <h1 className='text-center text-xl text-secondary'>Available Appointments on {format(date, 'PP')}</h1>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 py-16 px-12'>
                {
                    services.map(service => <AppoinmentService
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></AppoinmentService>)
                }
            </div>
            {
                treatment && <BoockingModal treatment={treatment} setTreatment={setTreatment} date={date}></BoockingModal>
            }







        </div>
    );
};

export default AvailableAppoinment;