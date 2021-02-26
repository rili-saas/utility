const jwt = require("jsonwebtoken");

const { SECRET } = process.env;

export default (token) => {
  if (!token) {
    const error = new Error("The api token is missing");

    error.code = "MISSING_TOKEN";
    error.status = 401;

    throw error;
  }

  let verify = null;
  let authenticated = false;

  const parts = token.split(" ");

  if (!parts.length === 2) {
    const error = new Error("The api token is invalid");

    error.code = "INVALID_TOKEN";
    error.status = 401;

    throw error;
  }

  const [type, data] = parts;

  if (type !== "Bearer") {
    const error = new Error("The api token is malformatted");

    error.code = "MALFORMATTED_TOKEN";
    error.status = 401;

    throw error;
  }

  try {
    verify = jwt.verify(data, SECRET);
    authenticated = !!verify;
  } catch (err) {}

  return {
    ...verify,
    authenticated,
  };
};
