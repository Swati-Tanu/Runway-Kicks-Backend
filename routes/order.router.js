const express = require("express");
require("dotenv").config();
const { OrderModel } = require("../models/order.model.js");
const { CartModel } = require("../models/cart.model.js");
const { userAuth } = require("../middlewares/user.auth.js");

const orderRouter = express.Router();

orderRouter.get("/", userAuth, async (req, res) => {
  const userID = req.body.userID;
  try {
    const items = await OrderModel.find({ userID });
    res.send(items);
  } catch (err) {
    res.send({ "err in getting order history": err });
  }
});

orderRouter.get("/search", userAuth, async (req, res) => {
  const userID = req.body.userID;
  let query = req.query;
  try {
    const orders = await OrderModel.find({
      userID,
      title: { $regex: query.title, $options: "i" },
    });
    res.send(orders);
  } catch (err) {
    res.send({ "err in getting ordered products": err });
  }
});

module.exports = { orderRouter };
