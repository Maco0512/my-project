import React, { useState } from "react";
import List from "../DropDown/";
export default function Select({ register, registername = "default" }) {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e);
  };
  return (
    <div className="dropdown is-active">
      <div
        className="dropdown-menu"
        id="dropdown-menu"
        role="menu"
        style={{ position: " relative" }}
      >
        <input
          {...register(registername)}
          type="text"
          placeholder="Баг"
          className="input is-transparent is-small"
          value={value}
          onChange={(e) => handleChange(e.target.value)}
        />
        <hr className="dropdown-divider" />
        <List uy={value} select={handleChange} />
      </div>
    </div>
  );
}
