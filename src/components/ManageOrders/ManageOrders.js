import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './ManageOrders.css'
const ManageOrders = () => {
    const [status, setStatus] = useState("");
    const [bookings, setBookings] = useState([]);
    const [isdeleted, setIsDeleted] = useState(false);
    const [isUpdated, setIsUpdated] = useState(false);
    useEffect(() => {
        fetch('https://obscure-river-28202.herokuapp.com/bookedproperties')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [isdeleted, isUpdated])
    const handleDelete = id => {
        const proceed = window.confirm('Cancel Booking!Are you sure?');
        if (proceed) {
            axios.delete(`https://obscure-river-28202.herokuapp.com/bookedproperties/${id}`)
                .then(res => {
                    if (res.data.acknowledged) {
                        alert('Delete Successful!')
                        setIsDeleted(true);
                    }
                })
        }
    }
    const statusChange = e => {
        setStatus(e.target.value)
    }

    const handleUpdate = (id) => {
        if (!status) {
            window.alert("Please select status")
            return
        }

        axios.put(`https://obscure-river-28202.herokuapp.com/bookedproperties/${id}`, {
            status: status
        })
            .then(res => {
                if (res.data.acknowledged) {
                    alert("Approved! Status updated")
                    setStatus("")
                    setIsUpdated(true);
                }
            })
    }

    return (
        <div>
            <div className='allbooking-container'>
                <div className='text-center allbooking-main-container allbooking-custom-font'>
                    <h1 className="p-4">Manage Orders</h1>
                    {!bookings && (<div className="text-center">
                        <div className="spinner-grow text-danger text-center" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>)}
                    {
                        bookings.map(booking => <div key={booking._id} className="container">
                            <div className="card text-white bg-dark mb-3">
                                <div className="card-body">
                                    <div className="card-header">Order Details</div>
                                    <p>Client's Name: {booking.name}</p>
                                    <p>Booked Apartment: {booking.orderTitle}</p>
                                    <small>Email: {booking.email}</small> <br />
                                    <small>Current Status: {booking.status}</small>
                                    <div className="mt-2 d-flex justify-content-center">
                                        <div class="ms-2">
                                            <select class="form-select" onChange=
                                                {statusChange} aria-label="Default select example">
                                                <option selected>Change Status</option>
                                                <option value="Approved">Approve</option>
                                                <option value="Rejected">Reject</option>
                                                <option value="Completed">Handover</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-2 d-flex  justify-content-center">
                                    <button className="btn btn-danger" onClick={() => handleDelete(booking._id)}>Delete</button>
                                    <button className="ms-2 btn btn-success" onClick={() => handleUpdate(booking._id)}>Update Status</button>

                                </div>
                            </div>
                        </div>)
                    }

                </div>
            </div >
        </div >
    );
};

export default ManageOrders;