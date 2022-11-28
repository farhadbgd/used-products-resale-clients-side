import React from 'react';
import banner from '../.././Assets/banner.jpeg';

const Banner = () => {
    return (
        <div className="hero h-50"  >
            <img
                className="d-block w-100"
                src={banner}
                alt="First slide"
            />
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello Reader</h1>
                    <h1 className="mb-5 text-2xl font-bold">“So many books, so little time.” <br></br> </h1> <span>― Frank Zappa</span>
                    <h1 className="mb-5 text-2xl font-bold"> “A room without books is like a body without a soul.” <br></br> </h1><span>― Marcus Tullius Cicero</span>


                </div>
            </div>
        </div>
    );
};

export default Banner;