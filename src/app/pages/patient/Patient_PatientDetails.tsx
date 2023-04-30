import { Box, Card, CardContent } from "@mui/material";
import { selectPatient } from "../../../redux/features/patient/patientSlice";
import { useAppSelector } from "../../../redux/hooks";

import { DataGrid, GridRowsProp, GridColDef, GridToolbar } from '@mui/x-data-grid';

type Patient_PatientDetailsProps = {
    status?: string
    children: React.ReactNode
}

const Patient_PatientDetails = ({status, children} : Patient_PatientDetailsProps) => {
    let allPatientDetails = useAppSelector(selectPatient)

    status ? (allPatientDetails = allPatientDetails.filter(patient => patient.status === status)) : null

    const rowDataArray : GridRowsProp = allPatientDetails.map((patient, index) => {
        
        return {
            sl: index+1,
            ...patient,
            action: <button>rtewer</button>
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
        !rowDataArray ? <Box>There is no {status} patient</Box> 
        : <Card>
        {children}
        <CardContent>
            <DataGrid 
                rows={rowDataArray} 
                columns={columns} 
                slots={{ toolbar: GridToolbar }}
                slotProps={{
                    toolbar: {
                        showQuickFilter: true,
                        quickFilterProps: { debounceMs: 500 },
                    },
                }}
            />
        </CardContent>
    </Card>
    );
};

export default Patient_PatientDetails;