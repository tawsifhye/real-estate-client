import React from 'react';
import './AdminRoute.css'
const AdminRoutes = ({ setPath }) => {
    return (
        <div>
            <ul className="list-group admin-route">
                <li className="list-group-item" onClick={() => setPath("manageallorders")}>
                    Manage All Orders</li>
                <li className="list-group-item" aria-current="true" onClick={() => setPath("makeadmin")}>
                    Make Admin
                </li>
                <li className="list-group-item" onClick={() => setPath("addservice")}>
                    Add Service</li>
                <li className="list-group-item" onClick={() => setPath("manageservice")}>
                    Manage Service</li>
            </ul>
        </div>
    );
};

export default AdminRoutes;