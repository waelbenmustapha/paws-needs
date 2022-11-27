import {Navigate} from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';
export const DeniedToAuthUsers = ({children}) => {

    const auth= useAuth();

    if(auth.user){
        return <Navigate to="/dashboard/home"/>
    }
    return children
}