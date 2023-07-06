const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
        env: {
          mongodb_username: "first_user",
          mongodb_password: "8Y8NJri6jTRaaDrg",
          mongodb_clustername: "cluster0",
          mongodb_database: "my-blogs-dev",
        },
      };
  }

  return {
    env: {
      mongodb_username: "first_user",
      mongodb_password: "8Y8NJri6jTRaaDrg",
      mongodb_clustername: "cluster0",
      mongodb_database: "my-blogs",
    },
  };
};
