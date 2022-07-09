const db=require("../config/CreateConnection")
const mysql=require("mysql")
const {generateToken,mailSender}=require("../util/mail");
require('nodemailer');
const {google} =require('googleapis');
module.exports=approve=async(req,res)=>{
        const id=req.body.id
        let role=req.body.role
        // console.log(id)
        const sql=`UPDATE  user SET Status=true WHERE ID=`+mysql.escape(id)
        db.query(sql,(err,result)=>{
            if(err)
            throw err
            console.log(result)
            
        })
        const sql2=`UPDATE  user SET Role=${mysql.escape(role)} WHERE ID=${mysql.escape(id)}`
        db.query(sql2,(err,result)=>{
            if(err)
            throw err
            console.log(result)
            
        })
        const sql1=`SELECT Email FROM user  WHERE ID=`+mysql.escape(id)
        let result=""
        db.query(sql1,async(err,results)=>{
            if(err)
            throw err
            // console.log(results)
          mailSender(results[0].Email)
        })
        // const otp=generateToken();
        res.status(200).json({message:"successful"})
        console.log(result)
      
   
}