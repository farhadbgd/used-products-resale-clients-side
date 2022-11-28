import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css'

const ErrorPage = () => {

    return (
        <div className='m-4'>

            <div className='text'>
                <h1 className='text-center'>404</h1>
                <h2 className='text-center'>Uh, Ohh</h2>
                <h3 className='text-center'>Sorry ! we cant find what you are looking for.</h3>
                <p>Please go back to <Link style={{ color: 'red' }} to={'/'}>Home</Link></p>
            </div>

        </div>
    );
};

export default ErrorPage;