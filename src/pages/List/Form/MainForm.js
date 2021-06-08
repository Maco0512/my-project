import React, { useEffect, useState } from "react";
import getAttribute from "../../../api";
// import defaultAttribute from "../../../api/defaultAttribute";

export const MainForm = ({ register, type, useDefault }) => {
  // const ischanged = useState(true);
  // const dino = apiAttribute("dino");
  const [items, setItems] = useState([]);
  // const [arr1, setArr1] = useState([]);
  // const [arr2, setArr2] = useState([]);
  useEffect(() => {
    const obj = getAttribute(type);
    setItems(obj);
  }, [type]);

  // const defaults = useDefault === true ? defaultAttribute(type) : "";
  // const arr1 = items !== undefined && items.slice(0, items.length / 2 + 2);
  // const arr2 = items !== undefined && items.slice(items.length / 2 + 2);
  const tifOptions = [];

  // for (const [key, value] of Object.entries(tifs)) {
  //   tifOptions.push(
  //     <option value={key} key={key}>
  //       {value}
  //     </option>
  //   );
  // }

  return (
    <div className="columns is-gapless is-multiline is-mobile ">
      {Object.keys(items).map((key) => (
        <div key={key} value={key}>
          {items[key]}
        </div>
      ))}
    </div>
    // items !== undefined && (
    //   <div className="row">
    //     <div className="col-5">
    //       {arr1.map((e) => (
    //         <div key={e} className="row">
    //           <div className="col-6">
    //             <label>{e}</label>
    //           </div>
    //           <div className="col-4">
    //             {e === "Contents" || e === "Explanation" ? (
    //               <textarea ref={register}></textarea>
    //             ) : (
    //               <input
    //                 name={e}
    //                 label={e}
    //                 type="text"
    //                 ref={register}
    //                 defaultValue={defaults[e]}
    //               />
    //             )}
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //     <div className="col-5">
    //       {arr2.map((e) => (
    //         <div key={e} className="row">
    //           <div className="col-6">
    //             <label>{e}</label>
    //           </div>
    //           <div className="col-4">
    //             {e === "Contents" || e === "Explanation" ? (
    //               <textarea></textarea>
    //             ) : (
    //               <input name={e} label={e} type="text" ref={register} />
    //             )}
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
  );
  /* <PrimaryForm register={register} />
      <div>
        {type === "dino" && <Form1 />}
        {type === "birds" && <Form2 />}
      </div> */
};
