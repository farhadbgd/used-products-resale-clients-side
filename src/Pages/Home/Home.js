import React from 'react';
import toast from 'react-hot-toast';

import Footer from '../../Shared/Footer';
import Banner from '../Banner/Banner';
import CatgoryCard from '../CatgoryCard/CatgoryCard';
import ExtraSection from '../ExtraSection/ExtraSection';

const Home = () => {
    const tostHandler = () => {
        toast.success('I have come back')
    }
    return (
        <div>

            <Banner></Banner>
            <CatgoryCard></CatgoryCard>
            <ExtraSection></ExtraSection>
            <Footer></Footer>

            <button onClick={tostHandler} className="btn">Button</button>
        </div>
    );
};

export default Home;







