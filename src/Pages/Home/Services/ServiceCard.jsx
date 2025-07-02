// import React from 'react';
// import { FaLongArrowAltRight } from "react-icons/fa";
// const ServiceCard = ({ service }) => {
//     const { title, img, price } = service;

//     return (
//         <div className="card bg-base-100 w-full shadow-md border hover:shadow-lg transition">
//             <figure className="px-6 pt-6">
//                 <img src={img} alt={title} className="rounded-xl w-full h-48 object-cover" />
//             </figure>
//             <div className="card-body text-left">
//                 <h2 className="card-title">{title}</h2>
//                 {/* <p className="text-gray-600">{description}</p> */}
//                 <div className='flex justify-between items-center mt-4'>
//                     <div className="text-lg font-bold text-primary mt-2">${price}</div>
//                     <div > <FaLongArrowAltRight /></div>
//                 </div>

//             </div>
//         </div>
//     );
// };

// export default ServiceCard;

























import React from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";

const ServiceCard = ({ service }) => {
    const { title, img, price } = service;

    return (
        <div className="card bg-base-100 w-full shadow-md border hover:shadow-lg transition">
            <figure className="px-6 pt-6">
                <img src={img} alt={title} className="rounded-xl w-full h-48 object-cover" />
            </figure>
            <div className="card-body text-left">
                <h2 className="card-title">{title}</h2>
                {/* <p className="text-gray-600">{description}</p> */}
                <div className='flex justify-between items-center mt-4'>
                    <div className="text-lg font-bold text-[#FF3811] mt-2">${price}</div>
                    <div>
                        <FaLongArrowAltRight className="text-[#FF3811] text-2xl" />
                        {/* <p>Icon</p> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
