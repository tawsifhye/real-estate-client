import React, { useEffect, useState } from 'react';
import Review from '../Review/Review'
import './Home.css'
import OurAgent from '../OurAgent/OurAgent';
import Services from '../Services/Services';

const Home = () => {

    return (
        <>
            <div className="home-banner-container">
                <div className=" container-fluid text-white home-banner text-center ">
                    <div className="custom-font-home">
                        <h1 className="p-1">Let's Make Your Best</h1>
                        <h1 className="p-1">Trip Ever</h1>
                        <p className="">Plan and book your perfect trip with expert advice, travel tips, destination information and inspiration from us.</p>
                    </div>
                </div>
            </div>
            {/* Service Section Starts*/}
            <div id="service">
                <Services></Services>
            </div>

            {/* service Section Ends */}
            <Review></Review>
            <OurAgent></OurAgent>
        </>
    );
};

export default Home;