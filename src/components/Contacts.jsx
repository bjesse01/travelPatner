import React from "react";

import "./Contacts.css";

const Contacts = () => {
  return (
    <div id="contact" className="py-10 px-10 text-white">
      <h1 className="sm:text-5xl text-4xl font-normal text-center uppercase py-10 sm:py-16">
        Join Us
      </h1>
      <form className="pt-3 py-5">
        <h3 className="font-normal text-center text-3xl pb-7">
          Get Started Now
        </h3>
        <div className="grid grid-col-1 sm:grid-cols-2 gap-3">
          <div className="w-full flex flex-col gap-1">
            <label className="text-2xl tracking-wide font-mono">
              First Name
            </label>
            <input
              className="bg-transparent border-b-2 text-xl tracking-wider font-mono outline-none"
              type="text"
              name="fullname"
            />
          </div>
          <div className="w-full flex flex-col gap-1">
            <label className="text-2xl tracking-wide font-mono">
              Last Name
            </label>
            <input
              type="text"
              name="fullname"
              className="bg-transparent border-b-2 text-xl tracking-wider font-mono outline-none"
            />
          </div>
          <div className="w-full flex flex-col gap-1">
            <label className="text-2xl tracking-wide font-mono">
              Email Name
            </label>
            <input
              type="text"
              name="fullname"
              className="bg-transparent border-b-2 text-xl tracking-wider font-mono outline-none"
            />
          </div>
          <div className="w-full flex flex-col gap-1">
            <label className="text-2xl tracking-wide font-mono">
              Phone Name
            </label>
            <input
              type="text"
              name="fullname"
              className="bg-transparent border-b-2 text-xl tracking-wider font-mono outline-none"
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-1 my-5">
          <label className="text-2xl tracking-wide font-mono">Company</label>
          <input
            type="text"
            name="fullname"
            className="bg-transparent border-b-2 text-xl tracking-wider font-mono outline-none"
          />
        </div>
        <div className="w-full flex flex-col gap-1 my-5">
          <label className="text-2xl tracking-wide font-mono">Position</label>
          <input
            type="text"
            name="fullname"
            className="bg-transparent border-b-2 text-xl tracking-wider font-mono outline-none"
          />
        </div>
        <div className="flex justify-center items-center py-8">
          <input
            type="button"
            value="Submit"
            className="text-xl bg-white text-black px-16 py-2"
          />
        </div>
      </form>
    </div>
  );
};

export default Contacts;
