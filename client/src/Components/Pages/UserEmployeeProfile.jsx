import react from 'react'
import Footer from '../Footer/Footer';
import DoctorNavbar from '../Navbar/DoctorNavbar';

const UserEmployeeProfile = (props)=>{
    return(
        <react.Fragment>
            <DoctorNavbar/>
            <div>Welcome Employee</div>
            <div>
                <h1>Shift</h1>
                <h2>From 12:00 AM to 8:00 AM</h2>
                </div>
                <div><h1>Building Name </h1>
                <h2>A</h2></div>
                <div><h1>Room No.</h1>
                <h2>123</h2>
                </div>
                <Footer/>
        </react.Fragment>
    );

};
export default UserEmployeeProfile;
