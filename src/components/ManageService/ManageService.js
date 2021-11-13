import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ManageService = () => {
    const [properties, setProperties] = useState([]);
    const [isDeleted, setIsDeleted] = useState(false);
    useEffect(() => {
        fetch('https://obscure-river-28202.herokuapp.com/properties')
            .then(res => res.json())
            .then(data => setProperties(data))
    }, [isDeleted])

    const deleteService = (id) => {
        const proceed = window.confirm('Cancel Booking!Are you sure?');
        if (proceed) {
            axios.delete(`https://obscure-river-28202.herokuapp.com/properties/${id}`)
                .then(res => {
                    if (res.data.acknowledged) {
                        alert('Delete Successful!')
                        setIsDeleted(true);
                    }
                })
        }
    }
    return (
        <>
            <h3 className="text-center">Manage Service</h3>
            {!properties && (<div className="text-center">
                <div className="spinner-grow text-danger text-center" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>)}
            <div className="table-responsive ">
                <table className="table table-dark table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Project Name</th>
                            <th scope="col">Handle</th>
                        </tr>

                        {
                            properties.map(item =>
                                <tr key={item._id}>
                                    <td>{item.name}</td>
                                    <td>
                                        <button onClick={() => deleteService(item._id)} className="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                            )
                        }

                    </thead>
                </table>
            </div>
        </>
    );
};

export default ManageService;