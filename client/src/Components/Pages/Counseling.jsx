import react from "react";

import Navbar2 from "../Navbar/Navbar2";
import Footer from "../Footer/Footer";
import CaseQuestionExp from "../Case_Question_Exp";
import Slider from "../../UI Components/Slider/Slider";
import styles from "./BloodBank.module.css";
const Counseling = () => {
  return (
    <react.Fragment>
      <header>
        <Navbar2 />
      </header>
      <main>
        <Slider />
        <div className={styles.bloodbank}>
          <h3>Counseling</h3>
          <div className={styles.bloodbank1}>
            <p>
              UHL Counseling Therapy (Counselor Service)Provided in OPD
              (out-patient) and also for admitted patients (in-patient)We offer
              Psychotherapy (Counseling) using various standard Psychological
              Theories for analysis of the underlying problem and provide
              treatment through Psychotherapeutic techniques. We serve patients
              with different kinds of Psychological and Behavioral problems.
              Such as - Adults and children suffering with Anxiety Disorders
              like Phobia, Separation anxiety, Reactive attachment disorder,
              problems with abuse (Physical, Emotional, Sexual), Conversion,
              Obsessive compulsive disorder, Post traumatic stress disorder,
              Adjustment problem, Health anxiety etc. Mentally challenged
              children with retardation and Developmental disorder, Attention
              deficit and hyper activity disorder, Autism, Behavioral problem of
              children and lack of attention. Depression, Adolescent Mental
              Health Disorders, Impulse control disorders, Personality
              disorders, Psycho-sexual disorder, Eating disorders, Gender
              Identity disorder, Sleep disorder, Patients with Schizophrenia,
              Bipolar mood disorder, Substance abuse (Drug addiction),
              Psychological problems caused by chronic illness like Cardiac
              disease, Stroke, Cancer, AIDS etc.
            </p>
          </div>
        </div>
        <CaseQuestionExp />
      </main>
      <Footer />
    </react.Fragment>
  );
};
export default Counseling;
