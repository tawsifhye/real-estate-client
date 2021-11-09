import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ContentLoader from 'react-content-loader';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Booking.css'
const Booking = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset, required } = useForm();
    const { _id } = useParams();
    const [tour, setTour] = useState({});
    useEffect(() => {
        fetch(`https://young-crag-40635.herokuapp.com/tourplans/${_id}`)
            .then(res => res.json())
            .then(data => setTour(data))
    }, [])
    const onSubmit = (data) => {
        const bookingInfo = {
            ...data,
            title: tour.title,
            email: user.email,
            status: 'pending'
        };
        console.log(bookingInfo);
        axios.post('https://young-crag-40635.herokuapp.com/bookedevents', bookingInfo)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Event Booking Successful. Visit My Bookings for updated.');
                    reset();
                }
            })
    }

    return (
        <div className="booking-container">
            {!tour && (<div className="text-center">
                <div class="spinner-grow text-danger text-center" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>)}
            <div className="container">
                <div className="row p-5">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 col-xxl-6">
                        <div className="custom-font-booking">
                            <h3 className="px-1 py-0">{tour.title}</h3>
                            <p className="p-2">{tour.description}</p>
                            <div className='booking-img-design m-1'>
                                <img className="w-100 rounded" src={tour.thumb} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 col-xxl-6 p-3">
                        <div className="ps-xl-5 ps-xxl-5 custom-font-booking ">
                            <h3 className="px-1">Book Your Tour!</h3>
                            <div className="d-flex lex-column justify-content-center align-items-center form-container">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <p className="fw-bolder">Name</p>
                                    <input defaultValue={user.displayName} type='text' {...register("name")} required />
                                    <p className="fw-bolder">Contact No</p>
                                    <input type='text'{...register("contact")} required />
                                    <p className="fw-bolder">From</p>
                                    <input type='date' {...register("startDate")} required />
                                    <p className="fw-bolder">To</p>
                                    <input type='date' {...register("endDate")} required />
                                    <br /> <br />
                                    <input className='' type="submit" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;