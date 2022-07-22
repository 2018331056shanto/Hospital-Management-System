import React, { useEffect, useState } from "react";
<<<<<<< HEAD
// import {AdvancedImage} from '@cloudinary/react';
// import {Cloudinary} from "@cloudinary/url-gen";
=======
import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
>>>>>>> 0d905a6d38e4ff3d0091bbd0d1c57080e46e5690
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { GET } from "../../../../api/api"; 
import { POST } from "../../../../api/api";
import styles from "./DocumentView.module.css"
const DocumentView=(props)=>{
  let navigate=useNavigate();
  const param=useParams()
  let paramPath=param.id
  console.log(param.id)
  let [user,setUser]=useState([])
  let [role,setRole]=useState("")
    const getData=async()=>{
      let path="/autharization"+"/"+paramPath
        const result=await GET(path)
        let tempUser=result.data
        setUser(tempUser)
    }
    useEffect(()=>{
getData()
    },[])
    
const rejectHandler=async(id)=>{
  const result=await POST("/approve/reject",{id:id})
  navigate("/admin/notification")
 console.log(result)
}

const approveHandler=async(id)=>{
  const result=await POST("/approve/approve",{id:id,role:role})
  navigate("/admin/notification")
}
<<<<<<< HEAD
const clickHandler=(e)=>{
  console.log(e)
  setRole(e)
}
=======
<<<<<<< HEAD
    // const cld=new Cloudinary({
    //     cloud:{
    //       cloudName:"dkacz3eix"
    //     }
    //   })
=======
>>>>>>> main
    const cld=new Cloudinary({
        cloud:{
          cloudName:"dkacz3eix"
        }
      })
>>>>>>> 0d905a6d38e4ff3d0091bbd0d1c57080e46e5690
      
    return(
        <div className={styles.container}>
          <div className={styles.infoContainer}>
<<<<<<< HEAD
            {/* {user.map((el,id)=>{
              return (
                // <AdvancedImage key={id} className={styles.image} cldImg={cld.image(el.File)}/>
              )
              })} */}
=======
            {user.map((el,id)=>{
              return (
                <AdvancedImage key={id} className={styles.image} cldImg={cld.image(el.File)}/>
              )
              })}
>>>>>>> 0d905a6d38e4ff3d0091bbd0d1c57080e46e5690
             
             {/* <img className={styles.image} src="https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"/> */}
             <div className={styles.approval}>
               <div onClick={()=>approveHandler(user[0].ID)} className={styles.approve}>Approve</div>
               <div className={styles.roleContainer}>
                 <span className={styles.role}>Set Role</span><select className={styles.select}  onClick={(e)=>clickHandler(e.target.value)} name="role" >
                <option  value="doctor">Doctor</option>
               <option  value="employee">Employee</option>
               <option value="admin">Admin</option>
               <option value="receptionist">Receptionist</option>
              </select></div>
             <div onClick={()=>rejectHandler(user[0].ID)} className={styles.reject}>Reject</div>
             </div>
             
          </div>
         
        </div>
        
    )
}
export default DocumentView