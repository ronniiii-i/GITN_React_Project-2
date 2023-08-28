import React from "react";

function Card({ image }) {
  return (
    <div className="card">
      <div className="image">
        <img src={image.link} alt="Place" />
      </div>
      <div className="details">
        <div className="flex justify-between align-center">
          <p>Desert King</p>
          <strong>1MBT per night</strong>
        </div>
        <div className="flex justify-between align-center">
          <p>2345km away</p>
          <p>available for 2 weeks stay</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
