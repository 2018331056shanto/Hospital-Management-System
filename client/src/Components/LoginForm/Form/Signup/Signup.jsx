import React, { useState } from "react";
import styles from  "./Signup.module.css"
import {POST} from "../../../../api/api";
import Axios from 'axios';
import { useLocation } from "react-router-dom";
const Signup=()=>{

    //sign up form states
    //----------------------

    const [nameReg,setName]=useState("");
    const [emailReg,setEmail]=useState("");
    const [passwordReg,setPassword]=useState("");
    const [confirmPasswordReg,setConfirmPassword]=useState("");
    const [sexReg,setSex]=useState("");
    const [fileReg,setFile]=useState("");
    const[file,setFiles]=useState("")
    const location=useLocation()
    let role=location.pathname.split("/")[1]
    const signup = async(e)=>{
       
        e.preventDefault();
        const res = await Axios.post("http://localhost:4000/signup", {
            username: nameReg, 
            password:passwordReg,
            email: emailReg,
            confirmPassword: confirmPasswordReg,
            sex: sexReg,
            file: file,
            role:role,
            image:"https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80"
        })
       
        // console.log(res);
    }
   

    const previewFile=(file)=>{
        const reader=new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend=()=>{
            console.log(reader.result)
            setFiles(reader.result)
            // console.log(image)
        }
    }
    const fileHandler=(e)=>{
        const file=e.target.files[0]
        setFile(file)
        previewFile(file)
        
    }
    // console.log(image)
        return(
            <div className={styles.signupContainer}>
              <form className={styles.formContainer}>
                  <label>
                      Name:
                      <input className={styles.name} type="text" name="name" placeholder="name" onChange={(e)=>{setName(e.target.value)}}/>
                  </label>
                  <br/>
                  <label>
                      Email:
                      <input className={styles.email} type="text" name="email" placeholder="email" onChange={(e)=>{setEmail(e.target.value)}}/>
                  </label>
                  <br/>
                  <label>
                      Password:
                  <input className={styles.password }type="password" name="password" placeholder="password" onChange={(e)=>{setPassword(e.target.value)}}/>
                  </label>
                  <br/>
                  <label>
                      Confirm Password:
                      <input className={styles.confirmPassword}type="password" name="confirmPassword" placeholder="confirm password" onChange={(e)=>{setConfirmPassword(e.target.value)}}/>
                  </label>
                  <br/>
                  <label>
                      Sex:
                      <input className={styles.sex}type="text" name="sex" placeholder="sex" onChange={(e)=>{setSex(e.target.value)}}/>
                  </label>
                  <br/>
                  <label>
                      File:
                      <input className={styles.file}type="file" name="file" placeholder="file" onChange={(e)=>fileHandler(e)}/>
                  </label>
                  <br/>
                  <label>
                      <input className={styles.submit} type="submit"  placeholder="submit" onClick={signup}/>
                  </label>
              </form>
             
            </div>
        )
    }
    

export default Signup;