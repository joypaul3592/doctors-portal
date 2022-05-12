import { format } from 'date-fns/esm';
import React from 'react';

const BoockingModal = ({ treatment, date, setTreatment }) => {

    const { name, slots } = treatment;




    const handelBoocking = (event) => {
        event.preventDefault();

        const slot = event.target.slot.value;
        const name = event.target.name.value;
        const phone = event.target.phone.value;
        const email = event.target.email.value;
        console.log(slot, name, phone, email);
        setTreatment(null)
    }



    return (
        <div>
            <input type="checkbox" id="boocking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="boocking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg">Boocking For: {name}</h3>
                    <form onSubmit={handelBoocking} className='grid grid-cols-1 gap-5 justify-items-center mt-3'>
                        <input type="text" value={format(date, 'PP')} class="input input-bordered w-full max-w-xs" disabled />
                        <select name='slot' class="select select-bordered w-full max-w-xs">

                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder="Full Name" class="input input-bordered w-full max-w-xs" />
                        <input name='phone' type="number" placeholder="Phone Number" class="input input-bordered w-full max-w-xs" />
                        <input name='email' type="email" placeholder="Your Email" class="input input-bordered w-full max-w-xs" />
                        <input type="submit" value='Submit' class=" btn btn-secondary btn-sm input input-bordered w-full max-w-xs text-white" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BoockingModal;