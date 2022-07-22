const express=require("express")
const app=express();
const db=require("../config/CreateConnection")
const User=require("../models/User")
const Dept=require("../models/Dept")
const Shift=require("../models/Shift")
const Record =require("../models/Record")
const PatientInfo= require("../models/PatientInfo")
const Fees=require("../models/Fees")
const Facilities=require("../models/Facilities")
const DuplicateUser=require("../models/DuplicateUser")
const DuplicateUserInfo=require("../models/DuplicateUserInfo")
const Degrees=require("../models/Degrees")
const Cost=require("../models/Cost")
const Conversation=require("../models/Conversation")
const ConversationReply=require("../models/ConversationReply")
const BuildingInfo=require("../models/BuildingInfo")
const Buildings=require("../models/Buildings")
const Admin=require("../models/Admin")
const patientInfo = require("../models/PatientInfo");
const duplicateUserInfo = require("../models/DuplicateUserInfo");
const verification=require("../models/VarificationToken")
module.exports=createDatabase=async(req,res)=>{
    // db.query(User,(err,result)=>{
    //     if(err)
    //     throw err;
    //     console.log("user created")
    // })
    // db.query(patientInfo,(err,result)=>{
    //     if(err)
    //     throw err;
    //     console.log("patient created")
    // })
    // db.query(Shift,(err,result)=>{
    //     if(err)
    //     throw err;
    //     console.log("user created")
    // })
    db.query(Dept,(err,result)=>{
        if(err)
        throw err;
        console.log("user created")
    })
    db.query(Degrees,(err,result)=>{
        if(err)
        throw err;
        console.log("user created")
    })
    db.query(BuildingInfo,(err,result)=>{
        if(err)
        throw err;
        console.log("user created")
    })
    db.query(Buildings,(err,result)=>{
        if(err)
        throw err;
        console.log("user created")
    })
 
    db.query(Facilities,(err,result)=>{
        if(err)
        throw err;
        console.log("user created")
    })
    db.query(Cost,(err,result)=>{
        if(err)
        
        throw err;
        console.log("user created")
    })
    db.query(Fees,(err,result)=>{
        if(err)
        throw err;
        console.log("user created")
    })
    db.query(duplicateUserInfo,(err,result)=>{
        if(err)
        throw err;
        console.log("user created")
    })
    db.query(DuplicateUser,(err,result)=>{
        if(err)
        throw err;
        console.log("user created")
    })
    db.query(Record,(err,result)=>{
        if(err)
        throw err;
        console.log("user created")
    })
    db.query(Conversation,(err,result)=>{
        if(err)
        throw err;
        console.log("user created")
    })
    db.query(ConversationReply,(err,result)=>{
        if(err)
        throw err;
        console.log("user created")
    })
    db.query(verification,(err,result)=>{
        if(err)
        throw err;
        console.log("user created")
    })
    res.send("it all set")
}
