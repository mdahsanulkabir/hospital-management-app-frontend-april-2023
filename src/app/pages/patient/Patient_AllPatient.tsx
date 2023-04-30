import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import CustomCardHeader from "../../../components/CustomCardHeader";
import { selectPatient } from "../../../redux/features/patient/patientSlice";
import { useAppSelector } from "../../../redux/hooks";


const Patient_AllPatient = () => {
    const allPatientDetails = useAppSelector(selectPatient)
    
    console.log(allPatientDetails)
    return (
        <Card>
            <CustomCardHeader
                title={"All Patient"}
                subheader={"List of All Patient"}
                navigationlink="/patient/create"
            />
            <CardContent>
                dfghdfghdfgh
            </CardContent>
        </Card>
    );
};

export default Patient_AllPatient;