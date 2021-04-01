import React from "react";
import PropTypes from "prop-types";

import { Row } from "antd";

const Body = (props) => {
  const { children, style, size = 144, ...rest } = props;
  return (
    <Row
      justify="center"
      style={{
        minHeight: `calc(calc(100vh - calc(100vh - 100%)) - ${size}px)`,
        width: "100%",
        padding: "0 8px",
      }}
    >
      <Row
        style={{
          maxWidth: "1116px",
          width: "100%",
          padding: "16px 0px",
          flexDirection: "column",
          ...style,
        }}
        {...rest}
      >
        {children}
      </Row>
    </Row>
  );
};

Body.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  style: PropTypes.object,
  size: PropTypes.number.isRequired,
};

export default Body;
