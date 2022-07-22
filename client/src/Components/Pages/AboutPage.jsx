import react from "react";
import Navbar2 from "../Navbar/Navbar2";
import Footer from "../Footer/Footer";
import styles from "./BloodBank.module.css"
import Slider from "../../UI Components/Slider/Slider";

const AboutUs = () => {
  return (
    <react.Fragment>
      <header>
        <Navbar2/>
      </header>
      <main>
        <Slider/>
        <div className={styles.bloodbank}>
        <h1>AboutUs</h1>
        
        
        <div className={styles.bloodbank1}>
            <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
        eveniet delectus obcaecati, maiores quos fugit ex adipisci iste veniam
        nam architecto, minus, enim maxime corrupti officia alias corporis
        aspernatur sapiente.</p>
        </div>
        </div>

      </main>
      <Footer/>
    </react.Fragment>
  );
};
export default AboutUs;
