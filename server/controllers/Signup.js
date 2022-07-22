const db=require("../config/CreateConnection")
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const express=require("express")
// const cloudinary=require("../util/Cloudinary")
const user = require("../models/User");
var jwt = require('jsonwebtoken');
const { application } = require("express");
const JWT_secret = 'fuckShantoHard';
const cloudinary=require("../util/Cloudinary")
module.exports=signup=async(req,res)=>{
    const {username, password, email, confirmPassword, sex, file,role,image} = req.body
    const uploadedImage=await cloudinary.uploader.upload(file,{
      upload_preset:"my_upload",
      allowed_formats:["pdf","jpg","jpeg","png"]
    },(err,result)=>{
      if(err)
      throw err
      // console.log(result)
    })
    
    try{
      // res.status(200).json(uploadedImage)

    }
    catch(err){
      console.log(err)
    }
    // console.log(uploadedImage)
    // console.log(image)
   const hash= await bcrypt.hash(password,saltRounds)
   const hash1=await bcrypt.hash(confirmPassword,saltRounds)
   if(hash!=hash1)
   {
    res.status(204).json({error:"password do not match"})
   }
    // console.log(hash)
    const bool=false
  
    
      db.query(
        "INSERT INTO user (ID,Name,Email,Password,Sex,File,Role,Status,Image) VALUES(?,?,?,?,?,?,?,?,?)",
        [ uuidv4(),username, email, hash, sex,uploadedImage.public_id,role,bool,image],
        (err, result) => {
          console.log(err);
          // res.status(200).json({
    
        // })
        }

      );
      const data = {
        user:{
          id: user.id
        }
      }
      const authToken = jwt.sign({ data }, 'JWT_secret');
      console.log(`This is jwt ${authToken}`);
      // res.redirect("/")


// res.redirect("/doctorpage")

}


