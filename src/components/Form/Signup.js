import React, { useState, useContext } from "react";
import UserContext from "../../context/UserContext";

export default function Signup(props) {
  const ctx = useContext(UserContext);

  const [error, setError] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    password1: "",
  });
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

  const [selected, setSelected] = useState();

  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  const handleClick = () => {
    ctx.signupUser(form.name, form.email, form.password, selected);

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
      <div className="field">
        <label className="label">Эрх</label>

        <div className="select is-multiple">
          <select multiple size="3" onChange={handleChange}>
            <option value="admin">Admin</option>
            <option value="branchExpert">Expert</option>
            <option value="researcher">Researcher</option>
          </select>
        </div>
      </div>
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
      {/* {error && <div className="notification is-warning">{error}</div>} */}
      {/* {ctx.state.logginIn && <Spinner />}
      {ctx.state.error && (
        <div className="notification is-warning" style={{ color: "red" }}>
          {ctx.state.error}
        </div>
      )} */}

      {/* <Link to="/dashboard"> */}
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
