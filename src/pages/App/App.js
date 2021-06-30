import React, { useContext, useEffect } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import PublicRoutes from "../../routes/PublicRoutes";
import PrivateRoutes from "../../routes/PrivateRoutes";
import Home from "../Home";
import history from "../../util/history";
import UserContext from "../../context/UserContext";

import "./main.css";

function App() {
  const userCtx = useContext(UserContext);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const role = localStorage.getItem("role");
    if (token) {
      userCtx.loginUserSucces(token, userId, role);
    }
  }, []);

  // const handleLogout = () => {
  //   localStorage.removeItem("token");
  //   userCtx.logout();

  // };
  const authentication = () =>
    localStorage.getItem("token") ? <Redirect to="/app" /> : <PublicRoutes />;

  return (
    <Router history={history}>
      <Switch>
        <Route
          path="/app"
          render={({ match }) => (
            <PrivateRoutes match={match} role={userCtx.state.role} />
          )}
        />
        <Route path="/login" render={authentication} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
