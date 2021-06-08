import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Form } from "./component/Form/CollectionForm";

import { createItem, uploadPhoto } from "../../api/fossilAPI";
import axios from "axios";

export default function CollectionRegistration() {
  let history = useHistory();
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState(null);

  const { register, handleSubmit } = useForm();

  const handleClick = handleSubmit((data) => {
    data.user_id = localStorage.getItem("userId");
    const formData = new FormData();
    selectedFile && formData.append("file", selectedFile);

    axios
      .post("http://localhost:8000/api/v1/collection", data)
      .then((result) => {
        selectedFile && uploadPhoto(result.id, formData);
        history.push("/app/collection-list");
        setSelectedFile(null);
      })
      .catch((error) => {
        console.log(error);
        setError("Талбарын утгыг бүрэн оруул");
      });
  });

  return (
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <br />
          <form onSubmit={handleClick}>
            <Form register={register} />
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
  );
}
