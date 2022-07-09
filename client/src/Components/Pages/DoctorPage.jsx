import react, { useContext } from "react";
import Admin from "../Admin/Admin";
import { useEffect } from "react";
import { Route, Navigate, useNavigate } from "react-router-dom";
import PatientPage from "./PatientPage";
// import jwt from 'jsonwebtoken'
import DoctorProfile from "../Profile/DoctorProfile/DoctorProfile";
import styles from "./Styles.module.css"
import NavbarLogin from "../NavbarLogin/NavbarLogin";
import { UserContext } from "../../UserContext";
const DoctorPage = () => {
  const user=useContext(UserContext)
  const JWT_secret = "fuckShantoHard";
  const navigate = useNavigate();
  useEffect(() => {
    
    if (!user.token) {
      navigate("/doctor");
    } else {
      try {
        // var decoded = jwt.verify(token, JWT_secret);
        // console.log(decoded)
      } catch (error) {
        navigate("/doctor");
      }
    }
  }, []);
  return (
    <div className={styles.container}>
      <NavbarLogin/>
        <DoctorProfile/>
    </div>
  );
};
export default DoctorPage;
