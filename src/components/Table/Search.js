import React, { useState } from "react";
import css from "./style.module.css";
export default function Search(props) {
  const [search, setSearch] = useState("");

  const onInputChange = (value) => {
    setSearch(value);
    props.onSearch(value);
  };
  //   <div class="container">
  //   <div class="field has-addons">
  //     <div class="control" style="width: 500px">
  //       <input
  //         class="input"
  //         type="text"
  //         placeholder="Хайх утгаа оруулна уу."
  //       />
  //     </div>
  //     <div class="control">
  //       <a class="button is-info"> Хайх </a>
  //     </div>
  //   </div>
  // </div>
  return (
    <div className={css.topnav + " field level-right"}>
      <p className="control is-expanded has-icons-right">
        <input
          className="input"
          type="text"
          placeholder="Хайх утгаа оруулна уу.."
          name="search"
          value={search}
          onChange={(e) => onInputChange(e.target.value)}
        />
        <span className="icon is-small is-right">
          <i class="fas fa-search"></i>
        </span>
      </p>
    </div>
  );
}
