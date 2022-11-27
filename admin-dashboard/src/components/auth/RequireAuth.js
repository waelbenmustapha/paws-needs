import {Navigate} from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';
export const RequireAuth = ({children}) => {

    const auth= useAuth();

    if(!auth.user){
        return <Navigate to="/sign-in"/>
    }
    return children
}