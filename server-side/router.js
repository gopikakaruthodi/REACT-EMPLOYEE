import { Router } from "express";
import * as rh from "./requestHandler.js";
import multer from "multer";
import path from 'path';

const router=Router()

// const storage = multer.diskStorage({
//     destination: "./uploads",
//     filename: function (req, file, cb) {
        
//       const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//       cb(null, uniqueSuffix + "_" + file.originalname)
//     }
//   })
  
//   const upload = multer({storage})


router.route("/addemp").post(rh.addEmployee)
router.route("/displayemps").get(rh.displayEmployees)
router.route("/displayemp/:_id").get(rh.displayEmployee)
router.route("/updateemp/:_id").put(rh.updateEmployee)
router.route("/deleteemp/:_id").delete(rh.deleteEmployee)

// router.route("/image/:filename").get((req,res)=>{
//     const{filename}=req.params
//     return res.sendFile(path.resolve(`./uploads/${filename}`))
//   })

export default router