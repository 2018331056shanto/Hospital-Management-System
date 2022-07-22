const express=require("express");
const router=express.Router();
const createDatabase=require("../controllers/CreateDatabase")
const signup=require("../controllers/Signup")
const signin = require("../controllers/Signin")

const SearchConsultants = require("../controllers/SearchConsultants");
const appointmentInfo = require("../controllers/AppointmentInfo")
const autharization=require("../controllers/Autharization")
const authorizationNotification=require("../controllers/AuthorizationNotification")
<<<<<<< HEAD
// const approve=require("../controllers/Approve")
// const reject=require("../controllers/Reject");
=======
const approve=require("../controllers/Approve")
const reject=require("../controllers/Reject");
>>>>>>> 0d905a6d38e4ff3d0091bbd0d1c57080e46e5690
const User = require("../controllers/User");
router.get("/createDB",createDatabase);
router.post("/signup",signup)
router.post("/signin",signin)
router.get("/signin",signin)
<<<<<<< HEAD
router.post("/appointmentinfo",appointmentInfo)
router.post("/searchconsultant",SearchConsultants)
router.get("/autharization",autharization)
router.get("/autharization/:id",authorizationNotification)
// router.post("/approve/approve",approve)
// router.post("/approve/reject",reject)
=======
router.post("/appointmentInfo",appointmentInfo)
router.get("/autharization",autharization)
router.get("/autharization/:id",authorizationNotification)
router.post("/approve/approve",approve)
router.post("/approve/reject",reject)
>>>>>>> 0d905a6d38e4ff3d0091bbd0d1c57080e46e5690
router.post("/user",User)
module.exports=router;
