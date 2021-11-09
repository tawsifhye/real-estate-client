import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return (
            <div className="text-center">
                <div class="spinner-grow text-danger text-center" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user?.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
};


export default PrivateRoute;