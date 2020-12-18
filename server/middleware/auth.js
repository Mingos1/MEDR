const jwt = require("jsonwebtoken");
require("dotenv").config({ path: __dirname + "/.env" });

module.exports = function (req, res, next) {
  try {
    const jwtToken = req.header("token");

    if (!jwtToken) {
      return res.status(403).json({ msg: "not authorized" });
    }

    const payload = jwt.verify(jwtToken, process.env.JWTSECRET);

    req.user = payload.id;
    console.log(req.user);
    next();
  } catch (err) {
    return res.status(401).json({ msg: "Server error" });
  }
};
