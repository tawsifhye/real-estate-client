import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';
import SingleServices from '../SingleService/SingleService'
import './Services.css'

const Services = () => {
    const [properties, setProperties] = useState([]);
    useEffect(() => {
        fetch('https://obscure-river-28202.herokuapp.com/properties')
            .then(res => res.json())
            .then(data => setProperties(data))
    }, [])
    return (
        <>
            <div className='service-container'>
                <div className="text-center service-container-header custom-font-home">
                    <h1 className="">
                        Featured Properties
                    </h1>
                </div>
                < div className="container-fluid row mx-auto">
                    {!properties && (<div className="text-center">
                        <div class="spinner-grow text-danger text-center" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>)}
                    <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-3 row-cols-xl-3 g-4 mb-5 mx-auto">
                        {properties.slice(0, 6).map(property => (<SingleServices key={property._id} property={property}>
                        </SingleServices>))}
                    </div>
                </div>
                <div className="text-center">
                    <Link to='/exploreproperties'>
                        <button className="btn btn-success">
                            Explore Our Services
                            <span className="ms-2"><FontAwesomeIcon icon={faArrowAltCircleRight} /></span>
                        </button>
                    </Link>
                </div>

            </div>
        </>
    );
};

export default Services;