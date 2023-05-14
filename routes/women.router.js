const express=require("express");
require("dotenv").config();
const {WomenModel} =require("../models/women.model.js");
const {AdminModel}=require("../models/admin.model.js");
const {adminAuth}=require("../middlewares/admin.auth");

const womenRouter=express.Router();

womenRouter.get("/", async(req,res)=>{
    try{
        const women=await WomenModel.find();
        res.send(women);
    }catch(err){
        res.send({"err in getting women products":err})
    }
})

womenRouter.get("/filter", async(req,res)=>{
    const query=req.query;
    let category=query.category;
    let color=query.color;
    let women;
    try{
        if(category && color){
            women=await WomenModel.find({$and:[{category:{$regex:category,$options:"i"}},{color:{$regex:color,$options:"i"}}]});  
        }else if(category){
            women=await WomenModel.find({category:{$regex:category,$options:"i"}})
        }else if(color){
            women=await WomenModel.find({color:{$regex:color,$options:"i"}})
        }else{
            women=await WomenModel.find();
        }       
        res.send(women);
    }catch(err){
        res.send({"err in getting filtered products":err})
    }
})

womenRouter.get("/exc", async(req,res)=>{
    try{
        const women1=await WomenModel.find({offer:true});
        res.send(women1);
    }catch(err){
        res.send({"err in getting women products":err});
    }
})

womenRouter.get("/sort", async(req,res)=>{
    let query=req.query;
    let women;
    try{
        if(query.sort=="lth"){
            women=await WomenModel.find().sort({price:1});
        }else if(query.sort=="htl"){
            women=await WomenModel.find().sort({price:-1});
        }else if(query.sort=="asc"){
            women=await WomenModel.find().sort({title:1});
        }else if(query.sort=="desc"){
            women=await WomenModel.find().sort({title:-1});
        }else{
            women=await WomenModel.find();
        }
        res.send(women);
    }catch(err){
        res.send({"err in getting women products":err});
    }
})

womenRouter.get("/search", async(req,res)=>{
    let query=req.query;
    try{
        const women=await WomenModel.find({title:{$regex:query.q,$options:"i"}});
        res.send(women);
    }catch(err){
        res.send({"err in getting women products":err});
    }
})

womenRouter.post("/create", adminAuth, async(req,res)=>{
    const payload=req.body;
    try{
        const admin=await AdminModel.find({_id:payload.adminID});
        if(admin.length>0){
            const new_women=new WomenModel(payload);
            await new_women.save();
            res.send({"msg":"New product created"});
        }else{
            res.send({"msg":"You are not authorized"});
        }
    }catch(err){
        res.send({"err in created new product":err});
    }
})

womenRouter.patch("/update/:id", adminAuth, async(req,res)=>{
    const productID=req.params.id;
    const payload=req.body;
    try{
        const admin=await AdminModel.find({_id:payload.adminID});
        if(admin.length>0){
            await WomenModel.findByIdAndUpdate({_id:productID},payload)
            res.send({"msg":"Product updated"});
        }else{
            res.send({"msg":"You are not authorized"});
        }
    }catch(err){
        res.send({"err in updated the product":err});
    }
})

womenRouter.delete("/delete/:id", adminAuth, async(req,res)=>{
    const productID=req.params.id;
    const payload=req.body;
    try{
        const admin=await AdminModel.find({_id:payload.adminID});
        if(admin.length>0){
            await WomenModel.findByIdAndDelete({_id:productID});
            res.send({"msg":"Product deleted"});
        }else{
            res.send({"msg":"You are not authorized"});
        }
    }catch(err){
        res.send({"err in deleting the product":err});
    }
})


module.exports={womenRouter};


