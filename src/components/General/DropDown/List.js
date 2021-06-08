import React, { useState, useEffect } from "react";
import cs142models from "./state";
import axios from "axios";

const List = (props) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(cs142models());
  }, []);

  let values = list.filter((items) => {
    return items.toLowerCase().includes(props.searchedVal.toLowerCase());
  });

  let name = props.name;

  // const createList = () => {
  //   console.log("props is changing..and value is ");
  //   values = list.filter((items) => {
  //     return items.toLowerCase().includes(props.searchedVal);
  //   });
  // };

  const handleSelect = (e) => {
    props.select(e.target.value, props.name);
  };

  if (values.length && props.searchedVal)
    return (
      <div className="select">
        {/* <h3>{tool}</h3> */}
        <select
          // className="multiple"
          size={values.length}
          onClick={handleSelect}
        >
          {values.map((result, i) => (
            <option value={result} key={result + i}>
              {result}
            </option>
          ))}
        </select>
      </div>
    );
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
  // const words = cs142models();
  // tool = 0;
  // let results = words.filter((word) => {
  //   let wor = word.toLowerCase();
  //   for (let i = 0; i < wor.length; i++)
  //     if (props.uy.length !== 0) {
  //       console.log("ok");
  //       if (wor.slice(i, props.uy.length + i) === props.uy) {
  //         tool++;
  //         return 1; //let = /props.uy*/;
  //       }
  //     } else return 0;
  // }); //Arizona => arizona > zo
};
export default List;
