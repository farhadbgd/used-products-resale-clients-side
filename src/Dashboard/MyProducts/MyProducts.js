import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import Loading from '../../Components/Loading/Loading';
import { AuthContext } from '../../Contexts/AuthProvider';
import ConfirmationModalBuyer from '../../Pages/ConfirmationModal/ConfirmationModalBuyer';

const MyProducts = () => {
    const { user, isLoading } = useContext(AuthContext);
    const email = user?.email;

    const url = `https://b612-used-products-resale-server-side-farhadbgd.vercel.app/myproducts/${email}`;

    const { data: books = [], refetch } = useQuery({
        queryKey: ['books', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                // headers: {
                //     authorization: `bearer ${localStorage.getItem('accessToken')}`
                // }
            });
            const data = await res.json();
            refetch();
            return data;
        }
    })
    const deleteProducts = id => {

        fetch(`https://b612-used-products-resale-server-side-farhadbgd.vercel.app/books/${id}`, {
            method: 'DELETE',
            // headers: {
            //     authorization: `bearer ${localStorage.getItem('accessToken')}`
            // }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`Products deleted successfully`)
                }
            })
    }
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <>
            <div className='flex my-48'>

                <div className="overflow-x-auto w-full">
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
                                books?.map((product, i) =>
                                    <tr key={product._id}>
                                        <th>{i + 1}</th>
                                        <td>{product.category}</td>
                                        <td>{product.title}</td>
                                        <td>{product.location}</td>
                                        <td>{product.resalePrice}</td>


                                        <td><button onClick={() => deleteProducts(product._id)} className='btn btn-xs btn-danger'>Delete</button></td>
                                    </tr>

                                )

                            }

                        </tbody>
                    </table>
                </div>
            </div>

        </>
    );
};

export default MyProducts;
