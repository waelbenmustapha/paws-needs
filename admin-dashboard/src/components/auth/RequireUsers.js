import React from 'react'
import jwt_decode from "jwt-decode";
import { useAuth } from '../../Context/AuthContext';
import { Navigate } from 'react-router-dom';

function RequireUser({children}) {
    const auth = useAuth()
   
    if (jwt_decode(auth.user).role!=="USER") {
        return <Navigate to="/dashboard" />
    }
    return children
}

export default RequireUser