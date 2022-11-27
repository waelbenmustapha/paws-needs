import React from 'react'
import jwt_decode from "jwt-decode";
import { useAuth } from '../../Context/AuthContext';
import { Navigate } from 'react-router-dom';

function RequireAdmin({children}) {
    const auth = useAuth()
   
    if (jwt_decode(auth.user).role!=="ADMIN") {
        return <Navigate to="/home" />
    }
    return children
}

export default RequireAdmin