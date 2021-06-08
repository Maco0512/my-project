import React, { useEffect, useState } from "react";
import models from "./state";
import axios from "axios";
// import "./List.css";
let tool = 0;
const list = (props) => {
  //props in type aas hamaarch ogogdloo awdah boloh
  const words = models();
  tool = 0;

  let results =
    props.uy.length !== 0 &&
    words.filter((word) => {
      let wor = word.toLowerCase();
      for (let i = 0; i < wor.length; i++)
        if (wor.slice(i, props.uy.length + i) === props.uy) {
          tool++;
          return 1; //let = /props.uy*/;
        }
      return 0;
    }); //Arizona => arizona > zo
  const handleSelect = (e) => {
    props.select(e.target.value);
  };
  if (tool > 0)
    return (
      <div
        className="dropdown-item select is-multiple "
        style={{ padding: "0" }}
      >
        <select
          multiple
          size={results.length}
          onClick={handleSelect}
          style={{ width: "100%" }}
        >
          {results.map((result, i) => (
            <option value={result} key={result + i}>
              {result}
            </option>
          ))}
        </select>
      </div>
    );
  else return <div></div>;
};
export default list;
