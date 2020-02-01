import React from "react";

export default ({ title, url }) => (
  <div className="container" style={{width:'300px',padding:'10px'}}>
    <div
      style={{
        backgroundColor: "#a9b3c3",
        height: "200px",
        top: "100px",
        borderRadius: "10px"
      }}
    >
      <div className="carousel-inner" style={{ top: "80px" }}>
        <div className="container-fluid">
          <h2 style={{fontSize:'35px'}}>
            <a href={url}>{title}</a>
          </h2>
          {/*<img className="testimonial-image" src="images/dog-img.jpg" alt="dog-profile"/>*/}
        </div>
      </div>
    </div>
  </div>
);
