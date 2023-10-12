import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import auth from './auth-helper';


export default function PrivateRoute() {
    let  userid = auth.isAuthenticated
    return (
        <>
            {userid ? <Outlet  /> : <Navigate to="/signin" />};
        </>

    )
}