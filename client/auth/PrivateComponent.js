import { Navigate } from 'react-router-dom';
import auth from './auth-helper';

const Private = (Component) => {
    return auth.isAuthenticated ? <Component /> : <Navigate to="/signin" />
}