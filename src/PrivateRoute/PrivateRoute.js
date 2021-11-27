import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return "isLoading paisi"
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user.email ? children :
                <Redirect
                    to={{
                        pathname: "/appointments",
                        state: { from: location }
                    }}
                ></Redirect>
            }
        >

        </Route>
    );
};

export default PrivateRoute;