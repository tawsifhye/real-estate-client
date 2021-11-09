import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './SingleService.css'
const Services = (props) => {

    const { _id, name, location, area, bath, bed, price } = props.property;
    console.log(props.property);
    return (
        <>
            <div className="col">
                <div className="card card-design shadow-sm">
                    <img src="" className="card-img-top img-fluid" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-center fw-bold">{name}</h5>
                        <h6>{location}</h6>
                        <div className="d-flex justify-content-between p-2">
                            <p>{bed} BED {bath} BATH</p>
                            <p className="text-end fw-bold text-success">${price}</p>
                        </div>
                    </div>
                    <div className="mx-auto pb-2">
                        <Link to={`/booking/`}>
                            <button className="fw-bold btn btn-primary">Book Home</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;