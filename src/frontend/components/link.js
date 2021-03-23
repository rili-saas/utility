import React from "react";
import PropTypes from "prop-types";

import { Link as L } from "react-router-dom";

const Link = ({ to = "#", ...rest }) =>
  /^https?:\/\//.test(to) ? <a href={to} {...rest} /> : <L to={to} {...rest} />;

Link.propTypes = {
  to: PropTypes.string,
};

export default Link;
