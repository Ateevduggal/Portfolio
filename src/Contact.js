import React from "react";
import { social } from "./Data";
const Contact = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row mt-5">
          <div
            className="col-12 text-center fw-bold fs-1 text-black px-5 mb-5"
            id="heading"
          >
            Contact<span style={{ color: "orange" }}> Me</span>
            <hr
              style={{
                width: "10%",
                margin: "auto",
                height: "7%",
              }}
            />
          </div>
          <div className="col-2"></div>
          <div className="col-12 mt-3 text-center" id="section2">
            {social.map((Val) => {
              return (
                <>
                  <a
                    href={`${Val.link}`}
                    key={Val.id}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-3"
                  >
                    <i className={`${Val.icon}`} id="icons"></i>
                  </a>
                </>
              );
            })}
          </div>
          <div className="w-100 my-4"></div>
        </div>
      </div>
    </>
  );
};

export default Contact;
