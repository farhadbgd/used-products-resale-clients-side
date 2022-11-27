import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext);
    const email = user?.email;

    const url = `http://localhost:5000/myorders/${email}`;

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                // headers: {
                //     authorization: `bearer ${localStorage.getItem('accessToken')}`
                // }
            });
            const data = await res.json();
            return data;
        }
    })


    return (

        <>
            <div >

                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Book Name</th>
                                <th>Catergory</th>
                                <th>Price</th>
                                <th>Payment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookings?.map((product, i) =>
                                    <tr key={product._id}>
                                        <th>{i + 1}</th>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={product?.img} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{product.title}</div>

                                                </div>
                                            </div>
                                        </td>
                                        <td>{product.category}</td>
                                        <td>{product.price}</td>
                                        {
                                            product.price && !product.paid && <Link
                                                to={`/dashboard/payment/${product._id}`}
                                            >
                                                <td><button className='btn btn-xs btn-danger'>Pay</button></td>
                                            </Link>
                                        }
                                        {
                                            product.price && product.paid && <span className='text-green-500'>Paid</span>
                                        }


                                    </tr>

                                )

                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </>

    );
}

export default MyOrders;

