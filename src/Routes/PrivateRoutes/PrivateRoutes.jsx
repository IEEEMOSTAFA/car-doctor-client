import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    
    if (loading) {
        return <progress className="progress progress-neutral w-56" value="70" max="100"></progress>;
    }

    if (user?.email) {
        return children;
    }
    
    return (
        <Navigate to="/login" state={{ from: location.pathname }} replace />
    );
};

export default PrivateRoutes;