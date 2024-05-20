import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="w-full px-10 py-4 shadow-lg rounded-b-lg">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-2xl">airlineReservation</h1>

        <ul className="hidden items-center gap-5 md:flex">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/booking"}>Book Online</Link>
          </li>
        </ul>
        <div className="sm:hidden">
          <GiHamburgerMenu
            className="text-2xl"
            onClick={() => setToggleMenu(true)}
          />
        </div>
        {toggleMenu && (
          <div className="p-10 shadow-md absolute top-0 right-0 bg-white flex flex-col rounded-md">
            <button
              className="absolute text-xl top-3 right-3"
              onClick={() => setToggleMenu(false)}
            >
              X
            </button>
            <ul className="flex flex-col items-center gap-5 text-lg font-mono mt-5">
              <li>
                <Link to={"/"} onClick={() => setToggleMenu(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to={"/booking"} onClick={() => setToggleMenu(false)}>
                  Book Online
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
