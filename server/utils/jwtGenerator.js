const jwt = require("jsonwebtoken");
require("dotenv").config({ path: __dirname + "/.env" });

function jwtGenerator(user_id) {
  const payload = {
    id: user_id,
  };
  return jwt.sign(payload, process.env.JWTSECRET, { expiresIn: "1hr" });
}

module.exports = jwtGenerator;
