import React, { useEffect, useRef, useState } from "react";
import javascriptImage from "../assets/square-js.svg";
import htmlImage from "../assets/html5.svg";
import csslImage from "../assets/css3.svg";
import reactImage from "../assets/react.svg";
import nodeImage from "../assets/node.svg";
import tainwindImage from "../assets/tailwindcss.svg";

const Dice = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  //   const cubeRef = useRef(null);
  //   useEffect(() => {
  //     const cube = cubeRef.current;
  const handleMouseMove = (e) => {
    const y = (e.clientX / window.innerWidth - 0.5) * 1800; // Get the horizontal movement
    const x = -(e.clientY / window.innerHeight - 0.5) * 1800; // Get the vertical movement

    setRotation({ x, y });
  };

  // const newX = rotation.x + 90; // Increment the rotation angle by 90 degrees on each click
  // const newY = rotation.y + 90;

  // setRotation({ x: newX % 360, y: newY % 360 }); // Lim

  //       const rect = cube.getBoundingClientRect();
  //       const mouseX = e.clientX - rect.left;
  //       const mouseY = e.clientY - rect.top;

  //       const rotationY = ((mouseX - rect.width / 2) / rect.width) * 90;
  //       const rotationX = (-(mouseY - rect.height / 2) / rect.height) * 90;

  //       cube.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
  //     };

  //     cube.addEventListener("mousemove", handleMouseMove);

  //     return () => {
  //       cube.removeEventListener("mousemove", handleMouseMove);
  //     };
  //   }, []);

  const cube = {
    perspective: "10000px",
    fontSize: "4em",
    width: "2em",
    margin: "1.5em auto",
    transformStyle: "preserve-3d",
    // transform: `rotateX(${rotation.x}deg) `,
    transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) `,
    display: "inline-block",
  };
  const side = {
    position: "absolute",
    width: "2em",
    height: "2em",
    background: "rgba(100, 100, 100, 0.9)",
    border: "1px solid black",
    textAlign: "center",
    lineHeight: "2em",
  };

  //   const front = { ...side };
  //   const top = { ...side, transform: "rotateX(90deg) translateZ(2em) " };
  //   const right = { ...side, transform: "rotateY(90deg) " };
  //   const left = { ...side, transform: "rotateY(-90deg) " };
  //   const bottom = { ...side, transform: "rotateX(-90deg)  " };
  //   const back = { ...side, transform: "rotateY(-180deg) translateZ(1em)" };

  const front = { ...side, transform: "translateZ(1em)" };
  const top = { ...side, transform: "rotateX(90deg) translateZ(1em)" };
  const right = { ...side, transform: "rotateY(90deg) translateZ(1em)" };
  const left = { ...side, transform: "rotateY(-90deg) translateZ(1em)" };
  const bottom = { ...side, transform: "rotateX(-90deg) translateZ(1em)" };
  const back = { ...side, transform: "rotateY(-180deg) translateZ(1em)" };

  return (
    <div
      style={cube}
      onMouseMove={handleMouseMove}
      className=" flex justify-center align-middle h-[100px]"
    >
      <div style={front} className=" flex justify-center ">
        <img src={javascriptImage} alt="javascript image" />
      </div>
      <div style={back} className=" flex justify-center ">
        <img src={htmlImage} alt="html image" />
      </div>
      <div style={right} className=" flex justify-center ">
        <img src={csslImage} alt="css image" />
      </div>
      <div style={left} className=" flex justify-center ">
        <img src={reactImage} alt="react image" />
      </div>
      <div style={top} className=" flex justify-center ">
        <img src={nodeImage} alt="nodejs image" />
      </div>
      <div style={bottom} className=" flex justify-center ">
        <img src={tainwindImage} alt="tailwindcss image" />
      </div>
    </div>
  );
};

export default Dice;
