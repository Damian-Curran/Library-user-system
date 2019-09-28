import React from 'react';
import { Redirect, Route } from 'react-router-dom';

var token = JSON.parse(localStorage.getItem('authToken'));

export const UserRoute = ({ component: Component, ...rest }) => ( 
    <Route {...rest} render={props => localStorage.getItem('authToken') ? ((token) ? (
        <Component {...props} /> 
    ) : (
        <Redirect to={{
            pathname: "/", state: { from: props.location }
        }}
        />
        )
    ) : (
        <Redirect to={{
            pathname: "/login", state: { from: props.location }
        }}
        />
    )}
    />
)