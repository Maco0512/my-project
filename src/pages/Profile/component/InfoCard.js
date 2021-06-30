import React from "react";
import InfoCardImage from "./InfoCardImage";
import { Link } from "react-router-dom";

export default function InfoCard(props) {
  return (
    <div className="column is-3-tablet is-6-mobile">
      <div className="card">
        {props.image && <InfoCardImage image={props.image} />}

        <div className="card-content">
          <div className="content">
            {props.branch_name && (
              <span className="tag is-dark subtitle">{props.branch_name}</span>
            )}
            <p>{props.catalog_no}</p>
          </div>
        </div>
        <footer className="card-footer">
          <Link
            className="card-footer-item"
            to={`detailed-item/${props._id}/${props.type}`}
          >
            View
          </Link>
          {/* <a className="card-footer-item">Share</a> */}
        </footer>
      </div>
      <br />
    </div>
  );
}
