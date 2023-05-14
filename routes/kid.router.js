const express=require("express");
require("dotenv").config();
const {KidModel} =require("../models/kid.model.js");
const {AdminModel}=require("../models/admin.model.js");
const {adminAuth}=require("../middlewares/admin.auth.js");

const kidRouter=express.Router();

kidRouter.get("/", async(req,res)=>{
    try{
        const kid=await KidModel.find();
        res.send(kid);
    }catch(err){
        res.send({"err in getting kid products":err})
    }
})

kidRouter.get("/filter", async(req,res)=>{
    const query=req.query;
    let category=query.category;
    let color=query.color;
    let kid;
    try{
        if(category && color){
            kid=await KidModel.find({$and:[{category:{$regex:category,$options:"i"}},{color:{$regex:color,$options:"i"}}]});  
        }else if(category){
            kid=await KidModel.find({category:{$regex:category,$options:"i"}})
        }else if(color){
            kid=await KidModel.find({color:{$regex:color,$options:"i"}})
        }else{
            kid=await KidModel.find();
        }       
        res.send(kid);
    }catch(err){
        res.send({"err in getting filtered products":err})
    }
})

kidRouter.get("/exc", async(req,res)=>{
    try{
        const kid1=await KidModel.find({offer:true});
        res.send(kid1);
    }catch(err){
        res.send({"err in getting kid products":err});
    }
})

kidRouter.get("/sort", async(req,res)=>{
    let query=req.query;
    let kid;
    try{
        if(query.sort=="lth"){
            kid=await KidModel.find().sort({price:1});
        }else if(query.sort=="htl"){
            kid=await KidModel.find().sort({price:-1});
        }else if(query.sort=="asc"){
            kid=await KidModel.find().sort({title:1});
        }else if(query.sort=="desc"){
            kid=await KidModel.find().sort({title:-1});
        }else{
            kid=await KidModel.find();
        }
        res.send(kid);
    }catch(err){
        res.send({"err in getting kid products":err});
    }
})

kidRouter.get("/search", async(req,res)=>{
    let query=req.query;
    try{
        const kid=await KidModel.find({title:{$regex:query.q,$options:"i"}});
        res.send(kid);
    }catch(err){
        res.send({"err in getting kid products":err});
    }
})

kidRouter.post("/create", adminAuth, async(req,res)=>{
    const payload=req.body;
    try{
        const admin=await AdminModel.find({_id:payload.adminID});
        if(admin.length>0){
            const new_kid=new KidModel(payload);
            await new_kid.save();
            res.send({"msg":"New product created"});
        }else{
            res.send({"msg":"You are not authorized"});
        }
    }catch(err){
        res.send({"err in created new product":err});
    }
})

kidRouter.patch("/update/:id", adminAuth, async(req,res)=>{
    const productID=req.params.id;
    const payload=req.body;
    try{
        const admin=await AdminModel.find({_id:payload.adminID});
        if(admin.length>0){
            await KidModel.findByIdAndUpdate({_id:productID},payload)
            res.send({"msg":"Product updated"});
        }else{
            res.send({"msg":"You are not authorized"});
        }
    }catch(err){
        res.send({"err in updated the product":err});
    }
})

kidRouter.delete("/delete/:id", adminAuth, async(req,res)=>{
    const productID=req.params.id;
    const payload=req.body;
    try{
        const admin=await AdminModel.find({_id:payload.adminID});
        if(admin.length>0){
            await KidModel.findByIdAndDelete({_id:productID});
            res.send({"msg":"Product deleted"});
        }else{
            res.send({"msg":"You are not authorized"});
        }
    }catch(err){
        res.send({"err in deleting the product":err});
    }
})


module.exports={kidRouter};