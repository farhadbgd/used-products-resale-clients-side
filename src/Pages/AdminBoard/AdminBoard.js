import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import Loading from '../../Components/Loading/Loading';
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal';
import ConfirmationModalBuyer from '../ConfirmationModal/ConfirmationModalBuyer';

const AdminBoard = () => {
    const [deletingSeller, setDeletingSeller] = useState(null);
    const [deletingBuyer, setdeletingBuyer] = useState(null);

    const closeModal = () => {
        setDeletingSeller(null);
    }
    const closeModalBuyer = () => {
        setdeletingBuyer(null);
    }


    const { data: books = [], isLoading, refetch } = useQuery({
        queryKey: ['books'],
        queryFn: async () => {
            const res = await fetch('https://b612-used-products-resale-server-side-farhadbgd.vercel.app/books');
            const data = await res.json();

            return data;
        }
    });
    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings'],
        queryFn: async () => {
            const res = await fetch('https://b612-used-products-resale-server-side-farhadbgd.vercel.app/bookings');
            const data = await res.json();

            return data;
        }
    });
    const handleDeleteSeller = book => {

        fetch(`https://b612-used-products-resale-server-side-farhadbgd.vercel.app/books/${book._id}`, {
            method: 'DELETE',
            // headers: {
            //     authorization: `bearer ${localStorage.getItem('accessToken')}`
            // }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`Seller ${book.name} deleted successfully`)
                }
            })
    }
    const handleDeleteBuyer = book => {

        fetch(`https://b612-used-products-resale-server-side-farhadbgd.vercel.app/bookings/${book._id}`, {
            method: 'DELETE',
            // headers: {
            //     authorization: `bearer ${localStorage.getItem('accessToken')}`
            // }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`Buyer ${book.name} deleted successfully`)
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <>
            <div >

                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Seller Name</th>
                                <th>Catergory</th>
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
                                        {/* <td>{user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>}</td> */}

                                        <td>
                                            <label onClick={() => setDeletingSeller(book)} htmlFor="confirmation-modal" className='btn btn-xs btn-danger'>Delete</label>
                                        </td>
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

                                        <td>
                                            <label onClick={() => setdeletingBuyer(booking)} htmlFor="ConfirmationModalBuyer" className='btn btn-xs btn-danger'>Delete</label>
                                        </td>

                                    </tr>

                                )

                            }

                        </tbody>
                    </table>
                </div>
            </div>
            {
                deletingSeller && <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deletingSeller.name}. It cannot be undone.`}
                    successAction={handleDeleteSeller}
                    successButtonName="Delete"
                    modalData={deletingSeller}
                    closeModal={closeModal}
                >
                </ConfirmationModal>
            }
            {
                deletingBuyer && <ConfirmationModalBuyer
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deletingBuyer.buyerName}. It cannot be undone.`}
                    successAction={handleDeleteBuyer}
                    successButtonName="Delete"
                    modalData={deletingBuyer}
                    closeModal={closeModalBuyer}
                >
                </ConfirmationModalBuyer>
            }
        </>
    );
};

export default AdminBoard;