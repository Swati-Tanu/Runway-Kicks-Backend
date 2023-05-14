const express=require("express");
require("dotenv").config();
const {MenModel} =require("../models/men.model.js");
const {AdminModel}=require("../models/admin.model.js");
const {adminAuth}=require("../middlewares/admin.auth");

const menRouter=express.Router();

menRouter.get("/", async(req,res)=>{
    try{
        const men=await MenModel.find();
        res.send(men);
    }catch(err){
        res.send({"err in getting men products":err})
    }
})

menRouter.get("/filter", async(req,res)=>{
    const query=req.query;
    let category=query.category;
    let color=query.color;
    let men;
    try{
        if(category && color){
            men=await MenModel.find({$and:[{category:{$regex:category,$options:"i"}},{color:{$regex:color,$options:"i"}}]});  
        }else if(category){
            men=await MenModel.find({category:{$regex:category,$options:"i"}})
        }else if(color){
            men=await MenModel.find({color:{$regex:color,$options:"i"}})
        }else{
            men=await MenModel.find();
        }       
        res.send(men);
    }catch(err){
        res.send({"err in getting filtered products":err})
    }
})

menRouter.get("/exc", async(req,res)=>{
    try{
        const men1=await MenModel.find({offer:true});
        res.send(men1);
    }catch(err){
        res.send({"err in getting men products":err});
    }
})

menRouter.get("/sort", async(req,res)=>{
    let query=req.query;
    let men;
    try{
        if(query.sort=="lth"){
            men=await MenModel.find().sort({price:1});
        }else if(query.sort=="htl"){
            men=await MenModel.find().sort({price:-1});
        }else if(query.sort=="asc"){
            men=await MenModel.find().sort({title:1});
        }else if(query.sort=="desc"){
            men=await MenModel.find().sort({title:-1});
        }else{
            men=await MenModel.find();
        }
        res.send(men);
    }catch(err){
        res.send({"err in getting men products":err});
    }
})

menRouter.get("/search", async(req,res)=>{
    let query=req.query;
    try{
        const men=await MenModel.find({title:{$regex:query.q,$options:"i"}});
        res.send(men);
    }catch(err){
        res.send({"err in getting men products":err});
    }
})

menRouter.post("/create", adminAuth, async(req,res)=>{
    const payload=req.body;
    try{
        const admin=await AdminModel.find({_id:payload.adminID});
        if(admin.length>0){
            const new_men=new MenModel(payload);
            await new_men.save();
            res.send({"msg":"New product created"});
        }else{
            res.send({"msg":"You are not authorized"});
        }
    }catch(err){
        res.send({"err in created new product":err});
    }
})

menRouter.patch("/update/:id", adminAuth, async(req,res)=>{
    const productID=req.params.id;
    const payload=req.body;
    try{
        const admin=await AdminModel.find({_id:payload.adminID});
        if(admin.length>0){
            await MenModel.findByIdAndUpdate({_id:productID},payload)
            res.send({"msg":"Product updated"});
        }else{
            res.send({"msg":"You are not authorized"});
        }
    }catch(err){
        res.send({"err in updated the product":err});
    }
})

menRouter.delete("/delete/:id", adminAuth, async(req,res)=>{
    const productID=req.params.id;
    const payload=req.body;
    try{
        const admin=await AdminModel.find({_id:payload.adminID});
        if(admin.length>0){
            await MenModel.findByIdAndDelete({_id:productID});
            res.send({"msg":"Product deleted"});
        }else{
            res.send({"msg":"You are not authorized"});
        }
    }catch(err){
        res.send({"err in deleting the product":err});
    }
})


module.exports={menRouter};