import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Ateev1 from "./Ateev-1.jpg";
import Ateev from "./Ateev.jpg"
const Hero = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row mt-3">
          <div id="main_hero">
            <div className="col-7 px-5 mx-4 main_hero">
              <div className="fs-3 px-3 text-2">Hi there, my name is</div>
              <div className="text-1">Ateev Duggal</div>
              <div className="fs-4 px-3 text-2">
                I am &nbsp;
                <span className="fs-2 fw-bold text-3" style={{ color: "orange" }}>
                  <Typewriter
                    loop
                    cursor
                    cursorStyle="|"
                    typeSpeed={100}
                    deleteSpeed={70}
                    delaySpeed={1000}
                    words={["Developer", "Blogger", "Freelancer"]}
                  />
                </span>
              </div>
            </div>
            <div className="col-4" id="image_hero">
              <img src={Ateev1} alt="Ateev" className="image_hero" />
              <img src={Ateev} alt="Ateev" className="w-50 image-hero"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
