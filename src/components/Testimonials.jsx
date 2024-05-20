import React from "react";
import person1 from "../assets/person1.jpeg";
import person2 from "../assets/person2.jpeg";
import person3 from "../assets/person3.jpeg";

const Testimonials = () => {
  return (
    <div className="bg-white py-20 sm:px-20">
      <div className="grid grid-col-1 place-items-center sm:flex items-center justify-around">
        <div className="w-[300px] flex flex-col items-center mt-10 sm:mt-0">
          <img className="w-full h-[300px] rounded-full" src={person1} alt="" />
          <p className="text-center py-8">
            This is your Testimonial quote. Give your customers the stage to
            tell the world how great you are!
          </p>
          <h3 className="text-xl font-medium">Quinn Davis</h3>
        </div>
        <div className="w-[300px] flex flex-col items-center mt-10 sm:mt-0">
          <img className="w-full h-[300px] rounded-full" src={person2} alt="" />
          <p className="text-center py-8">
            This is your Testimonial quote. Give your customers the stage to
            tell the world how great you are!
          </p>
          <h3 className="text-xl font-medium">Quinn Davis</h3>
        </div>
        <div className="w-[300px] flex flex-col items-center mt-10 sm:mt-0">
          <img className="w-full h-[300px] rounded-full" src={person3} alt="" />
          <p className="text-center py-8">
            This is your Testimonial quote. Give your customers the stage to
            tell the world how great you are!
          </p>
          <h3 className="text-xl font-medium">Quinn Davis</h3>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
