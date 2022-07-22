const db=require("../config/CreateConnection")
const mysql=require("mysql")
const {generateToken,mailSender}=require("../util/mail");
require('nodemailer');
const {google} =require('googleapis');
module.exports=approve=async(req,res)=>{
    
        const id=req.body.id
        // console.log(id)
        const sql=`UPDATE  user SET Status=true WHERE ID=`+mysql.escape(id)
        db.query(sql,(err,result)=>{
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
            // try{

            
    //         const transport=mailSender()
    //         await transport.sendMail({
    //            from:'ashraful1185058@gmail.com',
    //            to:results[0].Email,
    //            subject:'Account Verification',
    //            html:`<h1>Your account has been Verified</h1>`
    //        },(err,info)=>{


    //            if(err)
    //            {
    //                console.log("error in approve")
    //                console.log(err)
       
    //            }
    //            else{
    //                console.log("approve info")
    //                console.log(info)
    //            }
    //        })
       
    //        res.send("okk")
    //    }
    //    catch(err){
    //        console.log(err);
    //        res.status(500).json({ message: "Something Went Wrong!" });
   
    //    }
            
        })
        // const otp=generateToken();
        res.status(200).json({message:"successful"})
        console.log(result)
      
   
}