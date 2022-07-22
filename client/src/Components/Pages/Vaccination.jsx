import react from "react";
import Navbar2 from "../Navbar/Navbar2";
import Footer from "../Footer/Footer";
import CaseQuestionExp from "../Case_Question_Exp";
import Slider from "../../UI Components/Slider/Slider";
import styles from "./BloodBank.module.css";
const Vaccination = () => {
  return (
    <react.Fragment>
      <header>
        <Navbar2 />
      </header>
      <main>
        <Slider />
        <div className={styles.bloodbank}>
          <h3>Vaccination</h3>
          <div className={styles.bloodbank1}>
            <p>
              The Vaccination Center of United Hospital is providing its keen
              continues services. This department serves the indoor neonates,
              children and Adult by providing life saving vaccines. This
              department plays a vital role to improve the health status of
              community. This department maintains the excellent cold Chain for
              Vaccine Storage.
            </p>
          </div>
        </div>
        <CaseQuestionExp />
      </main>
      <Footer />
    </react.Fragment>
  );
};
export default Vaccination;
