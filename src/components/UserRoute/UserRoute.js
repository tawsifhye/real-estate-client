import './UserRoute.css'

const UserRoute = ({ setPath }) => {
    return (
        <>

            <ul class="list-group user-route">
                <li class="list-group-item" aria-current="true" onClick={() => setPath("payment")}>
                    Payment
                </li>
                <li class="list-group-item" onClick={() => setPath("myorders")}>My Orders</li>
                <li class="list-group-item" onClick={() => setPath("addreview")}>Add Review</li>
            </ul>

        </>
    );
};

export default UserRoute;