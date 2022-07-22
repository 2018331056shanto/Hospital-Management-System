import React, { useContext, useEffect } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";
import styles from "./NavbarLogin.module.css"
<<<<<<< HEAD
// import {AdvancedImage} from '@cloudinary/react';
// import {Cloudinary} from "@cloudinary/url-gen";
=======
import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
>>>>>>> 0d905a6d38e4ff3d0091bbd0d1c57080e46e5690
const NavbarLogin=(props)=>{
    const user=useContext(UserContext)
    console.log(user.Image)
    const location=useLocation();
    let path=location.pathname
    const navigate=useNavigate()
    // console.log(user.img)
    // const token=localStorage.getItem("token")
    
    useEffect(()=>{
if(!user.token)
    {
        navigate("/doctor")
    }
    },[])
<<<<<<< HEAD
    // const cld=new Cloudinary({
    //     cloud:{
    //       cloudName:"dkacz3eix"
    //     }
    //   })
=======
    const cld=new Cloudinary({
        cloud:{
          cloudName:"dkacz3eix"
        }
      })
>>>>>>> 0d905a6d38e4ff3d0091bbd0d1c57080e46e5690
    return(
        <nav className={styles.container}>
            <div className={styles.innerContainer}>
            <div className={styles.logout}>
                <Link className={styles.link}to={"/"+"logout"}>logout</Link>
            </div>
            <div className={styles.profile}>
            <Link className={styles.link} to={path+"/"+"profile"} >Profile</Link>   
            </div>
            <div className={styles.profileContainer}>
                {/* <AdvancedImage cldImg={cld.image(props.)} */}
                <img className={styles.img} src={user.Image}/>
            </div>
          
            </div>
           
        </nav>
    )
}
export default NavbarLogin