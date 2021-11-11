import './UserRoute.css'

const UserRoute = ({ setPath }) => {
    return (
        <>

            <ul className="list-group user-route">
                <li className="list-group-item" aria-current="true" onClick={() => setPath("payment")}>
                    Payment
                </li>
                <li className="list-group-item" onClick={() => setPath("myorders")}>My Orders</li>
                <li className="list-group-item" onClick={() => setPath("addreview")}>Add Review</li>
            </ul>

        </>
    );
};

export default UserRoute;