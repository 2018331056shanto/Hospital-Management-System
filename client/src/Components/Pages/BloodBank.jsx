import react from "react";
import Navbar2 from "../Navbar/Navbar2";
import Footer from "../Footer/Footer";
import CaseQuestionExp from "../Case_Question_Exp";
import Slider from "../../UI Components/Slider/Slider";
import styles from "./BloodBank.module.css";
const BloodBank = () => {
  return (
    <react.Fragment>
      <header>
        <Navbar2 />
      </header>
      <main>
        <Slider />
        <div className={styles.bloodbank}>
          <h3 className={styles.h3}>Blood Bank</h3>
          <div className={styles.bloodbank1}>
            <p className={styles.p}>
              BLOOD BANK The Blood Bank of United Hospital Limited is a
              Government licensed blood bank established in 2006. Located in the
              ground floor of this hospital, it aims to provide patients with
              the safest possible blood, equivalent to any international
              standard. All donations received in the blood bank are voluntary
              non-remunerated. All necessary safety measures are taken for both
              the donors and the recipients including performing the mandatory
              screening tests for infectious diseases. This blood bank is
              enriched with one Consultant, one Specialist, four Senior House
              Officers, and thirteen Medical Lab Technologists.All the following
              blood components are available in this blood bank:Whole bloodRed
              cell concentrate (PRBC)Washed red cellsFresh frozen plasma
              (FFP)Pooled platelet concentrateApheresis platelet
              concentrateCryoprecipitateGranulocyte concentrate by
              apheresis.Committed to deliver high quality and safe blood
              products, our blood banking and transfusion services are available
              round the clock seven days a week.
            </p>
          </div>
        </div>
        <div className={styles.caseQuestionExp}>
        <CaseQuestionExp />
        </div>
       
      </main>
      <Footer />
    </react.Fragment>
  );
};
export default BloodBank;
