import React from "react";
import Navbar from "./Navbar";

// Changes: Added bg-black to fix the background color and made sure the image fits the container
const Hero = () => {
  return (
    <div
  id="hero"
  className=" min-h-screen bg-no-repeat bg-[url(/web.png)] bg-cover " 
  style={{ backgroundSize: "40%",backgroundPosition: "left 120px top 165px" }} 
>

      <Navbar />
      <div className="container grid lg:grid-cols-2 h-[calc(100vh-60px)]" >
        <div className="hidden lg:block"></div>

        {/* Changes: Adjusted text size and centering */}
        <div className="text-[70px] sm:text-[100px] font-bold leading-tight flex justify-center items-center text-mint">
          <div>
            <p data-aos="zoom-in-up">I'm</p>
            <p data-aos="zoom-in-up">Basit</p>
            <p data-aos="zoom-in-up">Baloch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
