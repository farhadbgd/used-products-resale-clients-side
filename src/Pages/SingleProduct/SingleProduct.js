import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';

const SingleProduct = () => {
    const book = useLoaderData()
    const [booking, setBooking] = useState(null);
    const tostHandler = () => {
        toast.success('I have come back')
    }

    return (
        <div>

            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={book.img} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Category Name: {book.category}</h2>
                    <h2 className="card-title">Book Name: {book.title}</h2>
                    <h3 className="card-title">Resale Price: USD {book.resalePrice}</h3>
                    <h2 className="card-title">Original Price: USD {book.originalPrice}</h2>
                    <h2 className="card-title">Your of Used: {book.uses} Year</h2>
                    <div className="form-control">
                        <label className="cursor-pointer label">
                            <h2 className="card-title"><span className="card-title">Seller Name: {book.name}</span><input type="checkbox" checked className="checkbox checkbox-info" />{book.status}</h2>
                        </label>
                    </div>

                    <div className="card-actions  w-full bottom-12">
                        <BookingModal
                            book={book}
                            booking={booking}
                            setBooking={setBooking}></BookingModal>

                        {/* <button onClick={tostHandler} htmlFor="my-modal" className="btn btn-primary">Listen</button> */}


                    </div>
                </div>

            </div>
            {/* <div>
                {
                    booking &&
                    <BookingModal

                        booking={booking}
                        setBooking={setBooking}

                    ></BookingModal>
                }
            </div> */}
        </div>
    );
};

export default SingleProduct;
