import React from "react";
import { projects } from "./Data";

const Projects = () => {
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div
            className="col-12 fs-1 fw-bold text-center mb-5 pb-3"
            id="heading"
          >
            <span style={{ color: "orange" }}>My</span> Projects
            <hr
              style={{
                width: "10%",
                margin: "auto",
                height: "7%",
              }}
            />
          </div>
          {projects.map((Val, key) => {
            const { image, heading, link } = Val;
            return (
              <>
                <div
                  className="col-md-4 col-sm-6 card bg-transparent border-0 text-center pb-4"
                  key={key}
                >
                  <div className="card-img-top">
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
            <a
              href="https://github.com/Ateevduggal?tab=repositories"
              target="true"
            >
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

export default Projects;
