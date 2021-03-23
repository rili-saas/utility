import React from "react";
import PropTypes from "prop-types";

const Widget = function (props) {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        boxShadow: "0px 0px 10px 0px #ddd",
        marginBottom: "12px",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        ...props.style,
      }}
    >
      {props.children}
    </div>
  );
};
// widget

// header
function HeaderContent(props) {
  return (
    <div
      style={{
        height: "40px",
        display: "flex",
        alignItems: "center",
        margin: "0 10px",
      }}
    >
      {props.children}
    </div>
  );
}

const HeaderIcon = function (props) {
  return (
    <div
      style={{
        marginRight: "5px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      {...props}
    >
      {props.children}
    </div>
  );
};

function HeaderText(props) {
  const { children, style } = props;
  return (
    <h3 {...props} style={{ margin: "0", fontWeight: "bold", ...style }}>
      {children}
    </h3>
  );
}
HeaderText.propTypes = {
  children: PropTypes.node,
  style: PropTypes.node,
};

const HeaderStatus = function (props) {
  return (
    <div
      style={{
        flex: "1",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      {...props}
    >
      {props.children}
    </div>
  );
};
HeaderStatus.propTypes = {
  children: PropTypes.node,
};

function HeaderOption(props) {
  const { children, isIcon } = props;
  return (
    <div style={{ marginLeft: "auto", marginRight: isIcon && "-5px" }}>
      {children}
    </div>
  );
}
HeaderOption.propTypes = {
  children: PropTypes.node,
  isIcon: PropTypes.bool,
};

HeaderContent.Icon = HeaderIcon;
HeaderContent.Text = HeaderText;
HeaderContent.Status = HeaderStatus;
HeaderContent.Option = HeaderOption;
// header

// body
function BodyContent(props) {
  const { children, style } = props;
  return (
    <div {...props} style={{ flex: "1", padding: "0px 10px 10px", ...style }}>
      {children}
    </div>
  );
}

BodyContent.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
};
// body

Widget.Header = HeaderContent;
Widget.Body = BodyContent;

export default Widget;
