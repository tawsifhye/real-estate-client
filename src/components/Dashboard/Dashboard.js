import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import UserRoute from '../UserRoute/UserRoute';

const Dashboard = () => {
    const location = useLocation();
    const history = useHistory();
    const { logOut } = useAuth();
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
                        <UserRoute />
                        <div className="text-center mt-2">
                            <button className="btn btn-danger" onClick={logOut}>Logout</button>
                        </div>

                    </div>
                    <div className="col-9">
                        <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore enim ea rem dolorum ab libero nulla repellendus iste deserunt iusto ipsa exercitationem, in unde? Accusantium voluptate modi debitis voluptas dolor?</h4>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;