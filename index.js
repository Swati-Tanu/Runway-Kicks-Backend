const express=require("express");
const cors=require("cors");
const {connection}=require("./config/db.js");
const {userRouter} = require("./routes/user.router.js");
const {adminRouter} = require("./routes/admin.router.js");
const {menRouter} = require("./routes/men.router.js");
const {womenRouter} = require("./routes/women.router.js");
const {kidRouter} = require("./routes/kid.router.js");
const {cartRouter} = require("./routes/cart.router.js");
const {orderRouter} = require("./routes/order.router.js");
require("dotenv").config();

const app=express();

app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Welcome to backend Home page of Runway Kicks!");
})

app.use("/user",userRouter);
app.use("/admin",adminRouter);
app.use("/men",menRouter);
app.use("/women",womenRouter);
app.use("/kid",kidRouter);

app.use("/cart",cartRouter);
app.use("/order",orderRouter);


app.listen(process.env.port, async()=>{
    try{
        await connection;
        console.log("Connected to DB");
    }catch(err){
        console.log("err:", err);
    }
    console.log(`Server running on port ${process.env.port}`);
})