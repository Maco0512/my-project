import React from "react";

export default function SearchBar(props) {
  return (
    <div className="box" style={{ borderRadius: 0 }}>
      <div className="columns">
        <div className="column is-8">
          <input
            className="input"
            placeholder={props.placeholder}
            style={{ width: "100% !important" }}
            type="text"
            onChange={(e) => props.handleSearch(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
