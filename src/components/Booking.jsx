import React from "react";
import service1 from "../assets/service1.jpeg";
import service2 from "../assets/service2.jpeg";
import service3 from "../assets/service3.jpeg";

const Booking = () => {
  return (
    <div>
      <div className="sm:px-20 py-20">
        <h1 className="text-5xl text-center font-mono mb-20 sm:mb-0">
          Our Services
        </h1>
        <div className="sm:my-20 grid grid-col-1 place-items-center sm:flex items-center justify-around gap-y-7">
          <div className="w-[300px] border border-gray-300">
            <img className="w-full h-[300px]" src={service1} alt="" />
            <h3 className="text-center text-2xl font-light pb-5 pt-4">
              Service Name
            </h3>
            <div className="bg-gray-300 h-[1px] mx-10"></div>
            <p className="pl-5 font-light text-lg pt-5">1 hr</p>
            <p className="pl-5 font-light text-lg pt-1">US$19.99</p>
            <button className="ml-5 my-4 bg-gray-500 text-white px-4 py-2">
              Book Now
            </button>
          </div>
          <div className="w-[300px] border border-gray-300">
            <img className="w-full h-[300px]" src={service2} alt="" />
            <h3 className="text-center text-2xl font-light pt-4 pb-5">
              Service Name
            </h3>
            <div className="bg-gray-300 h-[1px] mx-10"></div>
            <p className="pl-5 font-light text-lg pt-5">1 hr</p>
            <p className="pl-5 font-light text-lg pt-1">US$19.99</p>
            <button className="ml-5 my-4 bg-gray-500 text-white px-4 py-2">
              Book Now
            </button>
          </div>
          <div className="w-[300px] border border-gray-300">
            <img className="w-full h-[300px]" src={service3} alt="" />
            <h3 className="text-center text-2xl font-light pt-4 pb-5">
              Service Name
            </h3>
            <div className="bg-gray-300 h-[1px] mx-10"></div>
            <p className="pl-5 font-light text-lg pt-5">1 hr</p>
            <p className="pl-5 font-light text-lg pt-1">US$19.99</p>
            <button className="ml-5 my-4 bg-gray-500 text-white px-4 py-2">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
