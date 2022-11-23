import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import CommingSoon from '../../Shared/CommingSoon';

const Home = () => {
    const tostHandler = () => {
        toast.success('I have come back')
    }
    return (
        <div>
            <button onClick={tostHandler} className="btn">Button</button>
            <CommingSoon></CommingSoon>
        </div>
    );
};

export default Home;







