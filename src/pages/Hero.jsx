import React, { useEffect, useState } from "react";
import Dice from "../components/dice";
import codingImage from "../images/computer-program-coding-screen_53876-138060.jpg";

const Hero = () => {
  const color = "#64748B";
  const fontSize = "40px";
  const fontWeight = "bold";

  const textStyle = {
    transformStyle: "preserve-3d",
    transition: "opacity 3s linear",
    opacity: "0.5",
  };
  const letterStyle1 = {
    transform: "translate3d(-20px,-20px,5px)",
    opacity: "0",
    fontSize,
    fontWeight,
    color,
  };
  const letterStyle2 = {
    transform: "translate3d(0px,20px,-5px)",
    opacity: "0",
    fontSize,
    fontWeight,
    color,
  };
  const letterStyle3 = {
    transform: "translate3d(40px,-50px,-5px)",
    opacity: "0",
    fontSize,
    fontWeight,
    color,
  };
  const letterStyle4 = {
    transform: "translate3d(30px,50px,10px)",
    opacity: "0",
    fontSize,
    fontWeight,
    color,
  };
  const letterStyle5 = {
    transform: "translate3d(30px,0px,-5px)",
    opacity: "0",
    fontSize,
    fontWeight,
    color,
  };
  const letterStyle6 = {
    transform: "translate3d(-60px,0px,10px)",
    opacity: "0",
    fontSize,
    fontWeight,
    color,
  };
  const letterStyle7 = {
    transform: "translate3d(0px,20px,10px)",
    opacity: "0",
    fontSize,
    fontWeight,
    color,
  };
  const letterStyle8 = {
    transform: "translate3d(20px,-20px,-5px)",
    opacity: "0",
    fontSize,
    fontWeight,
    color,
  };
  const letterStyle9 = {
    transform: "translate3d(-100px,40px,-5px)",
    opacity: "0",
    fontSize,
    fontWeight,
    color,
  };

  const photoBehindText = {
    WebkitTextFillColor: "transparent",
    WebkitBackgroundClip: "text",
    backgroundImage: `url(${codingImage})`,
  };

  return (
    <div className="max-md:max-w-[250px] grid grid-cols-1 place-items-center m-auto">
      <div
        style={photoBehindText}
        className="max-md:max-w-[250px] leading-none w-[500px] my-0 py-0 text-left drop-shadow-2xl bg-cover text-[100px] font-extrabold"
      >
        <h1 className=" text-center lg:text-left">
          <small>Hello, I'm</small> Giok Guim
        </h1>
      </div>

      <div className="max-md:max-w-[250px] relative place-content-start p-0 w-[500px] h-[300px] flex flex-row ">
        <div className=" leading-loose basis-1/2 w-[300px] items-baseline">
          <p className=" text-[30px] w-[300px] left-0 font-extrabold text-slate-500 text-opacity-100 my-[30px]">
            I develop using ..
          </p>
          <span
            key={1}
            style={textStyle}
            className=" animate-show1 absolute  w-[250px] left-0 "
          >
            <l style={letterStyle1} className=" inline-block  animate-move">
              J
            </l>
            <l style={letterStyle2} className="inline-block  animate-move ">
              a
            </l>

            <l style={letterStyle3} className="inline-block  animate-move ">
              v
            </l>
            <l style={letterStyle4} className="inline-block  animate-move ">
              a
            </l>
            <l style={letterStyle5} className="inline-block  animate-move ">
              s
            </l>
            <l style={letterStyle6} className="inline-block  animate-move ">
              c
            </l>
            <l style={letterStyle7} className="inline-block  animate-move ">
              r
            </l>
            <l style={letterStyle1} className="inline-block  animate-move ">
              i
            </l>
            <l style={letterStyle8} className="inline-block  animate-move ">
              p
            </l>
            <l style={letterStyle9} className="inline-block  animate-move ">
              t
            </l>
          </span>
          <span key={2} className=" animate-show2 absolute w-[250px] left-0 ">
            <l style={letterStyle1} className=" inline-block  animate-move">
              R
            </l>
            <l style={letterStyle2} className="inline-block  animate-move ">
              e
            </l>

            <l style={letterStyle3} className="inline-block  animate-move ">
              a
            </l>

            <l style={letterStyle5} className="inline-block animate-move ">
              c
            </l>

            <l style={letterStyle7} className="inline-block  animate-move ">
              t
            </l>
          </span>
          <span key={2} className=" animate-show3 absolute w-[250px] left-0 ">
            <l style={letterStyle1} className=" inline-block animate-move">
              T
            </l>
            <l style={letterStyle2} className="inline-block  animate-move ">
              a
            </l>

            <l style={letterStyle3} className="inline-block  animate-move ">
              i
            </l>

            <l style={letterStyle5} className="inline-block  animate-move ">
              l
            </l>

            <l style={letterStyle3} className="inline-block  animate-move ">
              w
            </l>
            <l style={letterStyle7} className="inline-block  animate-move ">
              i
            </l>
            <l style={letterStyle9} className="inline-block animate-move ">
              n
            </l>
            <l style={letterStyle8} className="inline-block  animate-move ">
              d
            </l>
          </span>
        </div>
        <div className="max-md:hidden basis-1/2 flex justify-center py-0 my-0 items-start">
          <Dice />
        </div>
      </div>
    </div>
  );
};

export default Hero;
