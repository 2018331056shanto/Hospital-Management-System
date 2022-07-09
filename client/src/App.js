import "./App.css";
import Footer from "./Components/Footer/Footer";
import LandingPage from "./Components/Landing Page/LandingPage";
import Navbar from "./Components/Navbar/Navbar";

import { BrowserRouter, Routes, Route, useParams, useNavigate, useLocation} from "react-router-dom";

import PateintPage from "./Components/Pages/PatientPage";
import EmployeePage from "./Components/Pages/EmployeePage";
import Contact from "./Components/Pages/ContactPage";
import Services from "./Components/Pages/ServicesPage";
import AboutUs from "./Components/Pages/AboutPage";
import LoginPage from "./Components/Pages/LoginPage";
import DoctorPage from "./Components/Pages/DoctorPage";
import Admin from "./Components/Admin/Admin";
import FeaturesBox from "./Components/Admin/FeaturesBox/FeaturesBox";
import Dashboard from "./Components/Admin/Dashboard/Dashboard";
import Wraper from "./Components/Admin/Wraper/Wraper";
import Doctor from "./Components/Admin/Doctor/Doctor";
import DoctorProfile from "./Components/Profile/DoctorProfile/DoctorProfile";
import EmployeeProfile from "./Components/Profile/EmployeeProfile/EmployeeProfile";
import Employee from "./Components/Admin/Employee/Employee";
import Patients from "./Components/Admin/Patients/Patients";
import InfoUpdate from "./Components/InfoUpdate/InfoUpdate";
import { createContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import Notification from "./Components/Admin/Notification/Notification";
import DocumentView from "./Components/Admin/Notification/DocumentView/DocumentView"
function App() {
  // const token=localStorage.getItem("token")
  // console.log(token)
  let [userState,setUserState]=useState({})
  const dataHandler=(data)=>{
    console.log(data)
    setUserState(data)
  }
  const user=userState;
  return (
    <BrowserRouter>

      <div className="App">
        {/* <Navbar /> */}
        
        <main></main>
      
        <UserContext.Provider value={user}>
        <Routes>
          <Route path="/" exect element={<LandingPage/>}/>
          <Route path="/patient" exact element={<PateintPage />} />
          <Route path="/login" exact element={<LoginPage data={dataHandler}/>} />
          <Route path="/admin" element={<> <Admin/>,<Wraper ><Dashboard/></Wraper></>} />
          <Route path="admin/dashboard" exact element={<> <Admin/>,<Wraper ><Dashboard/></Wraper></>} />
          <Route path="admin/doctor" exect element={<> <Admin/>,<Wraper ><Doctor/></Wraper></>} />
          <Route path="admin/employee" exect element={<> <Admin/>,<Wraper><Employee/></Wraper></>} />
          <Route path="admin/patients" exect element={<> <Admin/>,<Wraper ><Patients/></Wraper></>} />
          <Route path="admin/profile" exect element={<><Admin/>,<Wraper ><InfoUpdate/></Wraper></>} />
          <Route path="admin/notification/:id" exect element={<><Admin/>,<Wraper ><DocumentView/></Wraper></>} />
         <Route path="admin/notification" exect element={<><Admin/>,<Wraper ><Notification/></Wraper></>} />
          <Route path=":id/profile" exect element={<><Wraper ><InfoUpdate/></Wraper></>} />

          <Route path="admin/doctor/:id" exact element={<><Admin><FeaturesBox/></Admin>,<Wraper ><DoctorProfile/></Wraper></>} />
          <Route path="admin/employee/:id" exact element={<><Admin><FeaturesBox/></Admin>,<Wraper><EmployeeProfile/></Wraper></>} />
          <Route path="/patient" exect element={<PateintPage />} />
          <Route path="/doctor" exact element={<DoctorPage/>} />
          <Route path="/employee" exact element={<EmployeePage/>} />
          <Route path="/services" exact element={<Services/>} />
          <Route path="/aboutus" exact element={<AboutUs/>} />
          <Route path="/contact" exact element={<Contact/>} />
          <Route path="/doctor" exact element={<Wraper ><DoctorPage/></Wraper>} />
          <Route path="/employee" exact element={<Wraper><EmployeePage/></Wraper>} />
          <Route path="/logout" exact element={<LoginPage/>}/>
        </Routes>
        </UserContext.Provider>
        {/* <Footer /> */}
      </div>
            
  
    </BrowserRouter>
  );
}

export default App;
