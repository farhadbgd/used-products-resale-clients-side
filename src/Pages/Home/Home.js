import React from 'react';
import toast from 'react-hot-toast';

import Footer from '../../Shared/Footer';
import Banner from '../Banner/Banner';
import CatgoryCard from '../CatgoryCard/CatgoryCard';
import ExtraSection from '../ExtraSection/ExtraSection';

const Home = () => {

    return (
        <div>

            <Banner></Banner>
            <CatgoryCard></CatgoryCard>
            <ExtraSection></ExtraSection>
            <Footer></Footer>


        </div>
    );
};

export default Home;







