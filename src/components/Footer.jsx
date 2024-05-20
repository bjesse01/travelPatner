import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full flex justify-center items-center mt-20">
      <div className="text-center">
        <p>09035528300</p>
        <div className="flex gap-3 items-center justify-center text-xl py-5">
          <FaFacebookF />
          <FaTwitter />
          <FaLinkedinIn />
        </div>
        <p>&copy;2024 by jTech</p>
      </div>
    </div>
  );
};

export default Footer;
