import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Link as Link$1 } from 'react-router-dom';
import { Row } from 'antd';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

const Link = ({
  to = "#",
  ...rest
}) => /^https?:\/\//.test(to) ? /*#__PURE__*/React.createElement("a", _extends({
  href: to
}, rest)) : /*#__PURE__*/React.createElement(Link$1, _extends({
  to: to
}, rest));

Link.propTypes = {
  to: PropTypes.string
};

const Body = props => {
  const {
    children,
    style,
    ...rest
  } = props;
  return /*#__PURE__*/React.createElement(Row, {
    justify: "center",
    style: {
      minHeight: 'calc(calc(100vh - calc(100vh - 100%)) - 100px)',
      width: '100%',
      padding: '0 8px'
    }
  }, /*#__PURE__*/React.createElement(Row, _extends({
    style: {
      maxWidth: '1116px',
      width: '100%',
      padding: '16px 0px',
      alignContent: 'flex-start',
      ...style
    }
  }, rest), children));
};

Body.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  style: PropTypes.object
};

const Widget = function (props) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: '#ffffff',
      boxShadow: '0px 0px 10px 0px #ddd',
      marginBottom: '12px',
      borderRadius: '8px',
      display: 'flex',
      flexDirection: 'column',
      ...props.style
    }
  }, props.children);
}; // widget
// // header


function HeaderContent(props) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '40px',
      display: 'flex',
      alignItems: 'center',
      margin: '0 10px'
    }
  }, props.children);
}

const HeaderIcon = function (props) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      marginRight: '5px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, props), props.children);
};

function HeaderText(props) {
  const {
    children,
    style
  } = props;
  return /*#__PURE__*/React.createElement("h3", _extends({}, props, {
    style: {
      margin: '0',
      fontWeight: 'bold',
      ...style
    }
  }), children);
}

HeaderText.propTypes = {
  children: PropTypes.node,
  style: PropTypes.node
};

const HeaderStatus = function (props) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      flex: '1',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, props), props.children);
};

HeaderStatus.propTypes = {
  children: PropTypes.node
};

function HeaderOption(props) {
  const {
    children,
    isIcon
  } = props;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      marginRight: isIcon && '-5px'
    }
  }, children);
}

HeaderOption.propTypes = {
  children: PropTypes.node,
  isIcon: PropTypes.bool
};
HeaderContent.Icon = HeaderIcon;
HeaderContent.Text = HeaderText;
HeaderContent.Status = HeaderStatus;
HeaderContent.Option = HeaderOption; // header
// body

function BodyContent(props) {
  const {
    children,
    style
  } = props;
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    style: {
      flex: '1',
      padding: '0px 10px 10px',
      ...style
    }
  }), children);
}

BodyContent.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object
}; // body

Widget.Header = HeaderContent;
Widget.Body = BodyContent;

var index$1 = {
  link: Link,
  body: Body,
  widget: Widget
};

//https://github.com/Upmostly/react-hooks-infinite-scroll

const useInfiniteScroll = callback => {
  const [isFetching, setIsFetching] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    if (!isFetching) return;
    callback();
  }, [isFetching]);

  function handleScroll() {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isFetching) {
      setIsFetching(true);
    }
  }

  return [isFetching, setIsFetching];
};

// https://stackoverflow.com/a/53180013/8589328
var useUpdate = ((fn, inputs) => {
  const didMountRef = useRef(false);
  useEffect(() => {
    if (didMountRef.current) fn();else didMountRef.current = true;
  }, inputs);
});

// https://pt-br.reactjs.org/docs/hooks-custom.html
var index = {
  useUpdate,
  useInfiniteScroll
};

export { index$1 as components, index as hooks };
