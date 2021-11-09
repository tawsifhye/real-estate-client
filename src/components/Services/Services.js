import React, { useEffect, useState } from 'react';
import SingleServices from '../SingleService/SingleService'
import Bounce from 'react-reveal/Bounce';
import './Services.css'
const Services = () => {
    const [tours, setTours] = useState([]);
    useEffect(() => {
        fetch('')
            .then(res => res.json())
            .then(data => { })
    }, [])
    // console.log(tours);
    return (
        <>
            <div className='service-container'>
                <div className="text-center service-container-header custom-font-home">
                    <h1 className="">
                        Featured Properties
                    </h1>
                </div>
                <div className="container-fluid row mx-auto">
                    {!tours && (<div className="text-center">
                        <div class="spinner-grow text-danger text-center" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>)}
                    <Bounce bottom>
                        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-3 row-cols-xl-3 g-4 mb-5 mx-auto">
                            {tours.map(tour => (<SingleServices key={tour._id} tour={tour}></SingleServices>))}
                        </div>
                    </Bounce>
                </div>
            </div>
        </>
    );
};

export default Services;