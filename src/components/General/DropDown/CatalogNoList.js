import React, { useState, useEffect } from "react";
import axios from "axios";

const CatalogNoList = (props) => {
  const [list, setList] = useState([]);
  const [name, setName] = useState("");

  const getData = () => {
    axios
      .get(`http://localhost:8000/api/v1/collection`, {
        params: { select: "catalog_no" },
      })
      .then((e) => {
        console.log(e.data.data);
        setList(e.data.data);
      })
      .catch((err) => console.log(err));
  };
  const getData2 = () => {
    axios
      .get(`http://localhost:8000/api/v1/classification/species`)
      .then((e) => {
        console.log(e.data.data);
        setList(e.data.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    switch (props.name) {
      case "catalog_no":
        setName("catalog_no");
        getData();
        break;

      case "species":
        setName("name");
        getData2();
        break;
      default:
        break;
    }
  }, []);

  let filtered = list.filter((items) =>
    items[name].toLowerCase().includes(props.searchedVal.toLowerCase())
  );
  // let name = props.name;

  const handleSelect = (e) => {
    const value = e.target.label;
    const id = e.target.value;
    props.select(value, id);
  };

  if (filtered.length && props.searchedVal)
    return (
      <div className="select is-multiple">
        <select size={filtered.length + 1} onClick={handleSelect}>
          {filtered.map((result, i) => (
            <option value={result._id} key={result._id}>
              {result[name]}
            </option>
          ))}
        </select>
      </div>
    );
  else return null;
};
export default CatalogNoList;
