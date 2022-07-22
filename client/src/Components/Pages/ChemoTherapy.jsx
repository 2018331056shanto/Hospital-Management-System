import react from "react";

import Navbar2 from "../Navbar/Navbar2";
import Footer from "../Footer/Footer";
import CaseQuestionExp from "../Case_Question_Exp";
import Slider from "../../UI Components/Slider/Slider";
import styles from "./BloodBank.module.css";
const ChemoTherapy = () => {
  return (
    <react.Fragment>
      <header>
        <Navbar2 />
      </header>
      <main>
        <Slider />
        <div className={styles.bloodbank}>
          <h3>Chemo Therapy</h3>
          <div className={styles.bloodbank1}>
            <p>
              Chemotherapy UnitOur exclusive Chemotherapy Unit provides the most
              updated cancer management as per international guidelines.What is
              chemotherapy?Chemotherapy (also called chemo) is a type of cancer
              treatment that uses drugs to destroy cancer cells.How does
              chemotherapy work?Chemotherapy works by stopping or slowing the
              growth of cancer cells, which grow and divide quickly. But it can
              also harm healthy cells that divide quickly, such as those that
              line your mouth and intestines or cause your hair to grow. Damage
              to healthy cells may cause side effects. Often, side effects get
              better or go away after chemotherapy is over. WHAT DOES
              CHEMOTHERAPY DO? Depending on your type of cancer and how advanced
              it is, chemotherapy can: Cure cancer—when chemotherapy destroys
              cancer cells to the point that your doctor can no longer detect
              them in your body and they will not grow back. Control cancer—when
              chemotherapy keeps cancer from spreading, slows its growth, or
              destroys cancer cells that have spread to other parts of your
              body. Ease cancer symptoms (also called palliative care)— when
              chemotherapy shrinks tumors that are causing pain or pressure.
            </p>
          </div>
        </div>
        <CaseQuestionExp />
      </main>
      <Footer />
    </react.Fragment>
  );
};
export default ChemoTherapy;
