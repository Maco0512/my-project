import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import history from "../util/history";
import UserContext from "../context/UserContext";

function Navigation(props) {
  const userCtx = useContext(UserContext);

  const handleLogout = () => {
    userCtx.logout();
    localStorage.removeItem("roles");
    history.push("/login");
  };

  return (
    <div className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/app" className="title" style={{ color: "black" }}>
          Page
        </Link>
      </div>
      <div className="navbar-menu">
        {props.routes.map((route) => (
          <Link
            key={route.url}
            className="navbar-item"
            to={`${props.path}${route.url}`}
          >
            {route.title}
          </Link>
        ))}
      </div>
      <button className="button" onClick={handleLogout}>
        Logout
      </button>
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
