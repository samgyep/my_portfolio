import React from "react";
import Navbar from "../Navbar";
import phoneImage from "../assets/phone-solid.svg";
import emailImage from "../assets/envelope-regular.svg";

const Contact = () => {
  return (
    <div id="contact" className=" bg-slate-300">
      <div className="max-[400px]:pl-0 max-[400px]:pb-[50px] sm:p-28 max-[400px]:w-[380px] items-start max-sm:w-[500px] max-md:w-[600px] max-md:grid max-md:col-span-1">
        <div className=" max-[400px]:pb-0 max-[400px]:pl-2 max-[400px]:w-[350px] max-[400px]:text-[30px] max-sm:justify-start max-md:justify-start max-sm:w-[500px] flex md:justify-center text-center text-[50px] font-extrabold">
          <h2>Contact</h2>
        </div>
        <div className="max-[400px]:pl-2 md:flex md:flex-row max-md:grid max-md:col-span-1 max-sm:w-[500px] max-md:w-[600px]">
          <div className=" max-[400px]:my-0 py-2 md:basis-1/2 flex flex-row md:justify-center max-md:justify-start">
            <div className="md:basis-1/2 flex md:justify-end max-md:justify-start">
              <img
                src={phoneImage}
                alt="phone image"
                className="w-[40px] h-[40px] my-0 mr-3"
              />
            </div>
            <div className="basis-1/2 h-[30px] relative max-md:text-left">
              <h3>Phone</h3>
              <span>+64 27 627 0007</span>
            </div>
          </div>
          <div className="  py-2 md:basis-1/2 flex flex-row">
            <div className="md:basis-1/2 flex md:justify-end max-md:justify-start">
              <img
                src={emailImage}
                alt="email image"
                className=" w-[40px] h-[40px] my-0 mr-3"
              />{" "}
            </div>
            <div className="basis-1/2 h-[30px] max-md:text-left">
              <h3>Email</h3>
              <span>andy.g.guim@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="max-[400px]:pl-2 flex md:justify-center max-md:justify-start">
          <div className="  grid col-span-1 py-2 ">
            <h3 className=" text-[36px] font-bold">Write me a message</h3>
            <form
              action="https://formsubmit.co/andy.g.guim@gmail.com"
              method="POST"
            >
              <div className=" max-md:grid max-md:col-span-1 md:flex md:flex-row gap-2 max-md:w-[350px] md:w-full">
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  name="name"
                  className="basis-1/2 p-2 border-2 border-dashed border-lime-500 rounded-lg"
                  required
                />
                <input type="hidden" name="_subject" value="New email" />
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  name="email"
                  className="basis-1/2 p-2 right-0 border-2 border-dashed border-lime-500 rounded-lg"
                  required
                />
              </div>

              <textarea
                id="message"
                name="message"
                placeholder="Your message here"
                rows="4"
                cols="50"
                className="p-2 border-2 border-dashed border-lime-500 rounded-lg my-2 gap-2 max-md:w-[350px]"
                required
              ></textarea>
              <br />

              <input
                type="submit"
                value="SEND MESSAGE"
                className=" p-2 border-2 border-solid border-lime-500 rounded-lg hover:bg-green-600"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
