import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Form } from "./component/Form/CollectionForm";

import { createItem, uploadPhoto } from "../../api/fossilAPI";
import axios from "axios";
import { format } from "prettier";

export default function CollectionRegistration() {
  let history = useHistory();
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState(null);

  const { register, handleSubmit } = useForm();

  const handleClick = handleSubmit((data) => {
    //  const formData=new FormData();
    //  formData.append('image')
    console.log(data);
    data.user_id = localStorage.getItem("userId");
    // data.image[0].name = "photo_" + data.catalog_no;
    const formData = new FormData();

    for (var key in data) {
      if (key === "images") {
        // let images = [];
        // for (let i = 0; i < data.images.length; i++) {
        //   images.push(data.images[i]);
        // }
        // console.log(images);
        // formData.append("images", images);
        for (const key of Object.keys(data.images)) {
          formData.append("images", data.images[key]);
        }
      } else formData.append(key, data[key]);
    }

    axios
      .post(
        "http://localhost:8000/api/v1/collection",

        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }

        // (headers: { "Content-Type": "multipart/form-data" })
      )
      .then((result) => {
        // selectedFile && uploadPhoto(result.id, formData);
        // history.push("/app/collection-list");
        // setSelectedFile(null);
        console.log("uploaded");
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
          <form onSubmit={handleClick} encType="multipart/form-data">
            <Form register={register} />

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
          </form>
        </div>
      </div>
    </section>
  );
}
