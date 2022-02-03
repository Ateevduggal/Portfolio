import React from "react";
import { services } from "./Data";
const Services = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row mt-5">
          <div
            className="col-12 text-center fw-bold fs-1 mb-5 pb-3"
            id="heading"
          >
            <span style={{ color: "orange" }}>My</span> Services
            <hr style={{ width: "10%", margin: "auto", height: "7%" }} />
          </div>
          {services.map((Val) => {
            const { icon, heading, text } = Val;
            return (
              <>
                <div className="col-lg-3 col-md-6 col-sm-6 card bg-transparent border-0 text-center py-4 px-2">
                  <div className="card-img-top">
                    <i className={`${icon} fs-1 icon`}></i>
                  </div>
                  <div className="card-body">
                    <div
                      className="fs-4 fw-bold pb-3 card-title"
                      style={{ color: "orange" }}
                    >
                      {heading}
                    </div>
                    <div className="fs-6 card-text">{text}</div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;
