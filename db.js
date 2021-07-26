"use strict";

/** Database setup for jobly. */

const { Client } = require("pg");
const { getDatabaseUri } = require("./config");

let config = { connectionString: getDatabaseUri() };
if (process.env.NODE_ENV === 'production') {
  config.ssl = { rejectUnauthorized: false }
}
const db = new Client(config)
// const db = new Client({
//   connectionString: getDatabaseUri(),
// });

db.connect();

module.exports = db;


