import React, { useState } from "react";

const Circle = () => {
  const [circle, setCircle] = useState({});
  const handleMouseEnter = (e) => {
    setCircle({
      transform: "translateX(300px)",
      transition: "transform 0.5s linear, opacity 0.5s linear",
      opacity: "0",
    });
  };

  const handleMouseLeave = (e) => {
    setCircle({
      transform: "translateX(0px)",
      transition: "transform 0.5s linear",
    });
  };

  return (
    <div onMouseMove={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div
        style={circle}
        className=" w-[100px] h-[100px] bg-amber-800 rounded-full translate-x-2 hover:bg-slate-400"
      ></div>
    </div>
  );
};

export default Circle;
