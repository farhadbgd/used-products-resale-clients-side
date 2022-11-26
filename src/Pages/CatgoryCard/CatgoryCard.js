import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import CatergoriesProduct from '../CatergoriesProduct/CatergoriesProduct';
import kids from '../../Assets/kids.avif'

const CatgoryCard = () => {

    const { data: books = [] } = useQuery({
        queryKey: ['books'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/category');
            const data = await res.json();

            return data;
        }
    });

    const categoryHandler = (category) => {
        fetch(`http://localhost:5000/categories/${category}`, {
            method: 'GET',
            // headers: {
            //     authorization: `bearer ${localStorage.getItem('accessToken')}`
            // }
        })
            .then(res => res.json())
            .then(books => console.log(books))

        //     {
        //     // console.log(books);
        //     books.map(book => < CatergoriesProduct book={book} ></CatergoriesProduct >)

        //     // < CatergoriesProduct books={books} ></CatergoriesProduct >
        //     // if (data.modifiedCount > 0) {
        //     //     toast.success('Make admin successful.')
        //     //     refetch();
        //     // }
        // })
        // console.log(category);
    };


    return (
        <div className='flex justify-center my-5'>
            {
                books.map(book =>
                    // console.log(book.category)

                    <Link to={`/categories/${book.category}`} key={book._id} onClick={() => categoryHandler(book.category)}>
                        < div className='flex mx-6'  >
                            <div className="card w-96 bg-base-100 shadow-xl image-full ">
                                <figure><img src={kids} alt="Shoes" /></figure>
                                <div className="card-body">

                                    <p>If you don’t like to read, you haven’t found the right book.<br></br>

                                        <span>J.K. Rowling</span></p>
                                    <div className="card-actions ">
                                        <button className="btn btn-base-content w-full">FIND BOOKS ON {book.category}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>

                )
            }

        </div >
    );
};

export default CatgoryCard;

