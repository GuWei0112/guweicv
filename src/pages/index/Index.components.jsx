import React from "react";

export default () => {
  return (
    <div id="testimonial-carousel" className="carousel slide" data-ride="false">
      <div className="carousel-inner">
        <div className="carousel-item active container-fluid">
          <h2 className="testimonial-text">333</h2>
          <em>Pebbles, New York</em>
        </div>
        <div className="carousel-item container-fluid">
          <h2 className="testimonial-text">2</h2>
          <em>Beverly, Illinois</em>
        </div>
      </div>
      <a className="carousel-control-prev" href="#testimonial-carousel" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon">111</span>
      </a>
      <a className="carousel-control-next" href="#testimonial-carousel" role="button" data-slide="next">
    <span className="carousel-control-next-icon">22</span>
      </a>
    </div>
  );
};
