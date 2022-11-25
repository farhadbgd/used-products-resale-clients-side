import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import PrimaryButton from '../../Components/PrimaryButton/PrimaryButton';
import Spinner from '../../Components/Spinner/Spinner';
import { AuthContext } from '../../Contexts/AuthProvider';
// import { AuthContext } from '../../Contex/AuthProvider';

const AddProduct = () => {
    const [users, setUsers] = useState({})
    const { createUser, updateUserProfile, verifyEmail, setLoading, signInWithGoogle, loading } = useContext(AuthContext);
    // const {
    //     createUser,
    //     updateUserProfile,
    //     verifyEmail,
    //     loading,
    //     setLoading,
    //     signInWithGoogle,
    // } = useContext(AuthContext)

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const handleSubmit = event => {
        event.preventDefault()
        const name = event.target.name.value

        const email = event.target.email.value
        const password = event.target.password.value

        // Image Upload
        const image = event.target.image.files[0]
        const formData = new FormData()
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=13f56295d0e5a9f700a0c1b4a0369216`
        console.log(url)


        fetch(url, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(imageData => {
                const newUser = { ...users };
                newUser[name] = imageData.data.display_url;
                console.log(newUser)
                setUsers(newUser);
                // setUsers(imageData.data.display_url)
            })


            //     {
            //     // Create User
            //     createUser(email, password)
            //         .then(result => {
            //             // setAuthToken(result.user)
            //             updateUserProfile(name, imageData.data.display_url)

            //                 .then(
            //                     verifyEmail().then(() => {
            //                         toast.success(
            //                             'Please check your email for verification link.'
            //                         )
            //                         setLoading(false)
            //                         navigate(from, { replace: true })
            //                     })
            //                 )
            //                 .catch(err => console.log(err))
            //         })

            //         .catch(err => {
            //             console.log(err)
            //             setLoading(false)
            //         })
            // })
            .catch(err => console.log(err))
    }

    const handleGoogleSignin = () => {
        signInWithGoogle().then(result => {
            console.log(result.user)
            // setAuthToken(result.user)
            setLoading(false)
            navigate(from, { replace: true })
        })
    }
    const handleBlur = (e) => {
        const name = e.target.name;
        const nameValue = e.target.value;
        const newUser = { ...users };
        newUser[name] = nameValue;
        console.log(newUser)
        setUsers(newUser);
    }
    return (
        <div className='flex justify-center items-center pt-8'>
            <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
                <div className='mb-8 text-center'>
                    <h1 className='my-3 text-4xl font-bold'>Add Product</h1>
                </div>
                <form
                    onSubmit={handleSubmit}
                    noValidate=''
                    action=''
                    className='space-y-12 ng-untouched ng-pristine ng-valid'
                >
                    <div className='space-y-4'>
                        <div>
                            <label htmlFor='email' className='block mb-2 text-sm'></label>
                            <input
                                onBlur={handleBlur}
                                type='text'
                                name='name'
                                id='name'
                                placeholder='Enter Your Name Here'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900'
                                data-temp-mail-org='0'
                            />
                        </div>
                        <div>
                            <label htmlFor='image' className='block mb-2 text-sm'>
                                Select Image:
                            </label>
                            <input
                                onBlur={handleBlur}
                                required
                                type='file'
                                id='image'
                                name='image'
                                accept='image/*'
                            />
                        </div>
                        <div>
                            <label htmlFor='email' className='block mb-2 text-sm'>
                                Email address
                            </label>
                            <input
                                onBlur={handleBlur}
                                required
                                type='email'
                                name='email'
                                id='email'
                                placeholder='Enter Your Email Here'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900'
                                data-temp-mail-org='0'
                            />
                        </div>
                        <div>
                            <div className='flex justify-between mb-2'>
                                <label htmlFor='password' className='text-sm'>
                                    Password
                                </label>
                            </div>
                            <input
                                required
                                type='password'
                                name='password'
                                id='password'
                                placeholder='*******'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:outline-green-500 text-gray-900'
                            />
                        </div>
                    </div>
                    <div className='space-y-2'>
                        <div>
                            <PrimaryButton
                                type='submit'
                                classes='w-full px-8 py-3 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100'
                            >
                                {loading ? <Spinner /> : 'Submit to add Product'}
                            </PrimaryButton>
                        </div>
                    </div>
                </form>


            </div>
        </div>
    );
};

export default AddProduct;