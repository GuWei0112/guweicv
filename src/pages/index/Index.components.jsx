import React from "react";
export default () => {
  return (
    <div className="container">
      <div
        id="testimonial-carousel"
        className="carousel slide"
        data-ride="carousel"
        style={{ backgroundColor: "#a9b3c3", height: "300px", top: "100px",borderRadius:'10px' }}
      >
        <div className="carousel-inner" style={{ top: '120px'}}>
          <div className="carousel-item active container-fluid">
            <h2 className="testimonial-text">
              <a href="/guweicv/proj">Project</a>
            </h2>
            {/*<img className="testimonial-image" src="images/dog-img.jpg" alt="dog-profile"/>*/}
          </div>
          <div className="carousel-item container-fluid">
            <h2 className="testimonial-text">
              <a href="/guweicv/skills">Skills</a>
            </h2>
            {/*<img className="testimonial-image" src="images/dog-img.jpg" alt="dog-profile"/>*/}
          </div>
          <div className="carousel-item container-fluid">
            <h2 className="testimonial-text">
              <a href="/guweicv/about">About</a>
            </h2>
            {/*<img className="testimonial-image" src="images/dog-img.jpg" alt="dog-profile"/>*/}
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#testimonial-carousel"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </a>
        <a
          className="carousel-control-next"
          href="#testimonial-carousel"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="false"></span>
        </a>
      </div>
    </div>
  );
};
