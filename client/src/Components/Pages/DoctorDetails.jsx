
import react from 'react';
import { useParams } from 'react-router-dom';

const DoctorDetails = (props)=>{
    const params=useParams();
    return(
        <react.Fragment>
            Doctor Details
            <p>{params.Id}</p>
        </react.Fragment>
    );
};
export default DoctorDetails;