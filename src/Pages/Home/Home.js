import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import Banner from '../Banner/Banner';
import CatgoryCard from '../CatgoryCard/CatgoryCard';
import ExtraSection from '../ExtraSection/ExtraSection';
import MyAdvertisement from '../MyAdvertisement/MyAdvertisement';

const Home = () => {
    const { user } = useContext(AuthContext)
    const email = user?.email
    console.log(email)
    return (
        <div>

            <Banner></Banner>
            <CatgoryCard></CatgoryCard>
            {
                email && <>
                    <MyAdvertisement></MyAdvertisement>

                </>
            }
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;







