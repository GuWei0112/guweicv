import React from "react";

export default ({ title, url, img }) => (
  <div className="container" style={{ width: "300px", padding: "10px" }}>
    <div
    className='proj'
      style={{
        height: "200px",
        top: "100px",
        borderRadius: "10px",
        backgroundImage: `url(${
          img !== "" ? require(`../../images/${img}.gif`) : ""
        })`,
        backgroundSize: "280px 200px",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="carousel-inner" style={{ top: "80px" }}>
        <div className="container-fluid">
          <h2 style={{ fontSize: "35px" }}>
            <a href={url}>{img === "" && title}</a>
          </h2>
        </div>
      </div>
    </div>
  </div>
);
