const Database = require("../config/CreateConnection");
// const DB = new Database();
// const db = DB.establishConnection();
const express = require("express");
const app = express();
const { v4: uuidv4 } = require('uuid');
const cors = require("cors");
const patientInfo = require("../models/PatientInfo")
const db=require("../config/CreateConnection")
const record = require("../models/Record");
module.exports=appointmentInfo=(req,res)=>{
const {name,email,phone,time,date,medicalhistory}=req.body;
console.log(req.body);
db.query(
   
    "INSERT INTO patientInfo (Patient_ID,Name,Email,Phone,MedicalHistory) VALUES(?,?,?,?,?)",[uuidv4(),name,email,phone,medicalhistory],
    (err,result)=>{
        console.log(err);
        res.status(200).json({
        })
    },

//  "INSERT INTO record (Time,Date) VALUES(?,?)",[time,date],
//     (err,result)=>{
//         console.log(err);
//         res.status(200).json({

//         })
//     }
  
    );



// db.query(
//     "INSERT INTO record (Time,Date) VALUES(?,?)",[time,date],
//     (err,result)=>{
//         console.log(err);
//         res.status(200).json({

//         })
//     }
// );


}
