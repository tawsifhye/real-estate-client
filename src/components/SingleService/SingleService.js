import React from 'react';
import { Link } from 'react-router-dom';
import './SingleService.css'
const Services = (props) => {

    const { _id, name, location, area, bath, bed, price, img } = props.property;
    return (
        <>
            <div className="col">
                <div className="card card-design shadow-sm">
                    <img src={img} className="card-img-top img-fluid p-1 rounded-2" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-center fw-bold">{name}</h5>
                        <h6>{location}</h6>
                        <div className="d-flex justify-content-between align-items-center p-2">
                            <div>
                                <span className="text-success">Area:</span> {area}
                                <p>{bed} BED {bath} BATH</p>
                            </div>
                            <p className="text-end fw-bold text-success">${price}</p>
                        </div>
                    </div>
                    <div className="mx-auto pb-2">
                        <Link to={`/booking/${_id}`}>
                            <button className="fw-bold btn btn-primary">Buy Home</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;