import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Dice from "./components/dice";
import Hero from "./pages/Hero";

// import { useHistory } from "react-router-dom";

const App = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 500) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="grid overflow-x-hidden max-w-full">
      {showNavbar && (
        <div className=" z-50 h-[100px] fixed w-full bg-slate-500 bg-opacity-100">
          <Navbar color="bg-slate-500" />
        </div>
      )}

      {/* <div className=" left-0"><Hero /></div> */}
      <div>
        {/* <Navbar /> */}
        <Home />
        <About />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
};

export default App;
