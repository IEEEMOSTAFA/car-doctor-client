// import React, { useContext, useEffect, useState } from 'react';
// import { AuthContext } from '../../providers/AuthProviders';
// import Swal from 'sweetalert2';
// import axios from 'axios';
// import useAxiosSecure from '../../hooks/useAxiosSecure';
// const Bookings = () => {
//   const { user } = useContext(AuthContext);
//   const [bookings, setBookings] = useState([]);
//   const axiosSecure = useAxiosSecure();
// //  const url = `http://localhost:5000/checkout?email=${user.email}`
//   useEffect(() => {
//     if (user?.email) {
//       // const url = `http://localhost:5000/checkout?email=${user.email}`;
//       const url = `/checkout?email=${user.email}`;
       
//       axiosSecure.get(url)
//         .then(res => setBookings(res.data))

//       // axios.get(url, { withCredentials: true })
//       // .then(res =>{setBookings(res.data)})



//       // fetch(`http://localhost:5000/checkout?email=${user.email}`)
//       //   .then(res => res.json())
//       //   .then(data => setBookings(data))
//       //   .catch(error => console.error("Error fetching bookings:", error));
//     }
//   }, [url, axiosSecure]);





  

// const handleDelete = id => {
//   Swal.fire({
//     title: 'Are you sure?',
//     text: "You want to delete this booking!",
//     icon: 'warning',
//     showCancelButton: true,
//     confirmButtonColor: '#d33',
//     cancelButtonColor: '#3085d6',
//     confirmButtonText: 'Yes, delete it!'
//   }).then((result) => {
//     if (result.isConfirmed) {
//       fetch(`http://localhost:5000/checkout/${id}`, {
//         method: 'DELETE',
//         credentials: 'include'
        
//       })
//         .then(res => res.json())
//         .then(data => {
//           if (data.deletedCount > 0) {
//             Swal.fire('Deleted!', 'Booking has been deleted.', 'success');
//             setBookings(bookings.filter(booking => booking._id !== id));
//           }
//         });
//     }
//   });
// };

// const handleUpdate = id => {
//   Swal.fire({
//     title: 'Update Booking',
//     html:
//       `<input id="date" type="text" class="swal2-input" placeholder="New Date">` +
//       `<input id="message" type="text" class="swal2-input" placeholder="New Message">`,
//     focusConfirm: false,
//     preConfirm: () => {
//       const date = document.getElementById('date').value;
//       const message = document.getElementById('message').value;
//       return { date, message };
//     }
//   }).then((result) => {
//     if (result.isConfirmed) {
//       fetch(`http://localhost:5000/checkout/${id}`, {
//         method: 'PATCH',
//         credentials: 'include',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(result.value)
//       })
//         .then(res => res.json())
//         .then(data => {
//           if (data.modifiedCount > 0) {
//             Swal.fire('Updated!', 'Booking updated successfully.', 'success');
//             // Refresh bookings
//             const updatedBookings = bookings.map(booking => {
//               if (booking._id === id) {
//                 return { ...booking, ...result.value };
//               }
//               return booking;
//             });
//             setBookings(updatedBookings);
//           }
//         });
//     }
//   });
// };


//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-6">My Bookings</h2>

//       {bookings.length > 0 ? (
//         <div className="overflow-x-auto">
//           <table className="table table-zebra w-full">
//             {/* table head */}
//             <thead className="bg-base-200 text-base font-semibold">
//               <tr>
//                 <th>#</th>
//                 <th>Service</th>
//                 <th>Date</th>
//                 <th>Amount</th>
//                 <th>Message</th>
//                 <th>Image</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>

//             <tbody>
//               {bookings.map((booking, index) => (
//                 <tr key={booking._id}>
//                   <td>{index + 1}</td>
//                   <td className="font-bold text-base">{booking.serviceTitle}</td>
//                   <td>{booking.date}</td>
//                   <td>${booking.amount}</td>
//                   <td className="max-w-xs truncate">{booking.message}</td>
//                   <td>
//                     <div className="avatar">
//                       <div className="mask mask-squircle w-12 h-12">
//                         <img src={booking.serviceImage} alt="service" />
//                       </div>
//                     </div>
//                   </td>
//                   <td>
//                     <button
//                       onClick={() => handleUpdate(booking._id)}
//                       className="btn btn-sm btn-info mr-2"
//                     >
//                       Update
//                     </button>
//                     <button
//                       onClick={() => handleDelete(booking._id)}
//                       className="btn btn-sm btn-error"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>

//             {/* table footer */}
//             <tfoot>
//               <tr className="text-sm font-semibold bg-base-200">
//                 <td colSpan="6">Total Bookings: {bookings.length}</td>
//               </tr>
//             </tfoot>
//           </table>
//         </div>
//       ) : (
//         <p className="text-gray-500">No bookings found for your account.</p>
//       )}
//     </div>
//   );
// };

// export default Bookings;










import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    if (user?.email) {
      const url = `/checkout?email=${user.email}`;
       
      axiosSecure.get(url)
        .then(res => setBookings(res.data))
        .catch(error => console.error("Error fetching bookings:", error));
    }
  }, [user?.email, axiosSecure]);

  const handleDelete = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to delete this booking!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/checkout/${id}`)
          .then(res => {
            if (res.data.deletedCount > 0) {
              Swal.fire('Deleted!', 'Booking has been deleted.', 'success');
              setBookings(bookings.filter(booking => booking._id !== id));
            }
          })
          .catch(error => {
            console.error("Error deleting booking:", error);
            Swal.fire('Error!', 'Failed to delete booking.', 'error');
          });
      }
    });
  };

  const handleUpdate = id => {
    Swal.fire({
      title: 'Update Booking',
      html:
        `<input id="date" type="text" class="swal2-input" placeholder="New Date">` +
        `<input id="message" type="text" class="swal2-input" placeholder="New Message">`,
      focusConfirm: false,
      preConfirm: () => {
        const date = document.getElementById('date').value;
        const message = document.getElementById('message').value;
        return { date, message };
      }
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/checkout/${id}`, result.value)
          .then(res => {
            if (res.data.modifiedCount > 0) {
              Swal.fire('Updated!', 'Booking updated successfully.', 'success');
              // Refresh bookings
              const updatedBookings = bookings.map(booking => {
                if (booking._id === id) {
                  return { ...booking, ...result.value };
                }
                return booking;
              });
              setBookings(updatedBookings);
            }
          })
          .catch(error => {
            console.error("Error updating booking:", error);
            Swal.fire('Error!', 'Failed to update booking.', 'error');
          });
      }
    });
  };

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
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {bookings.map((booking, index) => (
                <tr key={booking._id}>
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
                  <td>
                    <button
                      onClick={() => handleUpdate(booking._id)}
                      className="btn btn-sm btn-info mr-2"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(booking._id)}
                      className="btn btn-sm btn-error"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

            {/* table footer */}
            <tfoot>
              <tr className="text-sm font-semibold bg-base-200">
                <td colSpan="7">Total Bookings: {bookings.length}</td>
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