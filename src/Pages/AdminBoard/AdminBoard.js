import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AdminBoard = () => {
    const { data: books = [] } = useQuery({
        queryKey: ['books'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/books');
            const data = await res.json();

            return data;
        }
    });
    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/bookings');
            const data = await res.json();

            return data;
        }
    });
    return (
        <>
            <div className='flex my-24'>

                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Seller Name</th>
                                <th>Catergory</th>
                                <th>Location</th>
                                <th>Delete</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                books?.map((book, i) =>
                                    <tr key={book._id}>
                                        <th>{i + 1}</th>

                                        <td>{book.name}</td>
                                        <td>{book.category}</td>
                                        <td>{book.location}</td>

                                        {/* <td>{user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>}</td> */}
                                        <td><button className='btn btn-xs btn-danger'>Delete</button></td>

                                    </tr>

                                )

                            }

                        </tbody>
                    </table>
                </div>
            </div>
            <div className='flex my-24'>

                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Buyer Name</th>
                                <th>Catergory</th>

                                <th>Delete</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookings?.map((booking, i) =>
                                    <tr key={booking._id}>
                                        <th>{i + 1}</th>

                                        <td>{booking.buyerName}</td>
                                        <td>{booking.category}</td>


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

export default AdminBoard;