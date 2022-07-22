import react from "react";
import Navbar2 from "../Navbar/Navbar2";
import Footer from "../Footer/Footer";
import CaseQuestionExp from "../Case_Question_Exp";
import Slider from "../../UI Components/Slider/Slider";
import styles from "./BloodBank.module.css";
const PrayerRoom = () => {
  return (
    <react.Fragment>
      <header>
        <Navbar2 />
      </header>
      <main>
        <Slider />
        <div className={styles.bloodbank}>
          <h3>Prayer Room</h3>
          <div className={styles.bloodbank1}>
            <p>
              The prayer room for the Muslims (Male) is located at the ground
              floor in the hospitals lobby just beside Blood Bank and for the
              Female at 1st floor beside the Ultrasonography counter.
            </p>
          </div>
        </div>
        <CaseQuestionExp />
      </main>
      <Footer />
    </react.Fragment>
  );
};
export default PrayerRoom;
