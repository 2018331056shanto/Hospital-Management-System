import react from "react";
import Navbar2 from "../Navbar/Navbar2";
import Footer from "../Footer/Footer";
import CaseQuestionExp from "../Case_Question_Exp";
import Slider from "../../UI Components/Slider/Slider";
import styles from "./BloodBank.module.css";
const Pharmacy = () => {
  return (
    <react.Fragment>
      <header>
        <Navbar2 />
      </header>
      <main>
        <Slider />
        <div className={styles.bloodbank}>
          <h3>Pharmacy</h3>
          <div className={styles.bloodbank1}>
            <p>
              United Hospital Pharmacy Department has placed a leading role in
              implementing advanced clinical pharmacist patient care services in
              United Hospital where pharmacists work collaboratively with nurses
              and physicians directly on patient care areas to review medication
              orders and manage drug therapy.The Pharmacy Department of United
              Hospital provides a comprehensive range of pharmaceutical services
              to all patients. Its objective is to provide patient-focused
              pharmaceutical care in order to achieve definite outcomes that
              improve patients’ quality of life. The pharmacy department
              consists of a team of qualified, ...
            </p>
          </div>
        </div>
        <CaseQuestionExp />
      </main>
      <Footer />
    </react.Fragment>
  );
};
export default Pharmacy;
