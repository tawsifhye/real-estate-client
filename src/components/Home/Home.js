import React, { useEffect, useState } from 'react';
import Review from '../Review/Review'
import './Home.css'
import OurAgent from '../OurAgent/OurAgent';
import Services from '../Services/Services';
import Banner from '../Banner/Banner';

const Home = () => {

    return (
        <>
            <Banner></Banner>
            {/* Service Section Starts*/}
            <div id="service" className="">
                <Services></Services>
            </div>
            {/* service Section Ends */}
            <Review></Review>
            <OurAgent></OurAgent>
        </>
    );
};

export default Home;