import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import checkoutImg from '../../assets/images/checkout/checkout.png';
import { AuthContext } from '../../providers/AuthProviders';
import Swal from 'sweetalert2'
// import useAxiosSecure from '../../hooks/useAxiosSecure';
// <<<<<<< HEAD
// import axios from 'axios';
// =======
// // app.use(cors({
// //   origin: 'http://localhost:5174',
// //   credentials: true,
// // }));

// >>>>>>> 778e527d0e5f9798d17bdffb339be4c00da1b8de

const CheckOut = () => {
    const service = useLoaderData();
    const { user } = useContext(AuthContext);
    const { price, title, img } = service || {};
    // const axiosSecure = useAxiosSecure();


    const handleCheckoutService = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const amount = form.amount.value;
        const date = form.date.value;
        const email = form.email.value;
        const message = form.message.value;

        const order = {
            name,
            amount,
            date,
            email,
            message,
            serviceTitle: title,
            serviceImage: img  // ✅ image add here
        };

        console.log(order);
        // form.reset();

        // send data to the backend
        fetch('https://car-doctor-server-plig.onrender.com/checkout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            
            body: JSON.stringify(order),
            credentials: 'include', // ✅ Add this line
        })
            // axios.post('http://localhost:5000/checkout', order, {
            //     withCredentials: true // ✅ এই লাইনটা দিলে cookie যাবে
            // });



            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {

                    Swal.fire({
                        title: "Order placed successfully!",
                        icon: "success",
                        draggable: true
                    });
                    form.reset();
                }
                else {
                    alert('Failed to place order. Please try again.');
                }
            })
            .catch(error => {
                console.error('Error placing order:', error);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                    footer: '<a href="#">Why do I have this issue?</a>'
                });
            });
    };

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-base-200 px-4 py-10">
            {/* Image section with overlay text (slightly left) and button at the bottom */}
            <div className="w-full flex justify-center mb-10 relative max-w-3xl rounded-xl overflow-hidden shadow-lg">
                <img
                    src={checkoutImg}
                    alt="Checkout"
                    className="w-full object-cover h-[250px] brightness-90"
                />
                {/* Overlay text, slightly left */}
                <div className="absolute top-8 left-8 bg-black/60 text-white text-xl md:text-2xl font-semibold px-4 py-2 rounded-lg shadow-md w-fit">
                    CheckOut
                </div>
                {/* Button at the bottom center */}
                <div className="absolute bottom-4 w-full flex justify-center">
                    <button
                        type="button"
                        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg text-sm md:text-base font-medium shadow-md transition-all duration-300"
                    >
                        Home/Service
                    </button>
                </div>
            </div>

            {/* Form Card below the image */}
            <div className="card bg-base-100 w-full max-w-3xl shadow-2xl p-6">
                <div className="card-body">
                    <form onSubmit={handleCheckoutService} className="space-y-4">
                        {/* First Row: Name & Due Amount */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    className="input input-bordered w-full"
                                    placeholder="Enter your name"
                                    defaultValue={user?.displayName || ''}
                                    required
                                />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text">Due Amount ($)</span>
                                </label>
                                <input
                                    type="number"
                                    name="amount"
                                    className="input input-bordered w-full"
                                    placeholder="Enter due amount"
                                    defaultValue={price}
                                    required
                                />
                            </div>
                        </div>

                        {/* Second Row: Date & Email */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="label">
                                    <span className="label-text">Service Date</span>
                                </label>
                                <input
                                    type="date"
                                    name="date"
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text">Email Address</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    className="input input-bordered w-full"
                                    placeholder="your@email.com"
                                    defaultValue={user?.email || ''}
                                    required
                                />
                            </div>
                        </div>

                        {/* Your Message Area */}
                        <div>
                            <label className="label">
                                <span className="label-text">Your Message</span>
                            </label>
                            <textarea
                                name="message"
                                className="textarea textarea-bordered w-full h-32"
                                placeholder="Write your message or any special instructions..."
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="text-center">
                            <button
                                className="btn bg-orange-500 hover:bg-orange-600 text-white text-lg px-10 py-2 mt-4"
                                type="submit"
                            >
                                Order Confirm
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;