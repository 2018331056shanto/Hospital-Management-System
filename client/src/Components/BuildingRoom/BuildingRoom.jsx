import React, { useContext } from "react";
import { UserContext } from "../../UserContext";
import styles from "./BuildingRoom.module.css"
const BuildingRoom=(props)=>{
    const user=useContext(UserContext)
    const clickHandler=(id)=>{
        console.log(`its user id ${id}`)
        // post request to update the shift
    }
    let auth=user.auth;
 return(
    <div className={styles.shiftContainer}>
    <div className={styles.text}>
        
    </div>
    <div>
        {user.Role==="admin"?<form><span className={styles.text}><span>Building</span><input className={styles.shiftAdmin} value={props.buildingRoom.building} name="building" type="text"/><span className={styles.text}>Room</span><input className={styles.shiftAdmin} value={props.buildingRoom.room} name="room" type="text"/><input className={styles.text1} onClick={()=>clickHandler(props.id)} type="submit"/></span></form>:<span><span className={styles.text}>Building</span><span className={styles.shift}> {props.buildingRoom.building}</span><span className={styles.text}>Room</span><span className={styles.shift}> {props.buildingRoom.room}</span></span>}
        
          
    </div>
  </div>
  

 )
}
export default BuildingRoom;