
import CustomCardHeader from "../../../components/CustomCardHeader";
import Patient_PatientDetails from "./Patient_PatientDetails";

const Patient_BannedPatient = () => {
    return (
        <Patient_PatientDetails status='banned'>
            <CustomCardHeader
                title="Banned Patient"
                subheader="List of Banned Patient"
                navigationlink="/patient/banned"
            />
        </Patient_PatientDetails>
    );
};

export default Patient_BannedPatient;