import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import history from "../../util/history";
import axios from "axios";

import { loginUser } from "../../api/userAPI";
import Spinner from "../../components/General/Spinner";
import HeroWrapper from "../../components/HeroWrapper";

import UserContext from "../../context/UserContext";

const Login = (props) => {
  const ctx = useContext(UserContext);

  const [error, setError] = useState(null);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const changeEmail = (e) => {
    const newEmail = e.target.value;
    setForm((formBefore) => ({
      email: newEmail,
      password: formBefore.password,
    }));
    setError(null);
  };

  const changePassword = (e) => {
    const newPassword = e.target.value;
    setForm((formBefore) => ({
      email: formBefore.email,
      password: newPassword,
    }));
  };

  const [selected, setSelected] = useState([]);

  const handleChange = (e) => {
    let selected = [];
    for (let i = 0; i < e.target.options.length; i++) {
      if (e.target.options[i].selected) {
        selected.push(e.target.options[i].value);
      }
    }
    setSelected(selected);
  };

  const handleClick = () => {
    ctx.loginUser(form.email, form.password);
  };

  return (
    <form className="box">
      <div className="field">
        <label className="label">Таны нэр</label>
        <div className="control has-icons-left">
          <input
            type="name"
            className="input"
            placeholder="Та нэвтрэх нэрээ бичнэ үү"
            onChange={changeEmail}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-user"></i>
          </span>
        </div>
      </div>
      <div className="field">
        <label className="label">Нууц үг</label>
        <div className="control has-icons-left">
          <input
            type="password"
            className="input"
            placeholder="Та нууц үгээ оруулна уу"
            onChange={changePassword}
          />
          <span className="icon is-small is-left">
            <i class="fas fa-lock"></i>
          </span>
        </div>
        <br />
        <div className="level options">
          {/* <div className="checkbox level-left">
            <input type="checkbox" id="checkbox" className="regular-checkbox" />
            Remember me
          </div> */}
          {/* <Link to="/forgot-password" className="btn btn-link level-right">
            Forgot Password
          </Link> */}
        </div>
      </div>
      {/* {error && <div className="notification is-warning">{error}</div>} */}
      {ctx.state.logginIn && <Spinner />}
      {ctx.state.error && (
        <div className="notification is-warning" style={{ color: "red" }}>
          {ctx.state.error}
        </div>
      )}

      {/* <Link to="/dashboard"> */}
      <button
        type="button"
        className="button is-primary is-small is-rounded is-hover"
        onClick={handleClick}
      >
        НЭВТРЭХ
      </button>

      {/* </Link> */}
    </form>
  );
};

export default Login;
