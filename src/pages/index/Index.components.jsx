import React from "react";
import { Link } from "react-router-dom";
export default () => {
  return (
    <div className="container">
      <div
        id="testimonial-carousel"
        className="carousel slide"
        data-ride="carousel"
        style={{
          backgroundColor: "rgba(190,191,194,0.7)",
          height: "300px",
          top: "100px",
          borderRadius: "10px"
        }}
      >
        <div className="carousel-inner" style={{ top: "120px" }}>
          <div className="carousel-item active container-fluid">
            <h2 className="testimonial-text">
              <Link to="/guweicv/proj">Project</Link>
            </h2>
            {/*<img className="testimonial-image" src="images/dog-img.jpg" alt="dog-profile"/>*/}
          </div>
          <div className="carousel-item container-fluid">
            <h2 className="testimonial-text">
              <Link to="/guweicv/skills">Skills</Link>
            </h2>
            {/*<img className="testimonial-image" src="images/dog-img.jpg" alt="dog-profile"/>*/}
          </div>
          <div className="carousel-item container-fluid">
            <h2 className="testimonial-text">
              <Link to="/guweicv/about">About</Link>
            </h2>
            {/*<img className="testimonial-image" src="images/dog-img.jpg" alt="dog-profile"/>*/}
          </div>
        </div>
        <a
          className="carousel-control-prev carousel-btn"
          href="#testimonial-carousel"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </a>
        <a
          className="carousel-control-next carousel-btn"
          href="#testimonial-carousel"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="false"
          ></span>
        </a>
      </div>
    </div>
  );
};
