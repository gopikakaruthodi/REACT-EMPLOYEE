import userSchema from './emp.model.js'

export async function addEmployee(req,res) {
    try {
        const{...emp}=req.body
        await userSchema.create({...emp}).then(()=>{
            res.status(201).send("Successfully Added");
        }).catch((error)=>{
            res.status(404).send(error);
        })
    } catch (error) {
        console.log(error);    
    }
    
}
export async function displayEmployees(req,res) {
    try {
        const data=await userSchema.find()
        res.status(200).send(data);
    } catch (error) {
        console.log(error);
        res.status(404).send(error);    
    }
    
}
export async function displayEmployee(req,res) {
    try {
        const _id=req.params
        const data=await userSchema.findOne({_id})
        res.status(200).send(data);        
    } catch (error) {
        console.log(error);
        res.status(404).send(error);    
    } 
}

export async function updateEmployee(req,res) {
    try {
        const _id=req.params
        const{...emp}=req.body
        await userSchema.updateOne({_id},{$set:{...emp}}).then(()=>{
            res.status(201).send("Successfully Updated");
        }).catch((error)=>{
            res.status(404).send(error);
        })    
    } catch (error) {
        console.log(error);    
    }
    
}
export async function deleteEmployee(req,res) {
    try {
        const _id=req.params
        await userSchema.deleteOne({_id}).then(()=>{
            res.status(200).send("Successfully Deleted");
        }).catch((error)=>{
            res.status(404).send(error);
        })  
    } catch (error) {
        console.log(error);     
    }
    
}