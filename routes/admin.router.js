const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { AdminModel } = require("../models/admin.model.js");

const adminRouter = express.Router();

adminRouter.post("/register", async (req, res) => {
  const { name, email, password, verification } = req.body;
  const SALT = parseInt(process.env.SALT);
  try {
    if (verification === undefined || verification === null) {
      res.send({ msg: "Invalid verification" });
    }

    if (verification != process.env.ADMIN_VERIFICATION) {
      res.send({ msg: "Wrong Admin verification" });
    } else {
      const admin = await AdminModel.find({ email });
      if (admin.length == 0) {
        bcrypt.hash(password, SALT, async (err, hash) => {
          if (err) {
            console.log(err);
          } else {
            const new_admin = new AdminModel({
              name,
              email,
              password: hash,
            });
            await new_admin.save();
            res.send({ msg: "Registered as Admin" });
          }
        });
      } else {
        res.send({ msg: "Please Login" });
      }
    }
  } catch (err) {
    console.log("error in registering new user");
  }
});

adminRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const admin = await AdminModel.find({ email });
    if (admin.length > 0) {
      bcrypt.compare(password, admin[0].password, (err, result) => {
        if (result) {
          const token = jwt.sign(
            { adminID: admin[0]._id, adminName: admin[0].name },
            process.env.KEY
          );
          res.send({
            msg: "Admin Login Successful",
            token: token,
            adminName: admin[0].name,
          });
        } else {
          res.send({ msg: "Wrong Credentials" });
        }
      });
    } else {
      res.send({ msg: "Wrong Credentials" });
    }
  } catch (err) {
    console.log("error in logging in");
  }
});

module.exports = { adminRouter };
