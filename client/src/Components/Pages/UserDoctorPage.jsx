import react from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import DoctorNavbar from '../Navbar/DoctorNavbar';
import DoctorProfile from '../Profile/DoctorProfile/DoctorProfile';


const userDoctorPage = (props)=>{
return(
<react.Fragment>
    <DoctorNavbar/>
    <h1>Doctor Profile</h1>
    <DoctorProfile/>
    
</react.Fragment>
);
};
export default userDoctorPage;