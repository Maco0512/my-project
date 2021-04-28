import React, { useState } from "react";
import css from "./style.module.css";
export default function Search(props) {
  const [search, setSearch] = useState("");

  const onInputChange = (value) => {
    setSearch(value);
    props.onSearch(value);
  };

  return (
    <div className={css.topnav + " field level-right"}>
      <p className="control is-expanded has-icons-right">
        <input
          className="input"
          type="text"
          placeholder="Search.."
          name="search"
          value={search}
          onChange={(e) => onInputChange(e.target.value)}
        />
        <span className="icon is-small is-right">
          <i className="fas fa-search">S</i>
        </span>
      </p>
    </div>
  );
}
