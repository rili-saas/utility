const validate = (resolver) => {
  const baseResolver = resolver;

  baseResolver.validate = (childResolver) => {
    const newResolver = async (parent, args, context, info) => {
      await resolver(parent, args, context, info);

      return childResolver(parent, args, context, info);
    };

    return validate(newResolver);
  };

  return baseResolver;
};

export default validate((_, __, { auth }) => {
  if (!auth || !auth.authenticated) {
    const {
      message = "Not Authenticated",
      code = "NOT_AUTHENTICATED",
      status = 401,
    } = auth || {};

    const error = new Error(message);

    error.code = code;
    error.status = status;

    throw error;
  }
});
