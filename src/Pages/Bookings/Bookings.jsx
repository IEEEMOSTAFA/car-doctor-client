import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProviders';

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/checkout?email=${user.email}`)
        .then(res => res.json())
        .then(data => setBookings(data))
        .catch(error => console.error("Error fetching bookings:", error));
    }
  }, [user]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">My Bookings</h2>

      {bookings.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            {/* table head */}
            <thead className="bg-base-200 text-base font-semibold">
              <tr>
                <th>#</th>
                <th>Service</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Message</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td className="font-bold text-base">{booking.serviceTitle}</td>
                  <td>{booking.date}</td>
                  <td>${booking.amount}</td>
                  <td className="max-w-xs truncate">{booking.message}</td>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={booking.serviceImage} alt="service" />
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
            {/* table footer */}
            <tfoot>
              <tr className="text-sm font-semibold bg-base-200">
                <td colSpan="6">Total Bookings: {bookings.length}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      ) : (
        <p className="text-gray-500">No bookings found for your account.</p>
      )}
    </div>
  );
};

export default Bookings;
