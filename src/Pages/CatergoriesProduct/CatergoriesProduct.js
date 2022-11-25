import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CatergoriesProduct = () => {
    const books = useLoaderData()
    const singleProduct = (id) => {
        fetch(`http://localhost:5000/category/${id}`, {
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
        <div className='flex flex-wrap mx-4 lg:flex-row md:flex-col justify-center'>

            {
                books.map(book => <div key={book._id} className="card w-52 mx-10 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={book.img} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <p >{book.category}</p>
                        <p >{book.title}</p>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <Link to={`/category/${book._id}`} key={book._id} onClick={() => singleProduct(book._id)}><button className="btn btn-primary">Buy Now</button></Link>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default CatergoriesProduct;