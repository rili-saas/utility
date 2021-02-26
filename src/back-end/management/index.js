import authentication from "./authentication";
import Authorization from "./authorization";

import cucAuthorizationStrategy from "./authorization/cuc-strategy";
import jwtAuthorizationStrategy from "./authorization/jwt-strategy";

export default {
  cucAuthorizationStrategy,
  jwtAuthorizationStrategy,
  authentication,
  Authorization,
};
