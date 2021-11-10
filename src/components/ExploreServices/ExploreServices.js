import React, { useEffect, useState } from 'react';
import SingleServices from "../SingleService/SingleService"
const ExploreServices = () => {
    const [properties, setProperties] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/properties')
            .then(res => res.json())
            .then(data => setProperties(data))
    }, [])
    return (
        <>
            <div>
                <h1 className="text-center mt-3">Our Properties</h1>
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
        </>

    );
};

export default ExploreServices;