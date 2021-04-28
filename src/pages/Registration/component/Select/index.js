import React, { useState } from "react";
import Select from "react-select";

function SelectForm() {
  const [option] = useState([
    { value: "dino", label: "Dinasour" },
    { value: "birds", label: "Birds" },
    { value: "egg1", label: "Egg1" },
    { value: "mammalia", label: "Mammalia" },
    { value: "replica", label: "Replica" },
    { value: "basement_location", label: "BasementLocation" },
    { value: "spicemensInOtherCountry", label: "SpicemensInOtherCountry" },
    { value: "turtles", label: "Turtles" },
    { value: "fish", label: "Fish" },
    { value: "plants", label: "Plants" },
    { value: "insects", label: "Insects" },
    { value: "egg2", label: "Egg2" },
    { value: "synapsida", label: "Synapsida" },
    { value: "invertebrates", label: "Invertebrates" },
  ]);
  function handleChange(e) {
    // this.setState({ id: e.value, name: e.label });
    console.log(e);
  }
  return (
    <div>
      <Select options={option} onChange={handleChange} width="200px" />
      <p>
        You have selected <strong>{}</strong>
      </p>
    </div>
  );
}
export default SelectForm;
