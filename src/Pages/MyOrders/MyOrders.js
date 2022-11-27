import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext)
    const email = user?.email;
    const [products, setProducts] = useState()
    console.log(products)

    const myProducts = (email) => {

        fetch(`http://localhost:5000/myorders/${email}`, {
            method: 'GET',
            // headers: {
            //     authorization: `bearer ${localStorage.getItem('accessToken')}`
            // }
        })
            .then(res => res.json())
            .then(products => {
                if (products.length > 0) {
                    setProducts(products)

                }
                else {
                    toast.success('No products available')
                }

            })

    };

    return (

        <>
            <div className='flex my-24'>
                <div className='w-1/3'>
                    <h2 className="text-2xl font-bold text-center my-10"><Link onClick={() => myProducts(email)}><button className="btn btn-primary text-center my-10">My Orders</button></Link></h2>
                </div>
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
                                products?.map((product, i) =>
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

                                        {/* <td>{user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>}</td> */}
                                        <td><button className='btn btn-xs btn-danger'>Pay</button></td>

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

