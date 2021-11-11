import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Booking.css'
const Booking = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const { _id } = useParams();
    const [details, setdetails] = useState({});
    useEffect(() => {
        fetch(`https://obscure-river-28202.herokuapp.com/properties/${_id}`)
            .then(res => res.json())
            .then(data => setdetails(data))
    }, [])
    const onSubmit = (data) => {
        const bookingInfo = {
            ...data,
            orderTitle: details.name,
            orderTime: new Date().toLocaleString(),
            bills: details.price,
            status: 'pending'
        };

        axios.post('https://obscure-river-28202.herokuapp.com/bookedproperties', bookingInfo)
            .then(res => {
                console.log(res);
                if (res.data.acknowledged) {
                    window.alert("Booking Successful");
                    reset()
                }
            })
        // console.log(bookingInfo);
    }
    return (
        <>
            <Header />
            <div className="booking-container">
                {!details && (<div className="text-center">
                    <div class="spinner-grow text-danger text-center" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>)}
                <div className="container">
                    <div className="row p-5">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 col-xxl-6 p-3 custom-font-booking">
                            <h3 className="px-1">Property Details</h3>
                            <div className="card card-design shadow-sm mt-5">
                                <img src={details?.img} className="card-img-top img-fluid p-1 rounded-2" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-center fw-bold">{details?.name}</h5>
                                    <h6>{details?.location}</h6>
                                    <div className="d-flex justify-content-between align-items-center p-2">
                                        <div>
                                            <span className="text-success">Area:</span> {details?.area}
                                            <p>{details?.bed} BED {details?.bath} BATH</p>
                                        </div>
                                        <p className="text-end fw-bold text-success">${details?.price}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 col-xxl-6 p-3">
                            <div className="ps-xl-5 ps-xxl-5 custom-font-booking ">
                                <h3 className="px-1">Buy Your Dream House!!</h3>
                                <div className="d-flex lex-column justify-content-center align-items-center booking-form-container">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <p className="fw-bolder">Email</p>
                                        <input defaultValue={user.email} type='text' {...register("email")} required readOnly />
                                        <p className="fw-bolder">Name</p>
                                        <input defaultValue={user.displayName} type='text' {...register("name")} required />
                                        <p className="fw-bolder">Contact No</p>
                                        <input type='text'{...register("contact")} required />
                                        <input className='' type="submit" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Booking;