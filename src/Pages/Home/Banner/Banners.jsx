import React from 'react';

import banner1 from '../../../assets/images/banner/1.jpg';
import banner2 from '../../../assets/images/banner/2.jpg';
import banner3 from '../../../assets/images/banner/3.jpg';
import banner4 from '../../../assets/images/banner/4.jpg';
import banner5 from '../../../assets/images/banner/5.jpg';
import banner6 from '../../../assets/images/banner/6.jpg';

const banners = [
  banner1,
  banner2,
  banner3,
  banner4,
  banner5,
  banner6,
];
const Banners = () => {
    return (
        <div className="carousel w-full max-w-screen-xl mx-auto rounded-lg overflow-hidden mt-6 h-52 md:h-72 lg:h-96 relative">
           {
            banners.map((img, idx) =>
        //     <div
        //   key={idx}
        //   id={`slide${idx + 1}`}
        //   className="carousel-item relative w-full h-full"
        // >
        <div key={idx} id={`slides${idx + 1}`} className=''></div>
        
          <img
            src={img}
            className="w-full h-full object-cover"
            alt={`Banner ${idx + 1}`}
          />
          {/* Overlay content */}
          <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-16 bg-gradient-to-r from-black/70 via-black/40 to-transparent">
            <h2
              className="
                text-white
                font-inter
                font-bold
                text-[32px]
                md:text-[48px]
                lg:text-[60px]
                leading-tight
                md:leading-[60px]
                lg:leading-[75px]
                text-left
                mb-4
                drop-shadow
              "
            >
              Affordable <br /> Price For Car <br /> Servicing
            </h2>
            <p className="text-white font-semibold max-w-md mb-4 drop-shadow">
              There are many variations of passages available, but the majority have suffered alteration in some form.
            </p>
            <div className="flex gap-3">
              <button className="btn btn-secondary">Discover More</button>
              <button className="btn btn-outline btn-success">Latest Project</button>
            </div>
          </div>
          {/* Carousel navigation */}
          <div className="absolute right-4 bottom-4 flex gap-2 items-center z-10">
            <a
              href={`#slide${idx === 0 ? banners.length : idx}`}
              className="btn btn-xs btn-circle"
              aria-label="Previous Slide"
            >
              ❮
            </a>
            <a
              href={`#slide${idx === banners.length - 1 ? 1 : idx + 2}`}
              className="btn btn-xs btn-circle"
              aria-label="Next Slide"
            >
              ❯
            </a>
          </div>
        </div>
            
           )} 
        </div>
    );
};

export default Banners;