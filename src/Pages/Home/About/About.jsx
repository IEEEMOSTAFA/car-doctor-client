
import React from 'react';
import aboutImg from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <section className="bg-base-200 py-16 px-4">
            <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-12 items-start">

                {/* Images Section */}
                <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
                    <div className="relative w-[80%]">
                        <img
                            src={aboutImg}
                            alt="Team member working"
                            className="w-full rounded-xl shadow-xl"
                        />
                        {/* Second image restored to bottom-right */}
                        <img
                            src={parts}
                            alt="Mechanical parts"
                            className="w-40 md:w-48 rounded-xl border-4 border-white shadow-lg absolute -right-6 -bottom-6"
                            style={{ zIndex: 10 }}
                        />
                    </div>
                </div>

                {/* Text Section */}
                <div className="w-full lg:w-1/2 flex flex-col justify-start">
                    <h4 className="text-[#FF3811] font-bold uppercase tracking-wide mb-3">About Us</h4>
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                        We are highly qualified <br /> with years of experience
                    </h2>
                    <p className="text-[#737373] mb-4">
                        With a strong foundation in our field, we bring reliable expertise and trustworthy service. Our team is committed to excellence and innovation in every project.
                    </p>
                    <p className="text-[#737373] mb-6">
                        From design to deployment, we prioritize customer satisfaction and deliver services that make a real difference.
                    </p>
                    <button className="btn bg-[#FF3811] w-fit hover:bg-[#d4320f] transition-colors duration-200">
                        Get More Info
                    </button>
                </div>
            </div>
        </section>
    );
};

export default About;
