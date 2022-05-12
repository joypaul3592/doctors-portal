import React, { useState } from 'react';
import Navbar from '../Sheard/Navbar';
import AppoinmentHero from './AppoinmentHero';
import AvailableAppoinment from './AvailableAppoinment';

const Appoinment = () => {

    const [date, setDate] = useState(new Date());


    return (
        <div>

            <Navbar></Navbar>
            <AppoinmentHero date={date} setDate={setDate}></AppoinmentHero>
            <AvailableAppoinment date={date} setDate={setDate}></AvailableAppoinment>

        </div>
    );
};

export default Appoinment;