import React, { useContext } from "react";
import { UserContext } from "../../UserContext";
import styles from "./Shift.module.css"
const Shift=(props)=>{
    const user=useContext(UserContext)
    const clickHandler=(id)=>{
        console.log(`its user id ${id}`)
        // post request to update the shift
    }
    let auth=user.auth;
 return(
    <div className={styles.shiftContainer}>
    <div className={styles.text}>
        Shift
    </div>
    <div className={styles.container}>

        {user.Role=="admin"?<form><span className={styles.text}><span>From</span><input className={styles.shiftAdmin} value={props.shift.from} name="from" type="time"/><span className={styles.text}>To</span><input className={styles.shiftAdmin} value={props.shift.to} name="to" type="time"/><input className={styles.text1} onClick={()=>clickHandler(props.id)} type="submit"/></span></form>:<span><span className={styles.text}>From</span><span className={styles.shift}> {props.shift.from}</span><span className={styles.text}>To</span><span className={styles.shift}> {props.shift.to}</span></span>}

        {auth==="admin"?<form><span className={styles.text}><span>From</span><input className={styles.shiftAdmin} value={props.shift.from} name="from" type="time"/><span className={styles.text}>To</span><input className={styles.shiftAdmin} value={props.shift.to} name="to" type="time"/><input className={styles.text1} onClick={()=>clickHandler(props.id)} type="submit"/></span></form>:<span><span className={styles.text}>From</span><span className={styles.shift}> {props.shift.from}</span><span className={styles.text}>To</span><span className={styles.shift}> {props.shift.to}</span></span>}
        
          
    </div>
  </div>
  

 )
}
export default Shift;