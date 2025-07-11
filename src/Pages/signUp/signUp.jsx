import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import loginImg from '../../assets/images/login/login.svg';
import { FaFacebook } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../providers/AuthProviders';
import Swal from 'sweetalert2';





const SignUp = () => {
    const { createUser } = useContext(AuthContext);

    const handleSignUP = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                
                  Swal.fire({
                                     title: "User created successfully!",
                                     icon: "success",
                                     draggable: true
                                 });
                form.reset();
            })
            .catch(error => {
                console.error('Error creating user:', error);
                
                Swal.fire({
                                    icon: "error",
                                    title: "Oops...",
                                    text: "Failed to create user! Please try again.",
                                    footer: '<a href="#">Why do I have this issue?</a>'
                                });
                // Handle error (e.g., show a message to the user)
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
            <div className="hero-content flex-col lg:flex-row gap-10 w-full max-w-5xl">

                {/* Image Section */}
                <div className="w-full lg:w-1/2 mr-12 flex justify-center">
                    <img src={loginImg} alt="Sign Up Illustration" className="w-80 md:w-96 rounded-lg shadow-lg" />
                </div>

                {/* Form Section */}
                <div className="card w-full max-w-sm bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-3xl font-bold text-center text-[#FF3811]">Sign Up</h2>

                        <form onSubmit={handleSignUP}>
                            {/* Name Field */}
                            <div className="form-control mt-4">
                                <label htmlFor="name" className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    name='name'
                                    placeholder="Enter your name"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            {/* Email Field */}
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

                            {/* Password Field */}
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

                            {/* Sign Up Button */}
                            <div className="form-control mt-6">
                                <button type="submit" className="btn bg-[#FF3811] w-full hover:bg-[#d4320f] transition-colors duration-200">Sign Up</button>
                            </div>

                            {/* Social Signup */}
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
                                    Already have an account? <Link to="/login" className="link link-hover text-[#FF3811] ">Login</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SignUp;