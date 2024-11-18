import mongoose from "mongoose"

const userSchema=await mongoose.Schema({
    photo:{type:String},
    name:{type:String},
    gender:{type:String},
    dob:{type:String},
    email:{type:String},
    place:{type:String},
    phone:{type:String},
    department:{type:String},
    designation:{type:String},
    salary:{type:String}
})

export default mongoose.model.users||mongoose.model("user",userSchema)