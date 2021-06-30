import React from "react";

export default function InfoCardImage(props) {
  return (
    <div className="card-image">
      <figure className="image is-3by3">
        <img
          className=""
          src={`http://localhost:8000/public/upload/${props.image}`}
          alt="..."
          width="300"
        />
      </figure>
    </div>
  );
}
