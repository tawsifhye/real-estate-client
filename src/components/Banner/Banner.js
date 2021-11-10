import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';
import './Banner.css'
import banner1 from '../../images/101.jpg'
import banner2 from '../../images/102.jpg'
import banner3 from '../../images/103.jpg'
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div>

            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">

                    <div className="carousel-item active">
                        <img src={banner1} className="d-block w-100 banner-img" alt="..." />
                        <div className="carousel-caption d-md-block custom-font-banner banner-title">
                            <h5>Let Your Home Be Unique Stylist</h5>
                            <Link to='/exploreproperties'>
                                <button className="btn btn-success">
                                    Explore Our Services
                                    <span className="ms-2"><FontAwesomeIcon icon={faArrowAltCircleRight} /></span>
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={banner2} className="d-block w-100 banner-img" alt="..." />
                        <div className="carousel-caption d-md-block custom-font-banner banner-title">
                            <h5>Modern House Make Better Life</h5>
                            <Link to='/exploreproperties'>
                                <button className="btn btn-success">
                                    Explore Our Services
                                    <span className="ms-2"><FontAwesomeIcon icon={faArrowAltCircleRight} /></span>
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={banner3} className="d-block w-100 banner-img" alt="..." />
                        <div className="carousel-caption d-md-block custom-font-banner banner-title">
                            <h5>Your Property Is Our Priority</h5>
                            <Link to='/exploreproperties'>
                                <button className="btn btn-success">
                                    Explore Our Services
                                    <span className="ms-2"><FontAwesomeIcon icon={faArrowAltCircleRight} /></span>
                                </button>
                            </Link>

                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Banner;