import React, { useState } from "react";
import folderImage from "../assets/folder-solid.svg";
import plusImage from "../assets/square-plus-regular.svg";
import portfolioOneImage from "../assets/portfolio_one.png";

const Portfolio = () => {
  const [toggle, setToggle] = useState(false);
  const letterStyle1 = {
    // transform: "translate(0,-100px)",
    background: "linear-gradient(to top, red, yellow)",
    transform: "background 0.3s ease",
    // opacity: "0.6",
    // hover: {
    //   background: "white", // Set the color for the middle
    // },
  };
  return (
    <div
      id="portfolio"
      className=" max-[400px]:bg-slate-300 max-[400px]:w-[380px] bg-cyan-500 z-100 "
    >
      <div className=" p-28 max-[400px]:px-0">
        <div className=" text-center items-center place-content-center  w-full flex justify-center">
          <img
            src={folderImage}
            alt="folder image"
            className="w-[20px] h-[20px]"
          />
          <h2>&nbsp; PORTFOLIO</h2>
        </div>
        <div className=" flex justify-center gap-10 m-10 z-40  relative">
          <div
            onMouseEnter={() => setToggle(true)}
            onMouseLeave={() => setToggle(false)}
            className=" overflow-hidden w-[300px] h-[400px] border-solid border-2 rounded-lg grid grid-cols-1 z-20 "
          >
            <div
              // style={letterStyle1}

              className={
                toggle
                  ? "transition-all ease-in duration-300 relative z-0 bg-blue-600 top-0 w-[300px] h-full opacity-70"
                  : "transition-all ease-in duration-300 relative z-0 bg-blue-600 -top-full w-[300px] h-full opacity-70"
              }
              // className="transition-all ease-in duration-500 relative z-0 bg-blue-600 -top-full w-[300px] h-full overflow-hidden hover:top-0"
            ></div>
            <div className="absolute w-[300px] z-30 flex justify-center ">
              <a href="">
                <img
                  src={plusImage}
                  alt="plus image"
                  className={
                    toggle
                      ? " transition-all ease-in duration-300 w-[30px] h-[30px] translate-y-[185px] opacity-100 "
                      : "transition-all ease-in duration-300 w-[30px] h-[30px] translate-y-[300px] opacity-0"
                  }
                />
              </a>
            </div>
            <div
              className={
                toggle
                  ? "absolute z-50 w-[300px] transition-all ease-in duration-300 text-center translate-y-[230px] opacity-100"
                  : "absolute z-50 w-[300px] transition-all ease-in duration-300 text-center translate-y-[0px] opacity-0"
              }
            >
              <span>MERN Stack</span>
              <h3>Booking App</h3>
            </div>
            <div className="absolute w-[298px] h-[400px] -z-10 rounded-lg overflow-hidden ">
              <img
                src={portfolioOneImage}
                alt="portfolio image"
                className="h-full opacity-80 "
              />
            </div>
            <div
              className={
                toggle
                  ? "transition-all ease-in duration-300 relative z-10 bg-blue-600 top-0 w-[300px] h-full opacity-70 "
                  : "transition-all ease-in duration-300 relative z-0 bg-blue-600 top-full w-[300px] h-full opacity-70"
              }
            ></div>
          </div>
          {/* <div className=" w-[300px] h-[400px] border-solid border-2 rounded-lg">
            two
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
