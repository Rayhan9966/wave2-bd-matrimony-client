import React from 'react';
import Banner from '../Banner/Banner';
import Catagory from '../Catagory/Catagory';
import PremiumMember from '../Premium/PremiumMember';
import AboutSection from '../AboutSection/AboutSection';
import Review from '../Reviews/Review';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
    <title>Bd Matrimony | Home</title>
</Helmet>
           <Banner></Banner>
           <PremiumMember></PremiumMember>
           <Catagory></Catagory>
           <AboutSection></AboutSection>
           <Review></Review>
        </div>
    );
};

export default Home;