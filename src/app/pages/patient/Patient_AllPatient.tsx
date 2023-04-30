import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import CustomCardHeader from "../../../components/CustomCardHeader";
import { selectPatient } from "../../../redux/features/patient/patientSlice";
import { useAppSelector } from "../../../redux/hooks";
import CustomDataGrid from "../../../components/CustomDataGrid";

import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';



const Patient_AllPatient = () => {
    const allPatientDetails = useAppSelector(selectPatient)

    const rowDataArray : GridRowsProp = allPatientDetails.map((patient, index) => {
        return {
            sl: index+1,
            ...patient
        }
    })

    const columns: GridColDef[] = Object.keys(rowDataArray[0]).map( ( col, index) => {
        return {
            field: col,
            headerName : col,
            width: 150
        }
    })
    
    console.log(rowDataArray)
    console.log(Object.keys(rowDataArray[0]))
    return (
        <Card>
            <CustomCardHeader
                title={"All Patient"}
                subheader={"List of All Patient"}
                navigationlink="/patient/create"
            />
            <CardContent>
                <DataGrid rows={rowDataArray} columns={columns} />
            </CardContent>
        </Card>
    );
};

export default Patient_AllPatient;