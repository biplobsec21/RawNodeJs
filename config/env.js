const env = {};
// define stagging data
env.staging = {
  port: 3000,
  envName: "staging",
};
// define production data
env.production = {
  port: 5000,
  envName: "production",
};

// determine which environment was passed
const currentEnv =
  typeof process.env.NODE_ENV === "string" ? process.env.NODE_ENV : "staging";

// export corresponding environment object
const environment =
  typeof env[currentEnv] === "object" ? env[currentEnv] : env.staging;

// export module
module.exports = environment;
