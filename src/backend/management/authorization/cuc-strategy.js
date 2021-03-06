export default (data) => {
  if (!data) {
    const error = new Error("The cuc is missing");

    error.code = "MISSING_CUC";
    error.status = 401;

    throw error;
  }

  return {
    account: data,
    authenticated: true,
  };
};
