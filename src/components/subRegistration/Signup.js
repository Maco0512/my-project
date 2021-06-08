import React, { useState, useContext, useEffect } from "react";
import UserContext from "../../context/UserContext";

import Select from "../../components/General/MultiSelect";
import Spinner from "../../components/General/Spinner";
export default function Signup(props) {
  const ctx = useContext(UserContext);

  const [error, setError] = useState(null);
  const [hasBranch, setHasBranch] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    password1: "",
  });
  const [selectedRole, setSelectedRole] = useState("admin");

  const changeRole = (e) => {
    setSelectedRole(e.target.value);
    checkRole(e.target.value);
  };

  const [branch, setBranch] = useState([]);
  const changeBranch = (e) => {
    setBranch(e);
  };

  useEffect(() => {
    !hasBranch && setBranch(null);
    // return () => {
    //   cleanup;
    // };
  }, [selectedRole]);

  const changeName = (e) => {
    const newName = e.target.value;
    setForm((formBefore) => ({
      name: newName,
      email: formBefore.email,
      password: formBefore.password,
      password1: formBefore.password1,
    }));
    setError(null);
  };

  const changeEmail = (e) => {
    const newEmail = e.target.value;
    setForm((formBefore) => ({
      name: formBefore.name,
      email: newEmail,
      password: formBefore.password,
      password1: formBefore.password1,
    }));
    setError(null);
  };

  const changePassword = (e) => {
    const newPassword = e.target.value;
    setForm((formBefore) => ({
      name: formBefore.name,
      email: formBefore.email,
      password: newPassword,
      password1: formBefore.password1,
    }));
  };
  const changePassword1 = (e) => {
    const newPassword = e.target.value;
    setForm((formBefore) => ({
      name: formBefore.name,
      email: formBefore.email,
      password: formBefore.password,
      password1: newPassword,
    }));
  };

  //////////////////////////////
  const checkRole = (role) => {
    if ("researcher" === role) setHasBranch(true);
    else setHasBranch(false);
  };

  const handleClick = () => {
    console.log(form.name, form.email, form.password, selectedRole, branch);
    ctx.signupUser(form.name, form.email, form.password, selectedRole, branch);

    // axios
    //   .post("http://localhost:8000/api/v1/users/login", {
    //     email: form.email,
    //     password: form.password,
    //   })
    //   .then((result) => console.log(result))
    //   .catch((err) => setError(err.response.data.error.message));
  };
  return (
    <form className="box">
      <div className="field columns">
        <label className="label column is-one-quarter">Эрх</label>
        <div className="select">
          <select onChange={changeRole} className="column">
            <option value="admin">Админ</option>
            <option value="expert">Салбарын мэргэжилтэн</option>
            <option value="researcher">Судлаач</option>
            <option value="registrar">Бүртгэл мэдээллийн санч</option>
            <option value="treasurer">Сан хөмрөгч</option>
          </select>
        </div>
      </div>
      {hasBranch && (
        <div className="field columns">
          <label className="label column is-one-quarter">Салбар</label>
          <Select changeBranch={changeBranch} />
        </div>
      )}
      <div className="field">
        <label className="label">Таны имейл</label>
        <div className="control has-icons-left">
          <input
            type="name"
            className="input"
            placeholder="Та нэвтрэх нэрээ бичнэ үү"
            onChange={changeEmail}
          />
          <span className="icon is-small is-left">
            <i className="fa fa-user" />
          </span>
        </div>
      </div>

      <div className="field">
        <label className="label">Таны нэр</label>
        <div className="control has-icons-left">
          <input
            type="name"
            className="input"
            placeholder="Та нэвтрэх нэрээ бичнэ үү"
            onChange={changeName}
          />
          <span className="icon is-small is-left">
            <i className="fa fa-user" />
          </span>
        </div>
      </div>

      <br />
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
            <i className="fa fa-lock" />
          </span>
        </div>

        <div className="level options">
          {/* <div className="checkbox level-left">
        <input type="checkbox" id="checkbox" className="regular-checkbox" />
        Remember me
      </div> */}
        </div>
      </div>

      <div className="field">
        <label className="label">Нууц үг дахин хийнэ үү</label>
        <div className="control has-icons-left">
          <input
            type="password"
            className="input"
            placeholder="Та нууц дахин үгээ оруулна уу"
            onChange={changePassword1}
          />
          <span className="icon is-small is-left">
            <i className="fa fa-lock" />
          </span>
        </div>
      </div>
      {ctx.state.logginIn && <Spinner />}
      {ctx.state.error && (
        <div className="notification is-warning" style={{ color: "red" }}>
          {ctx.state.error}
        </div>
      )}
      <button
        type="button"
        className="button is-primary is-small is-rounded is-hover"
        onClick={handleClick}
      >
        Хэрэглэгч бүртгэх
      </button>
      <br />
    </form>
  );
}
