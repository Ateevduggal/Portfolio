import React from "react";
import { blogs } from "./Data";
const Blogs = () => {
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div
            className="col-12 fs-1 fw-bold text-center mb-5 pb-3"
            id="heading"
          >
            <span style={{ color: "orange" }}>My</span> Blogs
            <hr
              style={{
                width: "10%",
                margin: "auto",
                height: "7%",
              }}
            />
          </div>
          {blogs.map((Val) => {
            const { image, heading, link } = Val;
            return (
              <>
                <div className="col-md-4 col-sm-6 card bg-transparent border-0 text-center p-3">
                  <div className="card-img-top" id="card-img">
                    <a href={`${link}`}>
                      <img
                        src={image}
                        alt={heading}
                        className="w-100 p-3"
                        id="card-img"
                      />
                    </a>
                  </div>
                  <div
                    className="fw-bold fs-5 card-title"
                    style={{ color: "orange" }}
                  >
                    {heading}
                  </div>
                </div>
              </>
            );
          })}
          <div className="text-center col-12 mt-5">
            <a href="https://tekolio.com/" target="true">
              <button
                className="btn text-white fs-5 px-3 fw-bold col-3"
                id="btn"
              >
                View More
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
