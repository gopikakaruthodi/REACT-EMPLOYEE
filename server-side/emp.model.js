import mongoose from "mongoose"

const userSchema=await mongoose.Schema({
    profile:{type:String},
    name:{type:String},
    gender:{type:String},
    age:{type:Number},
    email:{type:String},
    place:{type:String},
    phone:{type:String},
    department:{type:String},
    designation:{type:String},
    salary:{type:Number}
})

export default mongoose.model.users||mongoose.model("user",userSchema)