import react from "react";
import Navbar2 from "../Navbar/Navbar2";
import Footer from "../Footer/Footer";
import CaseQuestionExp from "../Case_Question_Exp";
import Slider from "../../UI Components/Slider/Slider";
import styles from "./BloodBank.module.css";
const Emergency = () => {
  return (
    <react.Fragment>
      <header>
        <Navbar2 />
      </header>
      <main>
        <Slider />
        <div className={styles.bloodbank}>
          <h3>Emergency</h3>
          <div className={styles.bloodbank1}>
            <p>
              A Center of Excellence in Emergency Medicine of BangladeshThe
              emergency department provides service 24 hours a day and 7 days a
              week. ICU ambulance service is also available for both critical
              and non-critical patient transfers in Dhaka and surrounding areas.
              In case of any emergency, use our Emergency/ Ambulance service
              line at +880 191 400 1234. Our ambulance will reach you anywhere
              in Dhaka to provide you with the best medical care in Bangladesh.
              United Hospital Emergency is one of the largest, modern and well
              equipped Emergency Department in this territory providing services
              24X7 It is a Reception Management area for all emergency cases
              Working 24x7 and ready to provide services to male-female of all
              age groups Any (patient) victim with serious medical or surgical
              condition in need of an immediate management We have 24/7
              Ambulance service with dedicated BLS &ALS medical team ( EMT)
              Registration of patient and issuing MRN card for all emergency
              patient seeking for care Help in completing patient’s personal
              data ED admission in respective department Guides and provides
              information to patients and attendant Help in problem solving
              Receiving emergency call for patient care and ambulance services &
              directing information to proper authority through proper channel
              Why would you choose United Hospital Emergency? Biggest & unique
              Emergency area Golden hour management & zero minute delay Triage
              area Proper Advanced resuscitation room Isolation room for
              infectious patient (As Planned) Decontamination room (As Planned)
              Highly equipped observation bed 24 hours emergency expert
              specialist doctors 24 hours EMT with BLS & ALS ambulance service
              Dedicated emergency nursing service United Hospital and its
              emergency department as a whole took precautions to prevent the
              spread of the COVID-19 virus and help make sure that visits to the
              ED and hospital are as safe as possible, following strict
              guidelines for protecting people during the COVID-19 pandemic.
              These included universal masking requiring that everyone wears a
              face mask; screening at all entrances for COVID-19 signs and
              symptoms; separate waiting areas for people who have or may have
              COVID-19 in designated areas of the ED away from those who don't
              have COVID-19 signs and symptoms; frequent cleaning and
              disinfecting of ED waiting areas, rooms, restrooms and surfaces to
              accommodate updated COVID-19 hospital cleaning protocols and
              social distancing in check-in and waiting areas in Emergency
              Department and as a whole in the hospital.ICU Ambulance Rate Chart
              & Service DetailRegular Ambulance is available 24/7 for emergency
              transportation of patients maintaining the BLS (Basic Life
              Support) ambulance standard. A trained nursing staff from the
              Emergency Department travels with the patient accompanied by a
              skilled Patient Care personnel. Regular Ambulance comes with all
              sorts of special first aid instruments, BP Machine, Stethoscope,
              Glucometer, Pulse Oxymeter and oxygen cylinder to meet any
              non-emergency requirement of the patient. Staffed by EMTs
              (Emergency Medical Technician), basic life support transport is
              ideal for patients who have lower extremity fractures, patients
              transferred to sub-acute care facilities or who are discharged to
              home care, psychiatric patients, and other non-emergency medical
              transportation.Emergency ICU Ambulance is a specialized service,
              prepared for patients with emergency cardiac conditions or other
              critical issues. United Hospital Emergency ICU Ambulance is known
              as the best in Bangladesh because of the comprehensive emergency
              support. An emergency doctor is appointed alongside the emergency
              nursing staff and the patient care personnel. The best emergency
              ambulance service in Bangladesh contains Advanced Cardiac Life
              Support (ACLS) equipments including Cardiac Monitor, ECG Machine,
              Ventilator, Pulse Oxymeter, Defibrillator, adequate number of
              syringe pumps, suction meter, nebulizer machine, glucometer, BP
              apparatus and other required equipments. United Hospital Emergency
              ICU ambulance is recommended only for non-responsive patients at
              critical conditions, patients with Cardiac issues, breathing
              abnormality, low oxygen saturation, hypoglycemic condition and
              other severe cases.RATE CHART OF AMBULANCE SERVICE Sl No.
              Particulars Return Trip (BDT) Cardiac Ambulance 1 Gulshan, Banani,
              Baridhara, DOHS (Baridhara), Radission Hotel (Return Trip) 3,500 2
              Airport Area (beyond Khilkhet Rail Gate), Mohakhali (beyond
              bridge), DOHS (Mohakhali), Cantonment, DOHS (Cantonment), Kafrul,
              Badda, Tejgaon, Nakhalpara, Old Airport Area, Uttara (Return trip)
              5,000 3 Rest of the City 7,500 4 Areas Outside Dhaka (upto a
              distance of 50 km – return trip) 15,000 5 Areas Outside Dhaka
              (upto a distance of 50 km – 100 km - return trip) 20,000 6 Areas
              Outside Dhaka (upto a distance of 100 km – 150 km - return trip)
              30,000 7 Areas Outside Dhaka (upto a distance of 150 km – 200 km -
              return trip) 40,000 8 Areas Outside Dhaka (upto a distance of more
              than 200 km - return trip) 50,000 Normal Ambulance 1 Gulshan,
              Banani, Baridhara, DOHS (Baridhara), Radisson Hotel (Return Trip)
              2,000 2 Airport Area (beyond Khilkhet Rail Gate), Mohakhali
              (beyond bridge), DOHS (Mohakhali), Cantonment, DOHS (Cantonment),
              Kafrul, Badda, Tejgaon, Nakhalpara, Old Airport Area, Uttara
              (Return trip) 3,000 3 Rest of the City 5,000 4 Areas Outside Dhaka
              (upto a distance of 50 km – return trip) 10,000 5 Areas Outside
              Dhaka (upto a distance of 50 km – 100 km - return trip) 15,500 6
              Areas Outside Dhaka (upto a distance of 100 km – 150 km - return
              trip) 18,000 7 Areas Outside Dhaka (upto a distance of 150 km –
              200 km - return trip) 22,000 8 Areas Outside Dhaka (upto a
              distance of more than 200 km - return trip) 25,000Note: These
              rates are inclusive of return trip; the distance that the
              ambulance will cover while going as well coming back to the
              hospital, needs to be calculated.Extra charge of TK. 500/= (five
              hundred) will be added for each waiting period of one hour after
              the first hour.
            </p>
          </div>
        </div>
        <CaseQuestionExp />
      </main>
      <Footer />
    </react.Fragment>
  );
};
export default Emergency;
