import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SingleServices from "../SingleService/SingleService"
const ExploreServices = () => {
    const [properties, setProperties] = useState([]);
    useEffect(() => {
        fetch('https://obscure-river-28202.herokuapp.com/properties')
            .then(res => res.json())
            .then(data => setProperties(data))
    }, [])
    return (
        <>
            <Header />
            <div>
                <h1 className="text-center mt-3">Our Projects</h1>
                < div className="container-fluid row mx-auto">
                    {!properties && (<div className="text-center">
                        <div class="spinner-grow text-danger text-center" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>)}
                    <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-3 row-cols-xl-3 g-4 mb-5 mx-auto">
                        {properties.map(property => (<SingleServices key={property._id} property={property}>
                        </SingleServices>))}
                    </div>
                </div>
            </div>
            <Footer />
        </>

    );
};

export default ExploreServices;