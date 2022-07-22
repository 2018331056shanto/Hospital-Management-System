import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {GET} from "../../../api/api"
import InformationBox from "../Dashboard/InformationBox/InformatioBox";
import styles from "./Notification.module.css"
import requestImg from "../../../assets/request.png"
const Notification=(props)=>{
    const location=useLocation()
    let [user,setUser]=useState([])
    const getData=async()=>{
        const result=await GET("/autharization")
        let tempUser=result.data
        setUser(tempUser)
    }
useEffect(()=>{
    getData()

},[])
    let length=user.length
    return(
        <div className={styles.container}>
        <InformationBox count={length} key={1} info={"New Requests"} img={requestImg}/>
          {user.map((el)=>{
                return(
                    
          <div key={el.ID} className={styles.profile}>
                  
                    <div key={el.ID} className={styles.info}>
                    <div className={styles.text}>Name
                <div className={styles.text1}>{el.Name}</div>
                    </div>
                  <div className={styles.text}>Email
                     <div className={styles.text1}>{el.Email}</div>
                     </div>
                     <div className={styles.text}>Sex
                 <div className={styles.text1}>{el.Sex}</div>
                     </div>
                     <div className={styles.text}>
                         Document
                         <div  className={styles.view}>
                            <Link className={styles.link} to={location.pathname+"/"+el.ID}>
                                 View
                                </Link>
                         </div>
                     </div>
           </div>

                {/* <div className={styles.document}>
                 <div className={styles.text}>
                     Document
                 </div>
                    </div>    */}
                       
           </div>   
            )
               })}
        </div>
    )
}
export default Notification;