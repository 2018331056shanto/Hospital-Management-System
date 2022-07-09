import React, { useContext } from "react";
import { UserContext } from "../../../UserContext";
import styles from "./Wraper.module.css"
const Wraper=(props)=>{
    const user=useContext(UserContext)
    return( 
        <div className={user.Role==="admin"?styles.wraper:styles.wrap2}>
            { props.children}
        </div>
    )
   
}
export default Wraper;