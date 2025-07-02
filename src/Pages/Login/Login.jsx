import React from 'react';
import loginImg from '../../assets/images/login/login.svg';
import { FaFacebook } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
const Login = () => {
    const handleLogin = (event) => {
        event.preventDefault();
    }
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
                            {/* Email Field */}
                            <div className="form-control mt-4">
                                <label htmlFor="email" className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    className="input input-bordered"
                                    required
                                />
                            </div>

                            {/* Password Field */}
                            <div className="form-control mt-4">
                                <label htmlFor="password" className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    placeholder="Enter your password"
                                    className="input input-bordered"
                                    required
                                />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            {/* Login Button */}
                            <div className="form-control mt-6">
                                <button type="submit" className="btn bg-[#FF3811] w-full">Login</button>
                            </div>

                            {/* Signup Prompt */}
                            <p className="text-center text-[#737373] text-sm mt-4">
                               

                                or sing up within
                            </p>

                            <div className='flex justify-center items-center gap-2 mt-4'>
                                <span className='text-blue-500'><FaFacebook /></span>
                                <span className='text-blue-500'><IoLogoLinkedin /></span>
                                <span><FcGoogle /></span>
                            </div>
                            <div>
                                <p className="text-center text-[#737373] text-sm mt-4">
                                    Have an account? <a href="#" className="link link-hover text-[#FF3811] ">Sign In</a> <br />


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
