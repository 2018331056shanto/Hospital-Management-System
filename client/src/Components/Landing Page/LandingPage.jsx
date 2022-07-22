import react from "react";
import {Link} from 'react-router-dom'; 
import styles from "./LandingPage.module.css";
import doctor from "../../LandingPageImage/doctor-holding-clipboard-with-patient-info-vector.jpg";
import sickMan from "../../LandingPageImage/sick-man-holding-saline-bag-in-hospital.jpg";
import employee from "../../LandingPageImage/nurse-with-uniform-female-nurse-hospital-worker-vector.jpg";
import Navbar2 from "../Navbar/Navbar2";

const LandingPage = () => {
  return (
    <react.Fragment>
      <Navbar2/>
      <h1 >You Are A... </h1>
      <div className={styles.container1}>
      <div>
      <Link to="/login">
      <img className={styles.image}src={doctor} alt="s"/>
      </Link>
        <h2>Doctor & Staff</h2>
      </div>
      <div>
        <Link to="/patient">
                <img className={styles.image} alt="hi" src={sickMan} />
                </Link>
        <h2>Patient</h2>
      </div>
      </div>
     
    </react.Fragment>
  );
};
export default LandingPage;
