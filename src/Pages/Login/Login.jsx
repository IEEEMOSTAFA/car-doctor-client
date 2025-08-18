import React, { useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import loginImg from '../../assets/images/login/login.svg';
import { FaFacebook } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../providers/AuthProviders';
import Swal from 'sweetalert2';
import axios from 'axios';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;




        signIn(email, password)
            .then(result => {
                const loggedInUser = result.user;
                console.log('Logged in user:', loggedInUser);

                const user = { email }

                Swal.fire({
                    title: "Login successful!",
                    icon: "success",
                    draggable: true
                });

                form.reset();
                // Redirect to previous location or home


                // Get Access Token
                axios.post('https://car-doctor-server-plig.onrender.com/jwt', user, { withCredentials: true })
                    .then(res => {
                        console.log(res.data);
                        if (res.data.success) {
                            navigate(location.state?.from || '/', { replace: true });
                        }

                    })

            })
            .catch(error => {
                console.error('Login error:', error);
                const errorMessage = error.response?.data?.message || error.message;
                Swal.fire({
                    icon: "error",
                    title: "Login Failed",
                    text: errorMessage,
                });
            });

    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
            <div className="hero-content flex-col lg:flex-row gap-10 w-full max-w-5xl">
                {/* Image Section */}
                <div className="w-full lg:w-1/2 mr-12 flex justify-center">
                    <img src={loginImg} alt="Login Illustration" className="w-80 md:w-96 rounded-lg shadow-lg" />
                </div>

                {/* Form Section */}
                <div className="card w-full max-w-sm bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-3xl font-bold text-center text-[#FF3811]">Login</h2>

                        <form onSubmit={handleLogin}>
                            <div className="form-control mt-4">
                                <label htmlFor="email" className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    name='email'
                                    placeholder="Enter your email"
                                    className="input input-bordered"
                                    required
                                />
                            </div>

                            <div className="form-control mt-4">
                                <label htmlFor="password" className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    name='password'
                                    placeholder="Enter your password"
                                    className="input input-bordered"
                                    required
                                />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <button type="submit" className="btn bg-[#FF3811] w-full hover:bg-[#d4320f] transition-colors duration-200">Login</button>
                            </div>

                            <p className="text-center text-[#737373] text-sm mt-4">
                                or sign up with
                            </p>

                            <div className='flex justify-center items-center gap-2 mt-4'>
                                <span className='text-blue-500'><FaFacebook /></span>
                                <span className='text-blue-500'><IoLogoLinkedin /></span>
                                <span><FcGoogle /></span>
                            </div>
                            <div>
                                <p className="text-center text-[#737373] text-sm mt-4">
                                    New to Doctor? <Link to="/signUp" className="link link-hover text-[#FF3811] ">Sign Up</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;