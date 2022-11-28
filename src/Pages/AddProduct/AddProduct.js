import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Components/Loading/Loading';
import PrimaryButton from '../../Components/PrimaryButton/PrimaryButton';
import Spinner from '../../Components/Spinner/Spinner';
import { AuthContext } from '../../Contexts/AuthProvider';


const AddProduct = () => {
    const navigate = useNavigate()
    const [product, setProduct] = useState({})
    const { user, isLoading } = useContext(AuthContext);
    const handleSubmit = event => {
        event.preventDefault()

        // image upload to imgbb
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
                const newProduct = { ...product };
                newProduct['img'] = imageData.data.display_url;
                setProduct(newProduct);
            })
            .catch(err => console.log(err))

        fetch('https://b612-used-products-resale-server-side-farhadbgd.vercel.app/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product),
        })
            .then(response => response.json())
            .then(data => {
                if (data.acknowledged === true) {
                    toast.success('Your product has been added successfully');
                    navigate('/dashboard/seller')
                }
                event.target.reset();
            })
    }
    const handleBlur = (e) => {
        const name = e.target.name;
        const nameValue = e.target.value;
        const newProduct = { ...product };
        newProduct[name] = nameValue;
        console.log(newProduct)
        setProduct(newProduct);
    }
    if (isLoading) {
        return <Loading></Loading>
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
                                required
                                type='text'
                                name='name'
                                id='name'
                                placeholder='Enter Your Name Here'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900'
                                data-temp-mail-org='0'
                            />
                        </div>
                        <div>
                            <label htmlFor='email' className='block mb-2 text-sm'></label>
                            <input
                                onBlur={handleBlur}
                                required
                                type='text'
                                name='category'
                                id='category'
                                placeholder='Enter Category Name'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900'
                                data-temp-mail-org='0'
                            />
                        </div>
                        <div>
                            <label htmlFor='email' className='block mb-2 text-sm'></label>
                            <input
                                onBlur={handleBlur}
                                required
                                type='text'
                                name='title'
                                id='title'
                                placeholder='Enter Book Name'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900'
                                data-temp-mail-org='0'
                            />
                        </div>
                        <div>
                            <label htmlFor='email' className='block mb-2 text-sm'></label>
                            <input
                                onBlur={handleBlur}
                                required
                                type='text'
                                name='des'
                                id='des'
                                placeholder='Description'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900'
                                data-temp-mail-org='0'
                            />
                        </div>
                        <div>
                            <label htmlFor='email' className='block mb-2 text-sm'></label>
                            <input
                                onBlur={handleBlur}
                                required
                                type='text'
                                name='uses'
                                id='uses'
                                placeholder='How many years of purchase'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900'
                                data-temp-mail-org='0'
                            />
                        </div>
                        <div>
                            <label htmlFor='email' className='block mb-2 text-sm'></label>
                            <input
                                onBlur={handleBlur}
                                required
                                type='text'
                                name='location'
                                id='location'
                                placeholder='Enter Your Location'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900'
                                data-temp-mail-org='0'
                            />
                        </div>
                        <div>
                            <label htmlFor='email' className='block mb-2 text-sm'></label>
                            <input
                                onBlur={handleBlur}
                                required
                                type='text'
                                name='resalePrice'
                                id='resalePrice'
                                placeholder='Enter Resale Price'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900'
                                data-temp-mail-org='0'
                            />
                        </div>
                        <div>
                            <label htmlFor='email' className='block mb-2 text-sm'></label>
                            <input
                                onBlur={handleBlur}
                                required
                                type='text'
                                name='originalPrice'
                                id='originalPrice'
                                placeholder='Enter Original Price'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900'
                                data-temp-mail-org='0'
                            />
                        </div>
                        <div>
                            <label htmlFor='role' className='block mb-2 text-sm'></label>


                            <input
                                onBlur={handleBlur}
                                required

                                type='text'
                                name='role'

                                id='email'
                                placeholder='write seller'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900'
                                data-temp-mail-org='0'
                            />
                        </div>
                        <div>
                            <label htmlFor='role' className='block mb-2 text-sm'></label>
                            <input
                                onBlur={handleBlur}
                                required

                                type='text'
                                name='condition'

                                id='condition'
                                placeholder='Write Condition | Excellent | Goood | Fair'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900'
                                data-temp-mail-org='0'
                            />
                        </div>
                        <div>
                            <label htmlFor='role' className='block mb-2 text-sm'></label>
                            <input
                                onBlur={handleBlur}
                                required

                                type='text'
                                name='phone'

                                id='phone'
                                placeholder='Phone Number'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900'
                                data-temp-mail-org='0'
                            />
                        </div>
                        <div>
                            <label htmlFor='email' className='block mb-2 text-sm'></label>


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
                            <label htmlFor='image' className='block mb-2 text-sm'> </label>

                            <input
                                onBlur={handleBlur}
                                required
                                type='file'
                                id='image'
                                name='image'
                                accept='image/*'
                            />
                        </div>


                    </div>
                    <div className='space-y-2'>
                        <div>
                            <PrimaryButton
                                type='submit'
                                classes='w-full px-8 py-3 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100'
                            >
                                {isLoading ? <Spinner /> : 'Submit to add Product'}
                            </PrimaryButton>
                        </div>
                    </div>
                </form>


            </div >
        </div >
    );
};

export default AddProduct;