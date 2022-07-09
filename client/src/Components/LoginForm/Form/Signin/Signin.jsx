import Axios from "axios";
import { useState,useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import doctor from "../../../../assets/doctor.jpg";
import styles from "./Signin.module.css";

import {
  Route,
  Navigate,
  useNavigate
} from 'react-router-dom';
import { UserContext } from "../../../../UserContext";
const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dataHandler=useContext(UserContext)
 
  Axios.defaults.withCredentials=true;
  const signin = async (e) => {
    e.preventDefault();
    const res = await Axios.post("http://localhost:4000/signin", {
      email: email,
      password: password,
    });
    console.log(res.data.res);
    const data={
      ...res.data.res,
      token:res.data.token
    }
   if(res.status===200){
    
    dataHandler(data)
    localStorage.setItem("id",res.data.id)
    localStorage.setItem("auth",res.data.role)
    if(res.data.res.Role=="admin"){
        navigate('/admin')
    }
    else if(res.data.res.Role=="doctor"){
      navigate("/doctor")
    }
    else if(res.data.res.Role=="employee")
    {
      navigate("/employee")
    }
    else if(res.data.res.Role==="recetion"){
      navigate("/reception")
    }
  
   }else{
    console.log("Error Occured");
   }
  };
 
  return (
    <div className={styles.signinContainer}>
      <div className={styles.imgContainer}>
        <div className={styles.img}>
          <img src={doctor} alt="login" />
        </div>
      </div>
      <div className={styles.loginText}>
        <h1>Signin</h1>
      </div>
      <form className={styles.form}>
        <label>
          <input
            type="text"
            className={styles.email}
            name="email"
            placeholder="username"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>
        <br />
        <label>
          <input
            className={styles.password}
            type="password"
            name="password"
            placeholder="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <br />
        <label>
          <input
            className={styles.submit}
            type="submit"
            name="submit"
            placeholder="submit"
            onClick={signin}
          />
        </label>
      </form>
      <div>
        <Link to="/forget">Forget Password?</Link>
      </div>
    </div>
  );
};
export default Signin;
