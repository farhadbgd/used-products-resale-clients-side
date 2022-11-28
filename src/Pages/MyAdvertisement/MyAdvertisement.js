import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';

const MyAdvertisement = () => {

    const { user } = useContext(AuthContext);
    const email = user?.email;

    const url = `https://b612-used-products-resale-server-side-farhadbgd.vercel.app/myproducts/${email}`;

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
            {
                email && <>
                    <div >

                        <h2 className="text-2xl font-bold text-center "><button className="btn btn-primary text-center my-10 w-full">My Advertisment</button></h2>

                        <div className='flex justify-center'>
                            {
                                books?.map(book => <div key={book._id} className="card w-66 mx-10 bg-base-100 shadow-xl m-5">
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