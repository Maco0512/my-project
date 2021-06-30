import axios from "axios";
import React, { useState, useEffect } from "react";
import CatalogNoList from "../DropDown/CatalogNoList";
export default function Select(props) {
  const [catalogNo, setCatalogNo] = useState("");
  const [value, setValue] = useState("");
  const [hasList, setHasList] = useState(false);

  const fetchID = () => {
    axios
      .get(`http://localhost:8000/api/v1/collection/${props.id}`, {
        params: { select: "catalog_no" },
      })
      .then((e) => setCatalogNo(e.data.data.catalog_no));
  };
  useEffect(() => {
    // return () => {
    //   cleanup
    // }
    props.id && fetchID();
  }, [props.id]);

  const handleChange = (e) => {
    setValue(e);
    setHasList(true);
  };

  const select = (value, id) => {
    if (value) {
      setValue(value);
      setHasList(false);
    }
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
          // defaultValue={props.id && props.id}
          autoComplete="off"
          {...props.register(props.registername)}
          type="text"
          className={`input is-transparent is-small ${props.danger} && is-danger`}
          value={props.id ? catalogNo : value}
          onChange={(e) => handleChange(e.target.value)}
        />
        <hr className="dropdown-divider" />
        {hasList && (
          <CatalogNoList
            searchedVal={value}
            select={select}
            name={props.registername}
          />
        )}
      </div>
    </div>
  );
}
