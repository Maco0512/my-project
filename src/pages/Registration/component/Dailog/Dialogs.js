import { useDialog } from "react-st-modal";
import { useState } from "react";
import apiAttribute from "../../../../api/apiAttribute";
import "./style.css";
const ImageDailog = () => {
  const dialog = useDialog();
  const [value, setValue] = useState();
  const imageCol = apiAttribute("image");

  return (
    <div className="card strpied-tabled-with-hover">
      <div className="card-header ">
        {/* <p className="card-category">Category </p> */}
      </div>
      <br />
      <div className="card-body">
        {imageCol.map((e) => (
          <div className="row">
            <div className="col-4">
              <label>{e}</label>
            </div>
            <div className="col-6">
              {e === "Images" ? (
                <input
                  type="file"
                  onChange={(e) => {
                    setValue(e.target.value);
                  }}
                />
              ) : (
                <input
                  type="text"
                  onChange={(e) => {
                    setValue(e.target.value);
                  }}
                />
              )}
            </div>
          </div>
        ))}
        <button
          onClick={() => {
            // Сlose the dialog and return the value
            dialog.close(value);
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
};
const LocationDailog = () => {
  const dialog = useDialog();
  const [value, setValue] = useState();

  const locationCol = apiAttribute("basementLocation");

  return (
    <div className="card strpied-tabled-with-hover">
      <div className="card-header ">
        {/* <p className="card-category">Category </p> */}
      </div>
      <br />
      <div className="card-body ">
        {locationCol.map((e) => (
          <div className="row">
            <div className="col-4">
              <label>{e}</label>
            </div>
            <div className="col-6">
              <input
                type="text"
                onChange={(e) => {
                  setValue(e.target.value);
                }}
              />
            </div>
          </div>
        ))}
        <button
          onClick={() => {
            // Сlose the dialog and return the value
            dialog.close(value);
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
};
export { ImageDailog, LocationDailog };
