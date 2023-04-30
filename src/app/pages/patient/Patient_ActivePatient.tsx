
import CustomCardHeader from "../../../components/CustomCardHeader";
import Patient_PatientDetails from "./Patient_PatientDetails";



const Patient_ActivePatient = () => {

    
    return (
        <Patient_PatientDetails status='active'>
            <CustomCardHeader
                title="New Patient"
                subheader="Create New Patient"
                navigationlink="/patient/active"
            />
        </Patient_PatientDetails>
    );
};

export default Patient_ActivePatient;