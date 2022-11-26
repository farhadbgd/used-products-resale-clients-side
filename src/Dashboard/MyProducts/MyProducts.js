import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const MyProducts = () => {
    const { user } = useContext(AuthContext)
    const email = user?.email;
    const [products, setProducts] = useState()
    console.log(products)

    const myProducts = (email) => {

        fetch(`http://localhost:5000/myproducts/${email}`, {
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
    // const { data: users = [], refetch } = useQuery({
    //     queryKey: ['users'],
    //     queryFn: async () => {
    //         const res = await fetch('http://localhost:5000/myproducts');
    //         const data = await res.json();
    //         return data;
    //     }
    // });

    // const handleMakeAdmin = id => {
    //     fetch(`https://doctors-portal-server-rust.vercel.app/users/admin/${id}`, {
    //         method: 'PUT',
    //         headers: {
    //             authorization: `bearer ${localStorage.getItem('accessToken')}`
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.modifiedCount > 0) {
    //                 toast.success('Make admin successful.')
    //                 // refetch();
    //             }
    //         })
    // }

    return (
        <div>
            <h2 className="text-2xl font-bold text-center my-10"><Link onClick={() => myProducts(email)}><button className="btn btn-primary text-center my-10">My Products</button></Link></h2>

            <button></button>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Catergory</th>
                            <th>Book Name</th>
                            <th>location</th>
                            <th>Price</th>

                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products?.map((product, i) => <tr key={product._id}>
                                <th>{i + 1}</th>
                                <td>{product.category}</td>
                                <td>{product.title}</td>
                                <td>{product.location}</td>
                                <td>{product.resalePrice}</td>

                                {/* <td>{user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>}</td> */}
                                <td><button className='btn btn-xs btn-danger'>Delete</button></td>
                            </tr>

                            )

                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;
