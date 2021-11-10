import React, { useEffect, useState } from 'react';
import Review from '../Review/Review'
import './Home.css'
import OurAgent from '../OurAgent/OurAgent';
import Services from '../Services/Services';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Home = () => {

    return (
        <>
            <Header></Header>
            <Banner></Banner>
            {/* Service Section Starts*/}
            <div id="service" className="">
                <Services></Services>
            </div>
            {/* service Section Ends */}
            <Review></Review>
            <OurAgent></OurAgent>
            <Footer></Footer>
        </>
    );
};

export default Home;