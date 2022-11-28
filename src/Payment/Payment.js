import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useLoaderData, useNavigation } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
import Loading from '../Components/Loading/Loading';

const stripePromise = loadStripe('pk_test_51M8t4dBPikRh9K5xcY6NewkXcMiIH4VwCb8hveU5B3cqu0A8iFlT639ZFHnDsDwdsjr0a1Wn6gq6xmcrNlfoyIs9005wFera59');

const Payment = () => {
    const booking = useLoaderData();
    const navigation = useNavigation();
    if (navigation.state === "loading") {
        return <Loading></Loading>
    }
    const { category, title, price } = booking;
    console.log(booking);
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Book Name</th>
                            <th>Category</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <th>1</th>
                            <td>{title}</td>
                            <td>{category}</td>
                            <td>{price}</td>

                        </tr>


                    </tbody>
                </table>
            </div>

            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={booking}
                    />
                </Elements>
            </div>
        </div>

    );
};

export default Payment;









