import { selectPatient } from "../../../redux/features/patient/patientSlice";
import { useAppSelector } from "../../../redux/hooks";


const Patient_AllPatient = () => {
    const allPatientDetails = useAppSelector(selectPatient)
    
    console.log(allPatientDetails)
    return (
        <div>
            <h1>Patient all patient</h1>
        </div>
    );
};

export default Patient_AllPatient;