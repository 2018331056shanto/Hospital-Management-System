import { style } from "@mui/system";
import react from "react";
import styles from "./DoctorNavbar.module.css";

const DoctorNavbar = (props) => {
  return (
    <react.Fragment>
      <div className={styles.nav}>
        <div className={styles.paragraph}>
          <p className={styles.hname}>A&S Hospital</p>
        </div>
        <div className={styles.buttons}>
          <a href="#" className={styles.profile}>
            Profile
          </a>
          <a href="#" className={styles.logout}>
            Logout
          </a>
        </div>
      </div>
    </react.Fragment>
  );
};
export default DoctorNavbar;
