import React, { useState, useEffect, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import { uniqBy } from "lodash";
import { rolesConfig } from "../config/roles";
import * as Routes from "./index";
import Navigation from "../components/Navigation";
import NotFound from "../components/NotFound";

import FossilDetailed from "../pages/DetailedItem/FossilDetailed";
import CollectionDetailed from "../pages/DetailedItem/CollectionDetailed";
import DetailedItem from "../pages/DetailedItem";
// import DetailedItem from "../pages/DetailedItem";

import Registration from "../pages/Registration/FossilRegistration";
import Classification from "../components/subRegistration/Classification";

import FossilList from "../pages/List/FossilList";
import TreasuryList from "../pages/List/TreasuryList";
import CollectionList from "../pages/List/CollectionList";

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

    let token = localStorage.getItem("token");
    let role = localStorage.getItem("role");
    if (token) {
      //
      let roles = ["common", role];
      let allowedRoutes = roles.reduce((acc, role) => {
        console.log(acc);
        return [...acc, ...rolesConfig[role].routes];
      }, []);
      // For removing duplicate entries, compare with 'url'.
      allowedRoutes = uniqBy(allowedRoutes, "url");
      console.log(allowedRoutes);
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
          path={`${props.match.path}/fossil-registration/:id`}
          component={Registration}
        />
        <Route
          exact
          path={`${props.match.path}/detailed-item/:id/fossil`}
          component={FossilDetailed}
        />
        <Route
          exact
          path={`${props.match.path}/detailed-item/:id/collection`}
          component={CollectionDetailed}
        />
        <Route
          exact
          path={`${props.match.path}/detailed-item/:id/:type`}
          component={DetailedItem}
        />
        {/* <Route path="/register" component={Registration} /> */}
        <Route
          path={`${props.match.path}/class-registration`}
          component={Classification}
        />
        <Route
          path={`${props.match.path}/fossil-list`}
          component={FossilList}
        />
        <Route
          path={`${props.match.path}/treasury-list`}
          component={TreasuryList}
        />
        <Route
          path={`${props.match.path}/collection-list`}
          component={CollectionList}
        />
        <Route component={NotFound} />
      </Switch>
    </Fragment>
  );
}

export default PrivateRoutes;
