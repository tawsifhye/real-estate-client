import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './AllBooking.css'
const AllBooking = () => {
    const [events, setEvents] = useState([]);
    const [isdeleted, setIsDeleted] = useState(false);
    const [isUpdated, setIsUpdated] = useState(false);
    useEffect(() => {
        fetch('https://young-crag-40635.herokuapp.com/bookedevents')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [isdeleted, isUpdated])
    const handleDelete = id => {
        console.log(id, 'deleted');
        const proceed = window.confirm('Cancel Booking!Are you sure?');
        if (proceed) {
            fetch(`https://young-crag-40635.herokuapp.com/bookedevents/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        alert('Delete Successful!')
                        setIsDeleted(true);
                    }
                })
        }
    }
    const handleUpdate = id => {
        const updatedStatus = {
            status: 'approved'
        }
        axios.put(`https://young-crag-40635.herokuapp.com/bookedevents/${id}`, {
            status: 'approved'
        })
            .then(res => {
                if (res.data.acknowledged) {
                    alert("Approved! Status updated")
                    setIsUpdated(true);
                }
            })
    }

    return (
        <div>
            <div className='allbooking-container'>
                <div className='text-center allbooking-main-container allbooking-custom-font'>
                    <h1 className="p-4">Manage Your Booking</h1>
                    {!events && (<div className="text-center">
                        <div className="spinner-grow text-danger text-center" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>)}
                    <div className='p-4 table-responsive'>
                        <table className="mx-auto table table-hover table-dark table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Event</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Handle</th>
                                </tr>
                            </thead>
                            <tbody>

                                {events.map(event => <tr key={event._id}>
                                    <td>{event.name}</td>
                                    <td>{event.email}</td>
                                    <td>{event.title}</td>
                                    <td>{event.status}</td>
                                    <td><button onClick={() => handleUpdate(event._id)} className="btn btn-success m-1">Update</button>
                                        <button onClick={() => handleDelete(event._id)} className="btn btn-danger my-1">Delete</button></td>
                                </tr>)}

                            </tbody>

                        </table>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AllBooking;