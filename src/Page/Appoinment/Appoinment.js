import React, { useState } from 'react';
import AppoinmentHero from './AppoinmentHero';
import AvailableAppoinment from './AvailableAppoinment';

const Appoinment = () => {

    const [date, setDate] = useState(new Date());


    return (
        <div>

            <AppoinmentHero date={date} setDate={setDate}></AppoinmentHero>
            <AvailableAppoinment date={date} setDate={setDate}></AvailableAppoinment>

        </div>
    );
};

export default Appoinment;