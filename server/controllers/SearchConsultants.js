const Database = require("../config/CreateConnection");
// const DB = new Database();
// const db = DB.establishConnection();
const express = require("express");
const app = express();
const cors = require("cors");
const mysql=require("mysql")

const user = require("../models/User");
const dept = require("../models/Department");
const degrees = require("../models/Degrees");

module.exports = searchConsultant = (req, res) => {
  const dept = req.body.dept;
  console.log(dept);
  // res.send("Hello");
  // const where = +mysql.escape(dept);
  
  const sql =
    `SELECT user.Name,dept.Name,degrees.Degree_Name FROM user
    CROSS JOIN dept
    CROSS JOIN degrees
    WHERE dept.Name=`+mysql.escape(dept);
   
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
  });
  res.status(200).json({ message: "successful" });
  
};
