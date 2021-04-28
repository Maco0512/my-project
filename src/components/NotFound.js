import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import HeroWrapper from "./HeroWrapper";

const NotFound = (props) => (
  <HeroWrapper {...props.jumbotronProps}>{props.children}</HeroWrapper>
);

NotFound.propTypes = {
  jumbotronProps: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }),
};

NotFound.defaultProps = {
  jumbotronProps: {
    title: "404 not found",
  },
  children: (
    <Link className="nav-link" to="/login">
      Back
    </Link>
  ),
};

export default NotFound;
