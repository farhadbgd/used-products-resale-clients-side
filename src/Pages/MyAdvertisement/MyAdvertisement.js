import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const MyAdvertisement = () => {
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

        <>
            {
                email && <>
                    <div >

                        <h2 className="text-2xl font-bold text-center "><Link onClick={() => myProducts(email)}><button className="btn btn-primary text-center my-10 w-full">My Advertisment</button></Link></h2>

                        <div className='flex justify-center'>
                            {
                                products?.map(book => <div key={book._id} className="card w-66 mx-10 bg-base-100 shadow-xl m-5">
                                    <figure className="px-5 pt-5">
                                        <div className="avatar">
                                            <div className="w-72 rounded">
                                                <img src={book.img} alt='' />
                                            </div>
                                        </div>

                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <p >{book.category}</p>
                                        <p >{book.title}</p>


                                    </div>

                                </div>)
                            }
                        </div>
                    </div>

                </>
            }


        </>
    );
};

export default MyAdvertisement;