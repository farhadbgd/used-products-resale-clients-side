import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const email = user?.email;

    const url = `http://localhost:5000/myproducts/${email}`;

    const { data: books = [] } = useQuery({
        queryKey: ['books', user?.email],
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
            <div className='flex my-48'>
                {/* <div className='w-1/3'>
                    <h2 className="text-2xl font-bold text-center my-10"><Link onClick={() => myProducts(email)}><button className="btn btn-primary text-center my-10">My Products</button></Link></h2>
                </div> */}
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

                                        {/* <td>{user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>}</td> */}
                                        <td><button className='btn btn-xs btn-danger'>Delete</button></td>
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
