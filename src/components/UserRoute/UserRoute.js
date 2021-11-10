import React, { createContext, useState } from 'react';
import Dashboard from '../Dashboard/Dashboard';
import './UserRoute.css'
const UserRoute = () => {
    const [path, setPath] = useState("");
    const linkClick = (value) => {
        console.log(value);
    }
    return (
        <>

            <ul class="list-group user-route">
                <li class="list-group-item" aria-current="true" onClick={() => setPath("payment")}>
                    Payment
                </li>
                <li class="list-group-item" onClick={linkClick}>My Orders</li>
                <li class="list-group-item" onClick={linkClick}>Review</li>
            </ul>

        </>
    );
};

export default UserRoute;