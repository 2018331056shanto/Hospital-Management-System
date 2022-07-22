import react from "react";
import Navbar2 from "../Navbar/Navbar2";
import Footer from "../Footer/Footer";
import CaseQuestionExp from "../Case_Question_Exp";
import Slider from "../../UI Components/Slider/Slider";
import styles from "./BloodBank.module.css";
const RoomCategory = () => {
  return (
    <react.Fragment>
      <header>
        <Navbar2 />
      </header>
      <main>
        <Slider />
        <div className={styles.bloodbank}>
          <h3>Room Category</h3>
          <div className={styles.bloodbank1}>
            <p>
              SL NOTYPE OF CABIN/ROOMRENT PER DAY (BDT) 01VIP or Deluxe
              Suite25,000.00 02Standard Suite16,500.00 03Deluxe Single11,500.00
              04Luxury Single10,000.00 05Standard Single8,500.00 06Double Bedded
              Room5,000.00 07General Ward (Male/Female)4,000.00 08ICU /
              CCU9,500.00 09KT ICU9,000.00 10CICU9,000.00 11CICU (Step
              Down)6,000.00 12NICU / PICU9,500.00 13NICU HDU7,000.00 14NICU
              Isolation HDU7,000.00 15NICU Isolation ICU9,500.00 16Cardiac
              HDU7,000.00 17General HDU7,000.00 18SCU (Special Care
              Unit)7,000.00 19Nursery4,000.00 20Oncology Ward (3 Bedded)4,000.00
              21Oncology – Day Care3,500.00 22Ward (4 Bedded)4,000.00 23Ward (8
              Bedded)4,000.00 24Ward (9 Bedded)4,000.00 25Ward (Post
              Cath)4,000.00 26Ward (Pre Cath)4,000.00
            </p>
          </div>
        </div>
        <CaseQuestionExp />
      </main>
      <Footer />
    </react.Fragment>
  );
};
export default RoomCategory;
