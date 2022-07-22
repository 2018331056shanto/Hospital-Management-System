import React from "react";
import styles from "./Wraper.module.css"
const wraper=(props)=>{
  
const auth=localStorage.getItem("auth")
    return( 
        <div className={auth==="admin"?styles.wraper:styles.wrap2}>
            { props.children}
        </div>
    )
   
}
export default wraper;