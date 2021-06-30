import React, { useState, useEffect } from "react";
import axios from "axios";

const List = (props) => {
  const [list, setList] = useState([]);
  const getData = (obj = "") => {
    axios
      .get(`http://localhost:8000/api/v1/classification/${props.name}`, obj)
      .then((e) => setList(e.data.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    switch (props.name) {
      case "class":
        getData();
        break;
      case "superorder":
        getData({ params: { class_id: props.id } });
        break;
      case "order":
        getData({ params: { superorder_id: props.id } });
        break;
      case "suborder":
        getData({ params: { order_id: props.id } });
        break;
      case "family":
        getData({ params: { suborder_id: props.id } });
        break;
      case "genus":
        getData({ params: { family_id: props.id } });
        break;
      case "species":
        getData({ params: { genus_id: props.id } });
        break;
      default:
        break;
    }
  }, []);

  let filtered = list.filter((items) =>
    items.name.toLowerCase().includes(props.searchedVal.toLowerCase())
  );
  let name = props.name;

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
              {result.name}
            </option>
          ))}
        </select>
      </div>
    );
  else if (props.onSubmit === undefined) return null;
  else
    return (
      <button
        onClick={() => {
          props.onSubmit(props.name);
        }}
      >
        Шинээр бүртгүүлэх
      </button>
    );
};
export default List;
