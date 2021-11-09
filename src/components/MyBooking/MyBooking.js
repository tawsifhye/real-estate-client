import { faEraser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import './MyBooking.css'
const MyBooking = () => {
    const { user } = useAuth();
    const [isdeleted, setIsDeleted] = useState(false);
    const [events, setEvents] = useState([]);
    const email = user.email;
    useEffect(() => {
        fetch(`https://young-crag-40635.herokuapp.com/bookedevents/${email}`)
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [email, isdeleted])
    const deleteEvent = (id) => {
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
    return (
        <div className='mybooking-container'>
            <div className='text-center mybooking-main-container mybooking-custom-font'>
                <h1 className="p-4">Manage Your Booking</h1>
                {!events && (<div className="text-center">
                    <div class="spinner-grow text-danger text-center" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>)}
                {events.map(event => <div key={event._id} className="shadow-sm p-3 mb-5 bg-body rounded">
                    <h5>{event.title}</h5>
                    <p>Name: {event.name}</p>
                    <p>Contact: {event.contact}</p>
                    <p>Email: {event.email}</p>
                    <p>Booking Date: {event.startDate} to {event.endDate}</p>
                    <p>Status: {event.status}</p>
                    <button onClick={() => deleteEvent(event._id)} className="btn btn-danger"><FontAwesomeIcon icon={faEraser} /> Cancel</button>
                </div>)}
            </div>
        </div>
    );
};

export default MyBooking;