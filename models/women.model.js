const mongoose=require("mongoose");

const womenSchema=mongoose.Schema({
    title:{type:String, required:true},
    avatar:{type:String, required:true},
    price:{type:Number, required:true},
    category:{type:String, required:true},
    offer:{type:Boolean, required:true},
    color:{type:String, required:true}
},{versionKey:false});

const WomenModel=mongoose.model("women",womenSchema);

module.exports={WomenModel};