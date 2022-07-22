import react from "react";
import Navbar2 from "../Navbar/Navbar2";
import Footer from "../Footer/Footer";
import CaseQuestionExp from "../Case_Question_Exp";
import Slider from "../../UI Components/Slider/Slider";
import styles from "./BloodBank.module.css";
const StrokeCenter = () => {
  return (
    <react.Fragment>
      <header>
        <Navbar2 />
      </header>
      <main>
        <Slider />
        <div className={styles.bloodbank}>
          <h3>Stroke Center</h3>
          <div className={styles.bloodbank1}>
            <p>
              STROKE is a serious, life-threatening medical condition that
              occurs when the blood supply to part of the brain is cut
              off.Minutes can make a difference between life and death, the
              difference between brain cells that are saved and brain cells that
              are damaged forever, between recovery and lifelong disability.The
              more time passes before a stroke patient receives treatment, the
              worst the outcome. So if the stroke is treated immediately, brain
              damage will be minimized.UNITED HOSPITALSTROKE CENTRE 24 hour
              dedicated stroke team with neurologist, neurosurgeon, radiologist,
              emergency department and other healthcare professionals who are
              able to diagnose and treat a stroke during the critical 3-4.5 hour
              window and deliver the clot busting agent tissue plasminogen
              activator (TPA) to save brain cells Documented stroke protocols
              for diagnosing stroke and mapping the best course of therapy
            </p>
          </div>
        </div>
        <CaseQuestionExp />
      </main>
      <Footer />
    </react.Fragment>
  );
};
export default StrokeCenter;
