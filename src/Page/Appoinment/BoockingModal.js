import { format } from 'date-fns/esm';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const BoockingModal = ({ treatment, date, setTreatment }) => {

    const { _id, name, slots } = treatment;
    const [user] = useAuthState(auth)
    const formattedDate = format(date, 'PP');


    const handelBoocking = (event) => {
        event.preventDefault();

        const slot = event.target.slot.value;

        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            slot: slot,
            patient: user.email,
            patientName: user.displayName,
            phone: event.target.phone.value
        }

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success(`Appoinment is set, ${formattedDate} at ${slot}`)
                } else {
                    toast.error(data.error)
                }
                setTreatment(null)
            })

    }



    return (
        <div>
            <input type="checkbox" id="boocking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="boocking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">Boocking For: {name}</h3>
                    <form onSubmit={handelBoocking} className='grid grid-cols-1 gap-5 justify-items-center mt-3'>
                        <input type="text" value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" disabled />
                        <select name='slot' className="select select-bordered w-full max-w-xs">

                            {
                                slots.map((slot, index) => <option key={index} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='name' disabled type="text" value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                        <input name='phone' type="number" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input name='email' disabled type="email" value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value='Submit' className=" btn btn-secondary btn-sm input input-bordered w-full max-w-xs text-white" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BoockingModal;