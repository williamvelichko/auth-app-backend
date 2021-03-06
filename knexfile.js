//const path = require("path");
//var dotenv = require("dotenv");
require("dotenv").config();
const pg = require("pg");
//dotenv.config({ path: "../env" });

// if (process.env.DATABASE_URL) {
//   pg.defaults.ssl = { rejectUnauthorized: false };
// }

const sharedConfig = {
  client: "pg",
  migrations: { directory: "./migrations" },
  seeds: { directory: "./seeds" },
};

module.exports = {
  development: {
    ...sharedConfig,
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10,
    },
  },

  test: {
    ...sharedConfig,
    connection: process.env.TESTING_DATABASE_URL,
  },

  production: {
    ...sharedConfig,
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: true,
    },
  },
};
