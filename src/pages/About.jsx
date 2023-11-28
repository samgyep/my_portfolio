import React from "react";

const About = () => {
  return (
    <div id="about" className="">
      <div className="max-[400px]:px-3 max-[400px]:w-[380px] py-28 lg:max-w-[960px] md:max-w-[700px] max-md:w-[400px] md:grid md:col-span-1 md:m-auto">
        <h2 className=" md:w-full">
          <span className="px-10 py-3  text-blue-600 font-bold">ABOUT ME</span>
          <p className="px-10 py-3 font-extrabold max-md:text-[30px] text-[40px]">
            I develop Websites
          </p>
        </h2>
        <p className="max-[470px]:px-3 px-10 max-[400px]:w-[380px]">
          I'm an impassioned developer dedicated to crafting innovative
          solutions through code and problem-solving. My expertise spans various
          programming languages, with a primary focus on web development. Rooted
          in fundamental software development principles, I bring a versatile
          skill set poised to contribute meaningfully to dynamic teams. I'm
          driven by a fervent enthusiasm to leverage my technical proficiency in
          creating cutting-edge solutions.
        </p>
        <div className="max-[470px]:grid max-[470px]:col-span-1 max-[470px]:gap-0 p-3 flex flex-row w-[500px] gap-[20px] justify-normal">
          <div className="max-[470px]:m-0  basis-1/2 m-5">
            <ul className="max-[470px]:m-0 m-3">
              <h4 className=" font-bold">NAME</h4>
              <p className="">Giok Guim</p>
            </ul>
            <ul className="max-[470px]:m-0 mx-3 my-9">
              <h4 className=" font-bold">EMAIL</h4>
              <p>andy.g.guim@gmail.com</p>
            </ul>
          </div>
          <div className="max-[470px]:m-0 basis-1/2 m-5">
            <ul className="max-[470px]:m-0 m-3">
              <h4 className=" font-bold">EDUCATION</h4>
              <p>Web Devleopment Certificates</p>
            </ul>
            <ul className="max-[470px]:m-0 m-3">
              <h4 className=" font-bold">EMPLOYMENT</h4>
              <p>OPEN</p>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
