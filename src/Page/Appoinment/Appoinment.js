import { format } from 'date-fns/esm';
import React, { useState } from 'react';
import Navbar from '../Sheard/Navbar';
import AppoinmentHero from './AppoinmentHero';

const Appoinment = () => {

    const [date, setDate] = useState(new Date());


    return (
        <div>
            <Navbar></Navbar>
            <AppoinmentHero date={date} setDate={setDate}></AppoinmentHero>

            <h1>Selected Date : {format(date, 'PP')}</h1>
        </div>
    );
};

export default Appoinment;