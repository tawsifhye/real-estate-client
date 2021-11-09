import { faFacebook, faInstagram, faLinkedin, faPinterest, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css'
import logo from "../../images/logo.png"
const Footer = () => {
    return (
        <div>
            <div className='footer p-5'>
                <div className="container text-white">
                    <div className="row pt-2 mx-auto">
                        <div className="col-12 col-sm-12 col-lg-4 col-xl-4 col-xxl-4 mt-1 mb-2" id="aboutus">
                            <div className="d-flex align-items-center">
                                <h6 >About Us</h6>
                                <img className="w-25" src={logo} alt="" />
                            </div>
                            <p className="fw-light">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <h6>Connect</h6>
                            <div className="d-flex p-1 ">
                                <FontAwesomeIcon className="me-2" icon={faFacebook} />
                                <FontAwesomeIcon className="me-2" icon={faInstagram} />
                                <FontAwesomeIcon className="me-2" icon={faTwitterSquare} />
                                <FontAwesomeIcon className="me-2" icon={faLinkedin} />
                                <FontAwesomeIcon className="me-2" icon={faPinterest} />
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-lg-2 col-xl-2 col-xxl-2 mt-1">
                            <h6>Links</h6>
                            <p>Services</p>
                            <p>Career</p>
                            <p>News</p>
                            <p>Contact</p>
                        </div>
                        <div className="col-12 col-sm-12 col-lg-2 col-xl-2 col-xxl-2 mt-1">
                            <h6>Company</h6>
                            <p>Services</p>
                            <p>Career</p>
                            <p>News</p>
                            <p>Contact</p>
                        </div>
                        <div className="col-12 col-sm-12 col-lg-4 col-xl-4 col-xxl-4 mt-1">
                            <h6>Contact</h6>
                            <p>Sylhet Bangladesh</p>
                            <p>+1(123)-456-7890</p>
                            <p>info@mydomain.com</p>
                        </div>
                    </div>
                </div>
                <div className="text-white text-white text-center">
                    <p>Copyright ©2021 All rights reserved Tawsif</p>
                    <small>This web site is developed for leaning purpose</small> <br />
                    <small>Images are collected from freepik, unsplash, pexels website. And texts are collected from different website.</small>
                </div>
            </div>
        </div>
    );
};

export default Footer;