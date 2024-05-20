import React from "react";
import { PiThumbsUpDuotone } from "react-icons/pi";
import { IoChatbubblesOutline } from "react-icons/io5";
import { TfiWorld } from "react-icons/tfi";
import { BsFileText } from "react-icons/bs";

import "./Feature.css";

const Features = () => {
  return (
    <div className="bg-white">
      <div className="sm:flex">
        <div className="flex-1 px-10 py-16">
          <h2 className="text-5xl text-center font-normal pb-20">
            Exclusive Feature For You
          </h2>
          <div className="grid grid-cols-2 gap-y-5">
            <div className="flex flex-col items-center">
              <PiThumbsUpDuotone className="text-5xl" />
              <h3 className="text-2xl font-normal text center py-5">
                National Standards
              </h3>
              <p className="text-2xl font-thin">Quanlity Matters</p>
            </div>
            <div className="flex flex-col items-center">
              <IoChatbubblesOutline className="text-5xl" />
              <h3 className="text-2xl font-normal text center py-5">
                24/7 Servce
              </h3>
              <p className="text-2xl font-thin">Exceptional</p>
            </div>
            <div className="flex flex-col items-center">
              <TfiWorld className="text-5xl" />
              <h3 className="text-2xl font-normal text center py-5">
                Multilingual Staff
              </h3>
              <p className="text-2xl font-thin">Exceeding Expectations</p>
            </div>
            <div className="flex flex-col items-center">
              <BsFileText className="text-5xl" />
              <h3 className="text-2xl font-normal text center py-5">
                Constructive Assessments
              </h3>
              <p className="text-2xl font-thin">For all your needs</p>
            </div>
          </div>
        </div>
        <div className="flex-1" id="flex"></div>
      </div>
    </div>
  );
};

export default Features;
