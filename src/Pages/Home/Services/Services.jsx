import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import useServices from '../../../hooks/useServices';

const Services = () => {

    const services = useServices();
    // const [services, setServices] = useState([]);

    // useEffect(() => {
    //     fetch('http://localhost:5000/services')
    //         .then(res => res.json())
    //         .then(data => setServices(data));
    // }, []);

    return (
        <div className="py-16 px-4 max-w-screen-xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
                <p className="text-xl text-[#FF3811] font-semibold">Service</p>
                <h2 className="text-5xl text-[#151515] font-bold mt-1">Our Service Area</h2>
                <p className="text-[#737373] mt-4 max-w-2xl mx-auto">
                    The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                </p>
            </div>

            {/* Services Grid */}
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    services.map(service => (
                        <ServiceCard key={service._id} service={service} />
                    ))
                }
            </div>
        </div>
    );
};

export default Services;
