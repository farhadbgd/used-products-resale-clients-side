import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Contexts/AuthProvider';

const BookingModal = ({ book }) => {

    const { user } = useContext(AuthContext);

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const category = form.category.value;
        const title = form.title.value;
        const email = form.email.value;
        const resalePrice = form.resalePrice.value;
        const phone = form.phone.value;
        const img = form.img.value;

        const booking = {

            category,
            buyerName: name,
            title,
            email,
            phone,
            price: resalePrice,
            img
        }

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data?.acknowledged) {

                    toast.success('Booking confirmed');

                }
                else {
                    toast.error(data.message);
                }
            })


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
                            <input name="category" type="text" defaultValue={book.category} placeholder="Catergory" className="input w-full input-bordered" required />
                            <input name="title" type="text" defaultValue={book.title} placeholder="Book Name" className="input w-full input-bordered" required />
                            <input name="img" type="text" defaultValue={book.img} placeholder="Book Name" className="input w-full input-bordered" required />
                            <input name="resalePrice" type="text" defaultValue={book.resalePrice} placeholder="Price" className="input w-full input-bordered" required />
                            <input name="name" type="text" defaultValue={user?.displayName} placeholder="Your Name" className="input w-full input-bordered" required />
                            <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" required />
                            <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" required />
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

