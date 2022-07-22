import react from "react";
import Navbar2 from "../Navbar/Navbar2";
import Footer from "../Footer/Footer";
import CaseQuestionExp from "../Case_Question_Exp";
import Slider from "../../UI Components/Slider/Slider";
import styles from "./BloodBank.module.css";
const DiabetesCenter = () => {
  return (
    <react.Fragment>
      <header>
        <Navbar2 />
      </header>
      <main>
        <Slider />
        <div className={styles.bloodbank}>
          <h3>Diabetes Center</h3>
          <div className={styles.bloodbank1}>
            <p>
              Are you one of the millions of Bangladeshi with Diabetes? If so,
              there is so much you can learn and do to manage your Diabetes,
              prevent complications and enjoy quality of life. The United
              Diabetes Center can help you every step of the way.About the
              United Diabetes Center:The United Diabetes Center are committed to
              providing comprehensive Diabetes Education and counseling services
              for all aspects of Diabetes management. Both group classes and
              individual sessions are offered where you will learn:# How easy it
              is to monitor your blood glucose.# How a meal plan helps control
              blood glucose.# How the latest information, individual treatment
              plan can help prevent complications.# How to use blood glucose
              results for better self-care.Services:The services offered at the
              United Diabetes Centers cover a wide range of topics including
              diabetes education, meal planning, diabetes medication, preventing
              complications, exercise and making adjustments for daily living.
              Program Options include:Comprehensive Diabetes Education
              Program-The United Diabetes Center use a team approach for
              education, counseling and device training, with you as the key
              member of the team. Registered physician, dietitians, diabetes
              educators and nurses are dedicated to helping each person gain
              control of their diabetes while maintaining an optimal state of
              health and well-being. Together, the team designs an
              individualized plan that matches your lifestyle and educational
              needs.Intensified insulin self-management training:Necessary
              sessions where you will gain the knowledge and skills necessary to
              adjust your own insulin in relation to day-to-day situations and
              carbohydrate intake.Nutrition counseling:One or more private
              sessions with a registered dietitian specializing in Diabetes
              management. Individual food preferences and lifestyle are
              incorporated into meal planning strategies to help you improve
              blood glucose control.Additional Educational Services
              include:Insulin injection instruction, gestational diabetes
              management, continuous glucose sensor monitoring, diabetes
              continuing education and support groups and pre-diabetes
              programs.Appointments:If you are interested in coming to the
              United Diabetes Center, talk to your doctor. Then, make an
              appointment with us by calling 10666 or 02 22 22 62 466. We offer
              morning, afternoon and evening individual appointments and group
              classes. We will make every effort to make an appointment that
              matches your scheduling needs.Keep on TrackThe following tests and
              exams are recommended to help you manage your Diabetes:#
              Hemoglobin A1C- Every 3 months.# Blood Pressure- Every visit#
              Cholesterol (Total, HDL, LDL and triglycerides)- Every 3 months..#
              Microalbuminuria- Once a year# Foot Exam- at least once a year#
              Dilated eye exam- at least once a year# Dental exam- twice a
              yearDiabetes & Endocrinology department provides United Diabetes
              Center services in OPD-3. Comprehensive Diabetes Care
              Package:Validity: One year from the enrollment date.You will get
              below services through My Health Card:At time of Enrollment:
              Comprehensive Diabetes Education Total management plan by renowned
              consultant Dietary guideline by renowned Nutritionist Detail
              device training of HMBG machine, Insulin Pen training and
              injection technique. 3 Follow-up call (1, 3 & 7th Day) by DE’s for
              dose titration and other assurances. Complimentary Diabetes log
              book Round the Year: Complimentary call center service through
              24/7 Call Center Complimentary Sick Day management service
              Complimentary monthly consultation by Diabetes Educator 20%
              discount on all lab test 30% discount on consultation fee by
              Dietician Complimentary participation to regular Patient meeting
              Free peer advocate support Enrollment Fee: 5,000/=
            </p>
          </div>
        </div>
        <CaseQuestionExp />
      </main>
      <Footer />
    </react.Fragment>
  );
};
export default DiabetesCenter;
