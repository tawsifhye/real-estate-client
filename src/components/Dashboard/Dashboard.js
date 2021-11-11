import { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import UserRoute from '../UserRoute/UserRoute';
import Payment from '../Payment/Payment'
import MyBooking from '../MyBooking/MyBooking'
import AddReview from '../AddReview/AddReview';
import AdminRoutes from '../AdminRoutes/AdminRoutes';

const Dashboard = () => {
    const { logOut, admin } = useAuth();
    const [path, setPath] = useState("");
    const location = useLocation();
    const history = useHistory();
    console.log(path);
    const goBack = () => {
        const redirect_uri = location.state?.from || "/home";
        history.push(redirect_uri);
    }
    return (
        <>
            <h1 className="text-center p-2">Dashboard</h1>
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <div className="text-center mb-4">
                            <button className="btn btn-warning" onClick={goBack}>Go Back</button>
                        </div>
                        {!admin && <UserRoute path={path} setPath={setPath}></UserRoute>}
                        <AdminRoutes></AdminRoutes>
                        <div className="text-center mt-2">
                            <button className="btn btn-danger" onClick={logOut}>Logout</button>
                        </div>

                    </div>
                    <div className="col-9">
                        {path === "" && <h2 className="text-center text-primary">Dashboard Home</h2>}
                        {path === "payment" && <Payment></Payment>}
                        {path === "myorders" && <MyBooking></MyBooking>}
                        {path === "addreview" && <AddReview></AddReview>}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;