import React, { useState } from "react";
import { Link } from "react-scroll";
import menuImage from "./assets/bars-solid.svg";

const Navbar = ({ color }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={`flex flex-row justify-normal ${color} top-0 w-full`}>
      <span className="basis-1/3 m-5 p-5 ">GIOK GUIM</span>

      <nav className="basis-2/3 right-0 m-5 p-5 gap-5 flex justify-end max-md:flex max-md:flex-col overflow-hidden z-10">
        <button className="flex justify-end">
          <img
            src={menuImage}
            alt="menu image"
            className="max-md:w-[30px] max-md:h-[30px]"
            onClick={() => setToggle(!toggle)}
          />
        </button>
        <Link
          to="home"
          // className=" font-extrabold text-white cursor-pointer hover:text-sky-950 "
          className={
            toggle
              ? "font-extrabold top-0 text-neutral-400 cursor-pointer hover:text-sky-950 text-end"
              : "font-extrabold text-neutral-400 cursor-pointer hover:text-sky-950 max-md:hidden"
          }
        >
          Home
        </Link>
        <Link
          to="about"
          className={
            toggle
              ? "font-extrabold top-0 text-neutral-400 cursor-pointer hover:text-sky-950 text-end"
              : "font-extrabold text-neutral-400 cursor-pointer hover:text-sky-950 max-md:hidden"
          }
        >
          About
        </Link>
        <Link
          to="portfolio"
          className={
            toggle
              ? "font-extrabold top-0 text-neutral-400 cursor-pointer hover:text-sky-950 text-end"
              : "font-extrabold text-neutral-400 cursor-pointer hover:text-sky-950 max-md:hidden"
          }
        >
          Portfolio
        </Link>
        <Link
          to="contact"
          className={
            toggle
              ? "font-extrabold top-0 text-neutral-400 cursor-pointer hover:text-sky-950 text-end"
              : "font-extrabold text-neutral-400 cursor-pointer hover:text-sky-950 max-md:hidden"
          }
        >
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
