const jwt = require("jsonwebtoken");
require("dotenv").config();

const adminAuth = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1]; 
  
  if (token) {
    const decoded = jwt.verify(token, process.env.KEY);
    if (decoded) {
      req.body.adminID = decoded.adminID;
      next();
    } else {
      res.send({ msg: "You are not authorized" });
    }
  } else {
    res.send({ msg: "You are not authorized" });
  }
};

module.exports = { adminAuth };
