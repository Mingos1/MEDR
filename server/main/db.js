require("dotenv").config({ path: __dirname + "/.env" });
let { Pool } = require("pg");

let pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.DATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

module.exports;
