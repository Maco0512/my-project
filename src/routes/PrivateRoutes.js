import React, { useState, useEffect, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import { uniqBy } from "lodash";
import { rolesConfig } from "../config/roles";
import * as Routes from "./index";
import Navigation from "../components/Navigation";
import NotFound from "../components/NotFound";

import DetailedItem from "../pages/DetailedItem/index";

function PrivateRoutes(props) {
  const [allowedRoutes, setallowedRoutes] = useState([]);

  // componentDidMount() {
  //   /*
  //     TODO: Replace hardcoded roles with redux,
  //      localStorage, or get from server.
  //    */
  //   // let roles = JSON.parse(localStorage.getItem('roles'));
  //   // if (roles) {
  //   // 	roles = ['common', ...roles];
  //   // 	let allowedRoutes = roles.reduce((acc, role) => {
  //   // 		return [...acc, ...rolesConfig[role].routes];
  //   // 	}, []);
  //   // 	// For removing duplicate entries, compare with 'url'.
  //   // 	allowedRoutes = uniqBy(allowedRoutes, 'url');
  //   // 	this.setState({ allowedRoutes });
  //   // } else {
  //   // 	this.props.history.push('/login');
  //   // }
  // }
  useEffect(() => {
    console.log(props.match.path);
    // let token = JSON.parse(localStorage.getItem("token"));
    let roles = JSON.parse(localStorage.getItem("roles"));
    if (roles) {
      roles = ["common", ...roles];
      let allowedRoutes = roles.reduce((acc, role) => {
        return [...acc, ...rolesConfig[role].routes];
      }, []);
      // For removing duplicate entries, compare with 'url'.
      allowedRoutes = uniqBy(allowedRoutes, "url");
      setallowedRoutes(allowedRoutes);
    }
  }, []);

  return (
    <Fragment>
      <Navigation routes={allowedRoutes} path={props.match.path} />
      <Switch>
        {allowedRoutes.map((route) => (
          <Route
            exact
            key={route.url}
            component={Routes[route.component]}
            path={`${props.match.path}${route.url}`}
          />
        ))}
        <Route
          exact
          path={`${props.match.path}/detailed-item/:id`}
          component={DetailedItem}
        />
        <Route component={NotFound} />
      </Switch>
    </Fragment>
  );
}

export default PrivateRoutes;
