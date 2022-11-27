import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useLoaderData, useNavigation } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51M8t4dBPikRh9K5xcY6NewkXcMiIH4VwCb8hveU5B3cqu0A8iFlT639ZFHnDsDwdsjr0a1Wn6gq6xmcrNlfoyIs9005wFera59');

const Payment = () => {
    const booking = useLoaderData();
    const navigation = useNavigation();
    // if (navigation.state === "loading") {
    //     return <Loading></Loading>
    // }
    const { category, title, price } = booking;
    console.log(booking);
    return (
        <div>
            <h3 className="text-3xl">Payment for {title}</h3>
            <p className="text-xl">Please pay <strong>${price}</strong> for book {title} catagory {category}</p>
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










// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
// import React from 'react';
// import { useLoaderData, useNavigation } from 'react-router-dom';
// import Loading from '../../Shared/Loading/Loading';
// import CheckoutForm from './CheckoutForm';

// const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

// const Payment = () => {
//     const booking = useLoaderData();
//     // const navigation = useNavigation();
//     const { treatment, price, appointmentDate, slot } = booking;
//     // if(navigation.state === "loading"){
//     //     return <Loading></Loading>
//     // }
//     return (
//         <div>
//             <h3 className="text-3xl">Payment for {treatment}</h3>
//             <p className="text-xl">Please pay <strong>${price}</strong> for your appointment on {appointmentDate} at {slot}</p>
//             <div className='w-96 my-12'>
//                 <Elements stripe={stripePromise}>
//                     <CheckoutForm
//                         booking={booking}
//                     />
//                 </Elements>
//             </div>
//         </div>
//     );
// };

// export default Payment;