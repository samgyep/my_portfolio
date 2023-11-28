import React, { useState } from "react";
import yourImage from "../images/IMG_3676.jpg";
import Circle from "../components/Circle";
import javascriptImage from "../assets/square-js.svg";
import htmlImage from "../assets/html5.svg";
import csslImage from "../assets/css3.svg";
import reactImage from "../assets/react.svg";
import nodeImage from "../assets/node.svg";
import Hero from "./Hero";
import Navbar from "../Navbar";

const Home = () => {
  const imageStyles = {
    perspective: "1000px",
    display: "inline-block",
  };

  const [tilt, setTilt] = useState({});
  const [tiltIcon, setTiltIcon] = useState({});

  const handleMouseMove = (e) => {
    const xPos = (e.clientX / window.innerWidth - 0.5) * 20; // Adjust tilt sensitivity
    const yPos = (e.clientY / window.innerHeight - 0.5) * 20; // Adjust tilt sensitivity

    setTilt({
      transform: `rotateY(${xPos}deg) rotateX(${yPos}deg)`,
    });
    setTiltIcon({
      rotate: "-12deg",
      transition: "rotate 0.2s linear",
    });
  };

  const handleMouseLeave = () => {
    setTilt({ transform: "none", transition: "transform 0.5s linear" });
    setTiltIcon({ rotate: "0deg", transition: "rotate 0.2s linear" });
  };

  return (
    <div id="home">
      <div className="absolute z-50 w-full">
        <Navbar color="bg-amber-50" />
      </div>

      <div className=" bg-amber-50 flex justify-center flex-row  max-lg:grid max-lg:col-span-1">
        <div className=" order-2 basis-1/2 flex justify-center my-[150px] max-lg:order-first">
          <div
            style={imageStyles}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div style={tilt} className=" relative ">
              <ul>
                <li className="max-md:hidden absolute left-[-30px] ">
                  <img
                    src={javascriptImage}
                    alt="javascript image"
                    className=" w-[50px] h-[50px] rotate-12 hover:scale-110"
                    style={tiltIcon}
                  />
                </li>
                <li className="max-md:hidden absolute right-[-30px]">
                  <img
                    src={htmlImage}
                    alt="html image"
                    className=" w-[50px] h-[50px] rotate-12 hover:scale-110"
                    style={tiltIcon}
                  />
                </li>
                <li className="max-md:hidden absolute left-[-30px] top-[100px]">
                  <img
                    src={csslImage}
                    alt="html image"
                    className=" w-[50px] h-[50px] bg-opacity-50 rotate-12 hover:scale-110"
                    style={tiltIcon}
                  />
                </li>
                <li className="absolute right-[-30px] top-[100px] perspect">
                  <img
                    src={reactImage}
                    alt="html image"
                    className="max-md:hidden w-[50px] h-[50px] rotate-12 hover:scale-110"
                    style={tiltIcon}
                  />
                </li>
                <li className="max-md:hidden absolute left-[-30px] top-[300px] bg-opacity-50 ">
                  <img
                    src={nodeImage}
                    alt="html image"
                    className=" w-[50px] h-[50px] rotate-12 hover:scale-110"
                    style={tiltIcon}
                  />
                </li>
              </ul>
              <img
                src={yourImage}
                alt="my image"
                className="max-md:max-w-[250px] max-md:max-h-[250px] w-[370px] h-[350px] block "
                // style={imageStyles}
              />
            </div>
          </div>
        </div>
        <div className=" left-0 lg:order-first basis-1/2 flex justify-center">
          <Hero />
        </div>
      </div>
    </div>
  );
};

export default Home;
