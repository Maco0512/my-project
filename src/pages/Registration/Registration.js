import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
// import { Form} from 'react-bootstrap';
// import Select from "react-select";
// import { CustomDialog } from "react-st-modal";
import { MainForm } from "./component/MainForm";
// import { LocationDailog, ImageDailog } from "./component/Dailog/Dialogs";
import { createItem } from "../../api/itemAPI";
const Registration = () => {
  // let history = useHistory();
  const [value, setValue] = useState("dino");
  const [useDefault, setUseDefault] = useState(false);

  const { register, handleSubmit } = useForm({
    // defaultValues: { General_num: useDefault === true ? "default" : "" },
  });

  // useEffect(() => {
  //   getOptions();
  // }, []);

  const options = [
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
  ];

  const handleSelect = (e) => {
    setValue(e.target.value);
  };
  const handleClick = handleSubmit(async (data) => {
    await createItem(data);
    console.log(options);
    const items = [];
    options.forEach((e, i) =>
      items.push(
        <options key={e.value + i} value={e.value}>
          {e.label}
        </options>
      )
    );
    console.log(items);
  });
  const handleDefault = (event) => {
    //Default event ийг устгах
    event.preventDefault();
    value !== "" && setUseDefault(true);
  };

  return (
    <div className="content">
      <div className="container">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Register Item</h4>
            {/* <Form.Control as="select" onChange={handleSelect}>
              {options.map((option, index) => (
                <option value={option.value} key={option.value + index}>
                  {option.label}
                </option>
              ))}
            </Form.Control> */}
          </div>
          <div className="card-content">
            <form onSubmit={handleClick}>
              {value && (
                <MainForm
                  type={value}
                  useDefault={useDefault}
                  register={register}
                />
              )}
              <div className="">
                <i
                  className="pe-7s-map-2"
                  // onClick={async () => {
                  //   const result = await CustomDialog(<LocationDailog />, {
                  //     title: "Байршилын мэдээллийг оруулна уу",
                  //     showCloseIcon: true,
                  //   });
                  // }}
                >
                  <label>Байрлал</label>
                </i>

                <i
                  className="pe-7s-graph2"
                  // onClick={async () => {
                  //   const result = await CustomDialog(<ImageDailog />, {
                  //     title: "Зураг болон нэмэлт мэдээллийг оруулна уу",
                  //     showCloseIcon: true,
                  //   });
                  // }}
                >
                  <label>Зураг</label>
                </i>
              </div>

              <br />
              <input type="submit" className="button" />
              <label onClick={handleDefault} id="default-label">
                use default
              </label>
            </form>
          </div>
        </div>
      </div>
    </div>

    //   register ashiglaj data gaa awdag baih
  );
};
export default Registration;
