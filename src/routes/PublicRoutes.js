import React, { Fragment } from "react";
import { Link, Route, Switch } from "react-router-dom";
import HeroWrapper from "../components/HeroWrapper";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../components/NotFound";

const Register = () => (
  <HeroWrapper title="Register">
    <Link className="nav-link" to="/">
      Back to login
    </Link>
  </HeroWrapper>
);
const ForgotPassword = () => (
  <HeroWrapper title="ForgotPassword">
    <Link className="nav-link" to="/">
      Back to login
    </Link>
  </HeroWrapper>
);

const PublicRoutes = ({ match }) => (
  <Fragment>
    <Switch>
      <Route path="/forgot-password" component={ForgotPassword} />
      {/* <Route exact path="/login" component={Login} /> */}
      <Route path="/login" component={Login} />
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </Fragment>
);

export default PublicRoutes;
