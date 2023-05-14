const mongoose=require("mongoose");

const kidSchema=mongoose.Schema({
    title:{type:String, required:true},
    avatar:{type:String, required:true},
    price:{type:Number, required:true},
    category:{type:String, required:true},
    offer:{type:Boolean, required:true},
    color:{type:String, required:true}
},{versionKey:false});

const KidModel=mongoose.model("kid",kidSchema);

module.exports={KidModel};