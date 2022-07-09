const nodemailer=require('nodemailer');
require('dotenv').config();
const {google} =require('googleapis');




 module.exports.generateToken=() => {
    let token='';

    for(let i=0;i<4;++i){
        const val = Math.round(Math.random()*8);
        token+=val;
    }

    return token;
};


 module.exports.mailSender = async(email) =>  {
    console.log("x1");
    const oauth2client = new google.auth.OAuth2(process.env.CLIENT_ID,process.env.CLIENT_SECRET,process.env.REDIRECT_URI);
oauth2client.setCredentials({refresh_token: process.env.REFRESH_TOKEN});
//fix .env to get data from .env otherwise use localstorage
    try {
        //const accessToken = await oauth2client.getAccessToken();
     //  console.log(process.env.CLIENT_ID,);
        var transport =  nodemailer.createTransport({
            sendmail: true,
            service:'gmail',
            auth: {
              type: 'OAuth2',
              user: process.env.MAIL_USER,
             clientId: process.env.CLIENT_ID,
              clientSecret: process.env.CLIENT_SECRET,
              refreshToken: process.env.REFRESH_TOKEN,
              accessToken: process.env.ACCESS_TOKEN
            }
        });
        console.log("x2");
    } catch (error) {
        //console.log("hello puttaer")
        console.log(error.message)
    }
   // console.log("fuccck you")
   
    // console.log(transport)
    try{

         transport.sendMail({
           from:'ashraful1185058@gmail.com',
           to:email,
           subject:'Account Verification',
           html:`<h1>Your account has been Verified</h1>`
       },(err,info)=>{


           if(err)
           {
               console.log("error in approve")
               console.log(err)
   
           }
           else{
               console.log("approve info")
               console.log(info)
           }
       })
   
      
   }
   catch(err){
       console.log(err);

   }
        
};
//generateToken();
//mailSender();

 
 