import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <div>
            <h1>PrivateRoute</h1>
        </div>
    )
}

export default PrivateRoute;