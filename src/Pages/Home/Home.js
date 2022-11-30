import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import Banner from '../Banner/Banner';
import CatgoryCard from '../CatgoryCard/CatgoryCard';
import ExtraSection from '../ExtraSection/ExtraSection';
import MyAdvertisement from '../MyAdvertisement/MyAdvertisement';

const Home = () => {
    const { data: books = [] } = useQuery({
        queryKey: ['books'],
        queryFn: async () => {
            const res = await fetch('https://b612-used-products-resale-server-side-farhadbgd.vercel.app/books');
            const data = await res.json();

            return data;
        }
    });
    console.log(books);
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







