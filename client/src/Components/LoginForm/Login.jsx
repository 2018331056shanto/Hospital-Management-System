import React  from "react";
import Box from "./SideBox/Box"
import Form from "./Form/Form"
import styles from "./Login.module.css"
const Login=()=>{
   return(
        <div className={styles.loginWrapper}>
              <div className={styles.loginContainer}>
            <Box />
            <Form />
            
    </div>
 
        </div>
       
    )
   
}
export default Login;