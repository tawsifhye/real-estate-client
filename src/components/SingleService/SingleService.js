import React from 'react';
import { Link } from 'react-router-dom';
import './SingleService.css'
const Services = (props) => {
    const { _id, title, price, thumb } = props.tour;
    console.log(props);
    return (
        <>
            <div className="col">
                <div className="card card-design border-dark">
                    <img src={thumb} className="card-img-top img-fluid" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-center fw-bold">{title.toUpperCase()}</h5>
                        <p className="text-center fw-bold">${price}</p>
                    </div>
                    <div className="mx-auto pb-2">
                        <Link to={`/booking/${_id}`}>
                            <button className="fw-bold btn btn-warning rounded-pill">Book Tour</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;