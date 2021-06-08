import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Form } from "./component/Form/TreasuryForm";
import { createItem, uploadPhoto } from "../../api/fossilAPI";
import axios from "axios";

export default function TreasuryRegistration() {
  let history = useHistory();
  const [value, setValue] = useState("fossil");
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState(null);

  const { register, handleSubmit } = useForm();

  const handleClick = handleSubmit((data) => {
    data.user_id = localStorage.getItem("userId");
    axios
      .post("http://localhost:8000/api/v1/treasury", data)
      .then((result) => {
        history.push("/app/treasury-list");
      })
      .catch((error) => {
        console.log(error);
        setError("Талбарын утгыг бүрэн оруул");
      });
  });

  // useEffect(() => {
  //   getOptions();
  // }, []);
  return (
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <br />
          <form onSubmit={handleClick}>
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
