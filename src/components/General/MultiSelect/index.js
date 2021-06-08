import React, { useState } from "react";
import Select from "react-select";
import { branchOptions } from "./data";

const CustomSelect = ({ changeBranch }) => {
  const [values, setValues] = useState([]);
  const [selected, setSelected] = useState([]);

  const handleChange = (values) => {
    setValues(values);

    let selected = [];
    for (let i = 0; i < values.length; i++) {
      selected.push(values[i].value);
    }
    setSelected(selected);
    changeBranch(selected);
  };

  // Clicked = async (event) => {
  //   event.preventDefault();
  //   var params = new URLSearchParams();
  //   this.state.selected.forEach((e) => {
  //     params.append("branch_name", e);
  //   });
  //   const data = await axios
  //     .get("http://localhost:8000/api/v1/fossil", {
  //       params: params,
  //     })
  //     .then((e) => console.log(e.data.data));
  // };

  return (
    <div className="column ">
      <Select
        isMulti
        options={branchOptions}
        onChange={handleChange}
        value={values}
        // components={{ ValueContainer }}
      />
    </div>
  );
};

export default CustomSelect;
