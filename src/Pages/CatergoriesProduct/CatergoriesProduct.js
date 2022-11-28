import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';


const CatergoriesProduct = () => {
    const books = useLoaderData()
    const singleProduct = (id) => {
        fetch(`https://b612-used-products-resale-server-side-farhadbgd.vercel.app/category/${id}`, {
            method: 'GET',
            // headers: {
            //     authorization: `bearer ${localStorage.getItem('accessToken')}`
            // }
        })
            .then(res => res.json())
            .then(books => console.log(books))


        // console.log(id);
    };

    return (
        <div className='flex flex-wrap mx-4 mt-4 lg:flex-row md:flex-col justify-center w-full' style={{ backgroundColor: 'orange' }}>

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
                        <p >Category: {book.category}</p>
                        <p >Book Name: {book.title}</p>

                        <div className="card-actions">
                            <Link to={`/category/${book._id}`} key={book._id} onClick={() => singleProduct(book._id)}><button className="btn btn-primary">Click for details</button></Link>
                        </div>
                    </div>

                </div>)
            }

        </div>
    );
};

export default CatergoriesProduct;