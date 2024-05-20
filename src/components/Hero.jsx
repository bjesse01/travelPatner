import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col gap-20">
      <h1 className="sm:text-8xl text-6xl font-semibold text-white uppercase text-center">
        Become a Valued Patner
      </h1>
      <button className="border-none bg-transparent sm:text-3xl text-2xl font-normal text-white text-center">
        Join Now
      </button>
    </div>
  );
};

export default Hero;
