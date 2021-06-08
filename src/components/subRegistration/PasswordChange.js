import React, { useState, useContext, useEffect } from "react";

import Spinner from "../../components/General/Spinner";
export default function Signup(props) {
  const [error, setError] = useState(false);
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const changePassword1 = (e) => {
    setPassword1(e.target.value);
  };
  const changePassword2 = (e) => {
    setPassword2(e.target.value);
  };
  //   const onPasswordChange = async ({ email }) => {
  //     const response = await changePassword(email).then((e) => console.log(e));
  //     const resetToken = response.resetToken;
  //   };

  const handleClick = () => {
    console.log(props.email);
    if (!password1 === password2) setError(true);
  };
  return (
    <form className="box">
      <div className="field">
        <label className="label">Шинэ нууц үг</label>
        <div className="control has-icons-left">
          <input
            type="password"
            className="input"
            placeholder="Та нууц үгээ оруулна уу"
            onChange={changePassword1}
          />
          <span className="icon is-small is-left">
            <i className="fa fa-lock" />
          </span>
        </div>
      </div>

      <div className="field">
        <label className="label">Нууц үг дахин хийнэ үү</label>
        <div className="control has-icons-left">
          <input
            type="password"
            className="input"
            placeholder="Та нууц дахин үгээ оруулна уу"
            onChange={changePassword2}
          />
          <span className="icon is-small is-left">
            <i className="fa fa-lock" />
          </span>
        </div>
      </div>
      {error && (
        <div className="notification is-warning" style={{ color: "red" }}>
          Нууц үгээ давтан оруул
        </div>
      )}
      <button
        type="button"
        className="button is-primary is-small is-rounded is-hover"
        onClick={handleClick}
      >
        Нууц үг солих
      </button>
      <br />
    </form>
  );
}
