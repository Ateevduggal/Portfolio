import React from "react";
import { slider } from "./Data";
import Resume from "./Resume_New.pdf";
const About = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-12 text-center fw-bold fs-1 mb-5" id="heading">
            About <span style={{ color: "orange" }}> Me</span>
            <hr
              style={{
                width: "10%",
                margin: "auto",
                height: "7%",
              }}
            />
          </div>
          <div className="col-6 px-5 fs-4 pt-5 mt-2" id="text_about">
            My name is <span style={{ color: "orange" }}>Ateev Duggal</span>,
            and I am a freelance front-end-web developer and a blogger with a
            highly qualified and self-attained skill set which contains most
            used and compatible JS framework - React JS.
            <div className="d-flex justify-content-between mt-5">
              <a href={Resume} download>
                <button className="btn text-white fs-4 fw-bold">
                  Download CV
                </button>
              </a>
              <a
                href="https://www.linkedin.com/in/ateev-duggal-937795182/"
                className="text-white fw-bold text-decoration-none fs-4 px-3"
                target="true"
              >
                <button className="btn text-white fs-4 fw-bold px-3">
                  Let's chat
                </button>
              </a>
            </div>
          </div>
          <div className="col-6 pt-5" id="stats_about">
            {slider.map((Val) => {
              const { text, width } = Val;
              return (
                <>
                  <div className="mb-3">
                    <span className="fw-bold fs-6">{text}</span>
                    <div className="slider">
                      <div
                        className="inner-slider"
                        style={{ width: `${width}` }}
                      ></div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
