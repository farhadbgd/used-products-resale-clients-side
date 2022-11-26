import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Contexts/AuthProvider';

const BookingModal = ({ booking, setBooking, selectedDate, book }) => {
    // treatment is just another name of appointmentOptions with name, slots, _id
    // const { name: treatmentName, slots, price } = booking;
    // const date = format(selectedDate, 'PP');
    const { user } = useContext(AuthContext);

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        // [3, 4, 5].map((value, i) => console.log(value))
        // const booking = {
        //     // appointmentDate: date,
        //     treatment: treatmentName,
        //     patient: name,
        //     slot,
        //     email,
        //     phone,
        //     price
        // }
        console.log(email, phone, slot, name)
        // TODO: send data to the server
        // and once data is saved then close the modal 
        // and display success toast
        // fetch('https://doctors-portal-server-rust.vercel.app/bookings', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(booking)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         if (data.acknowledged) {
        //             setBooking(null);
        //             toast.success('Booking confirmed');
        //             // refetch();
        //         }
        //         else {
        //             toast.error(data.message);
        //         }
        //     })


    }

    return (
        <div>
            <>
                <label htmlFor="booking-modal" className="btn">Book Now</label>
                <input type="checkbox" id="booking-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative">

                        <h3 className="text-lg font-bold">{book.title}</h3>
                        <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>



                            <input name="name" type="text" defaultValue={book.category} placeholder="Your Name" className="input w-full input-bordered" />
                            <input name="name" type="text" defaultValue={book.title} placeholder="Your Name" className="input w-full input-bordered" />
                            <input name="name" type="text" defaultValue={book.resalePrice} placeholder="Your Name" className="input w-full input-bordered" />
                            <input name="name" type="text" defaultValue={user?.displayName} placeholder="Your Name" className="input w-full input-bordered" />
                            <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />
                            <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                            <br />
                            <input htmlFor="booking-modal" className='btn btn-accent w-full' type="submit" value="Submit" />
                            <label htmlFor="booking-modal" className="btn btn-sm  absolute right-2 top-2">Close</label>
                        </form>
                    </div>
                </div>
            </>
        </div>

    );
};

export default BookingModal;

