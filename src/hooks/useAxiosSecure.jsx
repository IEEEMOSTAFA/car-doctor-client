
import axios from 'axios';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const axiosSecure = axios.create({
    baseURL: 'https://car-doctor-server-plig.onrender.com',
    withCredentials: true
});

const useAxiosSecure = () => {
    const { logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        const requestInterceptor = axiosSecure.interceptors.request.use(
            (config) => {
                // Optional: Add token to headers if stored in localStorage
                const token = localStorage.getItem('access-token');
                if (token) {
                    config.headers.Authorization = `Bearer ${token}`;
                }
                return config;
            },
            (error) => {
                return Promise.reject(error);
            }
        );

        const responseInterceptor = axiosSecure.interceptors.response.use(
            (res) => res,
            async (error) => {
                console.log('Error response is:', error.response);
                
                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                    console.log('Logout user');
                    
                    try {
                        // Show warning message
                        await Swal.fire({
                            title: 'Session Expired!',
                            text: 'Your session has expired. Please login again.',
                            icon: 'warning',
                            confirmButtonText: 'Login',
                            allowOutsideClick: false
                        });

                        // Logout user
                        await logOut();
                        
                        // Navigate to login
                        navigate('/login');
                        
                    } catch (logoutError) {
                        console.error('Logout error:', logoutError);
                        // Even if logout fails, redirect to login
                        navigate('/login');
                    }
                }
                return Promise.reject(error);
            }
        );

        // Cleanup interceptors on unmount
        return () => {
            axiosSecure.interceptors.request.eject(requestInterceptor);
            axiosSecure.interceptors.response.eject(responseInterceptor);
        };
    }, [logOut, navigate]); // Add dependencies

    return axiosSecure;
};

export default useAxiosSecure;