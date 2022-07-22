import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import  Axios  from "axios";
import react, { useState } from "react";
import reactDOM from "react-dom";
import styles from "./ModalConsultantForm.module.css";

const Backdrop = ({ setOpenModalConsultant }) => {
  return (
    <div
      className={styles.backdrop}
      onClick={() => setOpenModalConsultant(false)}
    ></div>
  );
};
const Overlay = ({ setOpenModalConsultant }) => {
  // const navigate = useNavigate();
  // const onClickHandler = (setOpenModalConsultant)=>{
  //   //  setOpenModalConsultant(false);
  //   navigate('/patient/doctordetails/:Id');
  const [deptName, setDeptName] = useState("");
  const closeModal = ()=>{
    setOpenModalConsultant(false);
  }
  const selectDept = async (e) => {
    e.preventDefault();
    const res = await Axios.post("http://localhost:4000/searchconsultant", {
      dept: deptName,
    });
   
    console.log(res);
    closeModal();
    
  };

  return (
    <div className={styles.container}>
      <Card className={styles.card}>
        <h2 className={styles.h2}>Give Your Information Here</h2>
        <CardContent>
          
          <form className={styles.form}>
            {/* <div className={styles.infos}>
                <label>Name:</label>
                <input type="text"></input>
                
              </div> */}
            <div className={styles.times}>
            
              <select value={deptName} onChange={(e) => {
                    setDeptName(e.target.value);
                  }}>
                    <option>Choose a Dept.</option>
                   
                <option
                  // value="orthopedics"
                 
                >
                  Orthopedics
                </option>
                <option
                  // value="cardiac"
                  
                >
                  Cardiac
                </option>
                <option
                  selected
                  value="all speciality"
                  
                >
                  All Speciality
                </option>
                <option
                  // value="anesthesian"
                  
                >
                  Anesthesian
                </option>
              </select>
            </div>
          </form>
        </CardContent>
        <CardActions>
          
          <Button className={styles.button1} onClick={selectDept}>
            Search
          </Button>
        </CardActions>
      </Card>
      
    </div>
  );
};
const portalElement = document.querySelector("#overlay");

const ModalConsultantForm = ({ setOpenModalConsultant }) => {
  return (
    <react.Fragment>
      <Overlay setOpenModalConsultant={setOpenModalConsultant} />

      {reactDOM.createPortal(
        <Backdrop setOpenModalConsultant={setOpenModalConsultant} />,
        portalElement
      )}
    </react.Fragment>
  );
};
export default ModalConsultantForm;
