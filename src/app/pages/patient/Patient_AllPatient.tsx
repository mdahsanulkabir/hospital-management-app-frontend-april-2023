
import CustomCardHeader from "../../../components/CustomCardHeader";
import Patient_PatientDetails from "./Patient_PatientDetails";

const Patient_AllPatient = () => {
    
    return (
        <Patient_PatientDetails>
            <CustomCardHeader
                title={"All Patient"}
                subheader={"List of All Patient"}
                navigationlink="/patient/create"
            />
        </Patient_PatientDetails>
    );
};

export default Patient_AllPatient;