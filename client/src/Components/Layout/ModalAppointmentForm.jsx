import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import react from "react";
import reactDOM from "react-dom";
import styles from "./ModalAppointmentForm.module.css";
import Axios from 'axios';
import { useState } from "react";

const Backdrop = ({ setOpenModalAppointment }) => {
  return (
    <div className={styles.backdrop} onClick={() => setOpenModalAppointment(false)}></div>
  );
};
const Overlay = ({ setOpenModalAppointment}) => {
  const [patientName,setPatientName] = useState("");
  const [patientEmail,setPatientEmail] = useState("");
  const [patientPhone,setPatientPhone] = useState("");
  const [patientTime,setPatientTime] = useState("");
  const [patientDate,setPatientDate] = useState("");
  const [patientMedicalHistory,setPatientMedicalHistory] = useState("");
  const closeModal = ()=>{
   
    setOpenModalAppointment(false);
  }

  const appointment = async(e)=>{
    e.preventDefault();
    const res= await Axios.post("http://localhost:4000/appointmentinfo",{
      name: patientName,
      email: patientEmail,
      phone: patientPhone,
      time:patientTime,
      date: patientDate,
      medicalhistory: patientMedicalHistory
    })
    console.log(res);
    closeModal();
   
  }


  return (
    <div className={styles.container}>
      <Card className={styles.card}>
        <h2 className={styles.h2}>Give Your Information Here</h2>
        <CardContent>
          <form className={styles.form}>
            <div className={styles.infos}>
              <label>Name:</label>
              <input type="text" onChange={(e)=>{setPatientName(e.target.value)}}></input>
              <label>E-mail:</label>
              <input type="e-mail" onChange={(e)=>{setPatientEmail(e.target.value)}}></input>
              <label>Phone:</label>
              <input type="number" onChange={(e)=>{setPatientPhone(e.target.value)}}></input>
            </div>
            <div className={styles.times}>
              <label>Time:</label>
              <input type="time" onChange={(e)=>{setPatientTime(e.target.value)}}></input>
              <label>Date:</label>
              <input type="date" onChange={(e)=>{setPatientDate(e.target.value)}}></input>
              <label>Medical History:</label>
              <input type="text" onChange={(e)=>{setPatientMedicalHistory(e.target.value)}}></input>
            </div>
          </form>
        </CardContent>
        <CardActions>
          <Button
            className={styles.button1}
            onClick={appointment}
          >
            Submit
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

const portalElement = document.querySelector("#overlay");

const ModalAppointmentForm = ({ setOpenModalAppointment }) => {
  return (
    <react.Fragment>
      <Overlay setOpenModalAppointment={setOpenModalAppointment} />

      {reactDOM.createPortal(
        <Backdrop setOpenModalAppointment={setOpenModalAppointment} />,
        portalElement
      )}
    </react.Fragment>
  );
};
export default ModalAppointmentForm;
