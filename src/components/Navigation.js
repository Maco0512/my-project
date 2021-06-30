import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import history from "../util/history";
import UserContext from "../context/UserContext";
import useToggle from "../components/useToggle";
import Notification from "../components/Notification/Notification";
import Popup from "../components/Notification/Popup";
import Modal from "../components/General/Modal";
function Navigation(props) {
  const userCtx = useContext(UserContext);

  const [isOn, toggleIsOn] = useToggle();
  // const closeNotification = () => {
  //   // toggleIsOn(false);
  //   // console.log("toggle");
  // };
  const handleLogout = () => {
    userCtx.logout();
    localStorage.removeItem("roles");
    history.push("/login");
  };

  return (
    <div className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand ">
        <Link
          to="/app"
          className="title navbar-item"
          style={{ color: "black" }}
        >
          <img src={require("../assets/pageImg/logo.png")} alt="Logo" />
        </Link>
      </div>
      <div className="navbar-menu navbar-start">
        {props.routes.map((route) => (
          <Link
            key={route.url}
            className="navbar-item"
            to={`${props.path}${route.url}`}
          >
            {route.title}
          </Link>
        ))}
        {userCtx.state.role === "admin" && (
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">Бүртгэл</a>
            <div className="navbar-dropdown">
              <Link
                className="navbar-item"
                to={`${props.path}/class-registration`}
              >
                Төрөл зүйл
              </Link>
              <hr className="navbar-divider" />
              <Link
                className="navbar-item "
                to={`${props.path}/fossil-registration`}
              >
                Олдвор
              </Link>
              <Link
                className="navbar-item"
                to={`${props.path}/treasury-registration`}
              >
                Сан хөмрөг
              </Link>
              <Link
                className="navbar-item"
                to={`${props.path}/collection-registration`}
              >
                Цуглуулга
              </Link>
            </div>
          </div>
        )}
        <div className="navbar-item has-dropdown is-hoverable">
          <a className="navbar-link">Жагсаалт</a>
          <div className="navbar-dropdown">
            <Link className="navbar-item " to={`${props.path}/fossil-list`}>
              Олдвор
            </Link>
            <Link className="navbar-item" to={`${props.path}/treasury-list`}>
              Сан хөмрөг
            </Link>
            <Link className="navbar-item" to={`${props.path}/collection-list`}>
              Цуглуулга
            </Link>
          </div>
        </div>
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          <span className="icon is-large" onClick={toggleIsOn}>
            <i className="fas fa-bell">
              <span title="Badge top right" className="badge">
                8
              </span>
            </i>
          </span>
          {isOn && <Notification show={isOn} />}
          {/* {isOn && (
          <Modal>
            <div>Modal</div>
          </Modal>
        )} */}
          <button className="button is-primary" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>

    //

    // 	<Nav className="mr-auto">
    // 		{this.props.routes.map((route) => (
    // 			<Link
    // 				key={route.url}
    // 				className="nav-link"
    // 				to={`${this.props.path}${route.url}`}
    // 			>
    // 				{route.title}
    // 			</Link>
    // 		))}
  );
}

Navigation.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  path: PropTypes.string.isRequired,
};

export default Navigation;
