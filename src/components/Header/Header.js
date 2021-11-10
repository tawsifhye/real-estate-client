import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth'
import logo from '../../images/logo.png'
import "./Header.css"
const Header = () => {
    const { user, logOut } = useAuth();
    // console.log(user);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light self-nav">
                <div className="container px-0 w-25 ms-0">
                    <Link to="/home">
                        <img
                            className="rounded-circle"
                            src={logo}
                            alt=""
                            width="100"
                            height="81"
                        />
                    </Link>
                </div>
                <button
                    className="navbar-toggler navbar-toggler-right bg-light me-2"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="container-fluid d-flex">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav  pe-lg-5 mb-2 mb-lg-0 fw-bolder fs-6 ms-auto">
                            <li className="nav-item me-3">
                                <HashLink
                                    className="nav-link active 
                                link-hover"
                                    aria-current="page"
                                    to="/home#home"
                                >
                                    Home
                                </HashLink>
                            </li>
                            <li className="nav-item me-3">
                                <Link
                                    className="nav-link active 
                                link-hover"
                                    aria-current="page"
                                    to="/exploreproperties"
                                >
                                    Explore Properties
                                </Link>
                            </li>
                            {/*  {user.email && (
                                <li className="nav-item me-3">
                                    <Link
                                        className="nav-link active 
                                link-hover"
                                        aria-current="page"
                                        to="/mybookings"
                                    >
                                        My Bookings
                                    </Link>
                                </li>
                            )}
                            {user.email && (
                                <li className="nav-item me-3">
                                    <Link
                                        className="nav-link active 
                                link-hover"
                                        aria-current="page"
                                        to="/allbookings"
                                    >
                                        Manage All Bookings
                                    </Link>
                                </li>
                            )} */}
                            {user.email && (
                                <li className="nav-item me-3">
                                    <Link
                                        className="nav-link active 
                                link-hover"
                                        aria-current="page"
                                        to="/allbookings"
                                    >
                                        Dash Board
                                    </Link>
                                </li>
                            )}

                            {user?.email && (
                                <li className="nav-item  pt-2">
                                    <span className="text-success">Signed in as: </span>
                                    {user.email}
                                </li>
                            )}

                            {user?.email ? (
                                <button
                                    className="btn btn-danger fw-bolder rounded pt-2 mx-1"
                                    onClick={logOut}
                                >
                                    Log Out
                                </button>
                            ) : (
                                <li className="nav-item">
                                    <Link to="/login">
                                        <button className="btn btn-success fw-bolder rounded  pt-2 mx-1">
                                            Sign In
                                        </button>
                                    </Link>
                                </li>
                            )}

                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Header;