import React from "react";
import { Link } from "react-router-dom";
import images from "../assets/services.jpeg";

const Services = () => {
  return (
    <div className="bg-white sm:px-10 py-5 sm:py-20">
      <div className="w-full text-center mb-10 sm:mb-20">
        <h1 className="sm:text-5xl text-4xl font-semibold tracking-wide uppercase">
          Available Services
        </h1>
        <p className="font-normal text-xl sm:text-2xl mt-10">
          Extraordinary Insights
        </p>
      </div>
      <div className="sm:flex grid grid-col-1 place-items-center items-center justify-around">
        <div className="w-[320px] text-center flex flex-col items-center sm:mt-0">
          <img
            className="w-[300px] h-[300px] rounded-full p-5"
            src={images}
            alt=""
          />
          <h5 className="uppercase font-medium text-2xl sm:text-3xl pb-4">
            Corporate Travel Consultation
          </h5>
          <p className="font-normal text-lg sm:text-xl pb-5">
            Realize Your Vision
          </p>
          <Link>Get Started</Link>
        </div>
        <div className="w-[320px] text-center flex flex-col items-center mt-6 sm:mt-0">
          <img
            className="w-[300px] h-[300px] rounded-full p-5"
            src={images}
            alt=""
          />
          <h5 className="uppercase font-medium text-2xl sm:text-3xl pb-4">
            Corporate Travel Consultation
          </h5>
          <p className="font-normal text-lg sm:text-xl pb-5">
            Realize Your Vision
          </p>
          <Link>Get Started</Link>
        </div>
        <div className="w-[320px] text-center flex flex-col items-center mt-6 sm:mt-0">
          <img
            className="w-[300px] h-[300px] rounded-full p-5"
            src={images}
            alt=""
          />
          <h5 className="uppercase font-medium text-2xl sm:text-3xl pb-4">
            Corporate Travel Consultation
          </h5>
          <p className="font-normal text-lg sm:text-xl pb-5">
            Realize Your Vision
          </p>
          <Link>Get Started</Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
