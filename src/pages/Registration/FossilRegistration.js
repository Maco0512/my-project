import React, { useContext, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Form } from "./component/Form/FossilForm";

// import { createItem, uploadPhoto } from "../../api/fossilAPI";
// import axios from "axios";

const Registration = () => {
  let history = useHistory();
  const param = useParams();

  const [value, setValue] = useState("fossil");
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState(null);

  const { register, handleSubmit } = useForm();

  const handleClick = handleSubmit((data) => {
    console.log(data);
    // data.user_id = localStorage.getItem("userId");
    // const formData = new FormData();
    // selectedFile && formData.append("file", selectedFile);
    // axios
    //   .post("http://localhost:8000/api/v1/fossil", data)
    //   .then((result) => {
    //     // console.log(result.data.id);
    //     selectedFile && uploadPhoto(result.data.id, formData);
    //     history.push("/app/fossil-list");
    //     setSelectedFile(null);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     setError("Талбарын утгыг бүрэн оруул");
    //   });
  });

  // useEffect(() => {
  //   getOptions();
  // }, []);

  const handleOption = (e) => {
    console.log(e.target.value);
    setError("Талбарын утгыг бүрэн оруул");
  };
  // const handleClick = handleSubmit(async (data) => {
  //   await createItem(data);
  //   console.log(options);
  //   const items = [];
  //   options.forEach((e, i) =>
  //     items.push(
  //       <options key={e.value + i} value={e.value}>
  //         {e.label}
  //       </options>
  //     )
  //   );
  //   console.log(items);
  // });
  // const handleDefault = (event) => {
  //   //Default event ийг устгах
  //   event.preventDefault();
  //   value !== "" && setUseDefault(true);
  // };

  return (
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <br />
          <form onSubmit={handleClick}>
            <Form register={register} id={param.id} />
            <div className="field is-grouped">
              <div className="control">
                <div className="file is-info is-centered is-small">
                  <label className="file-label">
                    <input
                      className="file-input"
                      type="file"
                      name="file"
                      onChange={(e) => setSelectedFile(e.target.files[0])}
                    />
                    <span className="file-cta">
                      <span className="file-icon">
                        <i className="fas fa-cloud-upload-alt"></i>
                      </span>
                      <span className="file-label"> Зураг хавсаргах… </span>
                    </span>
                  </label>
                </div>
                <br />
                <div className="field is-grouped">
                  <div className="control">
                    <button className="button is-link">Хадгалах</button>
                  </div>
                  {error && (
                    <div
                      className="notification is-warning  "
                      style={{
                        color: "red",
                        padding: "0.5rem  1rem 0rem 1rem",
                      }}
                    >
                      {error}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>

    //         <div class="select">
    //           <select onChange={handleOption}>
    //             {options.map((option, index) => (
    //               <option value={option.value} key={option.value + index}>
    //                 {option.label}
    //               </option>
    //             ))}
    //           </select>
    //         </div>
    //       </div>
    //       <div className="card-content">
    //         <form onSubmit={handleClick}>
    //           {value && (
    //             <MainForm
    //               type={value}
    //               useDefault={useDefault}
    //               register={register}
    //             />
    //           )}

    //           <input type="submit" className="button" />
    //           <label onClick={handleDefault} id="default-label">
    //             use default
    //           </label>
    //         </form>
  );
};
export default Registration;
