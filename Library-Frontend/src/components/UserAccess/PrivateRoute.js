import React from 'react';
import { Redirect, Route } from 'react-router-dom';

var token = JSON.parse(localStorage.getItem('authToken'));

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => localStorage.getItem('authToken') ? ((token.admin === 1) ? (
        <Component {...props} />
    ) : (
            <Redirect to={{
                pathname: "/", state: { from: props.location }
            }}
            />
        )
    ):(
        <Redirect to={{
            pathname: "/login", state: { from: props.location }
        }}
        />
    )
    }
    />
)