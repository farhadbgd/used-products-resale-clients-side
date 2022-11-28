import React from 'react';
import banner from '../.././Assets/banner2.jpg';

const ExtraSection = () => {
    return (
        <div>
            <div className="hero  bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <img src={banner} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 style={{ fontSize: '25px', color: 'orange', fontWeight: 'bold' }} className="text-3xl font-bold ">“There is no friend as loyal as a book.”</h1>
                        <p className="py-6"><span>― Ernest Hemingway</span></p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection;

<h1 className="mb-5 text-1xl font-bold"> <br></br> </h1> 