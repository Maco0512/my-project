import React, { useContext, useEffect } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import PublicRoutes from "../../routes/PublicRoutes";
import PrivateRoutes from "../../routes/PrivateRoutes";
import Home from "../Home";
import history from "../../util/history";
import UserContext from "../../context/UserContext";

function App() {
  const userCtx = useContext(UserContext);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    if (token) {
      userCtx.loginUserSucces(token, userId);
    }
  }, []);

  const authentication = () =>
    localStorage.getItem("token") ? <Redirect to="/app" /> : <PublicRoutes />;

  return (
    // <Container fluid>
    // 	<Row>
    // 		<Col>
    <Router history={history}>
      <Switch>
        <Route path="/app" component={PrivateRoutes} />
        <Route path="/login" render={authentication} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
