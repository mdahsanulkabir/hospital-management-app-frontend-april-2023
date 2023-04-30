import { Card, CardContent, Grid, TextField, Button } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import CustomCardHeader from "../../../components/CustomCardHeader";
import { useForm, useFieldArray, Controller } from 'react-hook-form'
import { DevTool } from "@hookform/devtools";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";
import { Dayjs } from "dayjs";

type FormValues = {
    patientName : string
    patientEmail: string
    patientMobilePhone: number
    patientGender: string
    patientAddress : string
    patientDOB : Date
    refferedBy: string
}

const NewInvoice = () => {

    const [value, setValue] = useState<Dayjs | null>(null);

    const { register, control, handleSubmit, formState, watch, getValues } = useForm<FormValues>({
        defaultValues:  {
            patientName: "",
            patientEmail: "",
            patientMobilePhone: 0,
            patientGender: "",
            patientAddress: "",
            patientDOB: new Date,
            refferedBy: ''
        }
    })

    const onSubmit = (data : FormValues) => {
        console.log('from submitted', data)
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Card>
                <CustomCardHeader
                    title="New Invoice"
                    subheader="Create New Invoice"
                    // navigationlink="hello"
                />
                <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid container spacing={2} pb="20px">
                            <Grid item xs={12} sm={6} md={4} lg={3} >
                                <Controller
                                    name="patientName"
                                    control={control}
                                    // rules={}
                                    render={({field}) => 
                                        <TextField
                                            {...field}
                                            type="text"
                                            variant="outlined"
                                            label="Patient Name"
                                            fullWidth
                                        />
                                    }
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} lg={3} >
                                <Controller
                                    name="patientEmail"
                                    control={control}
                                    // rules={}
                                    render={({field}) => 
                                        <TextField
                                            {...field}
                                            type="text"
                                            variant="outlined"
                                            label="Email"
                                            fullWidth
                                        />
                                    }
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} lg={3} >
                                <Controller
                                    name="patientMobilePhone"
                                    control={control}
                                    // rules={}
                                    render={({field}) => 
                                        <TextField
                                            {...field}
                                            type="text"
                                            variant="outlined"
                                            label="Phone Number"
                                            fullWidth
                                        />
                                    }
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} lg={3} >
                                <Controller
                                    name="patientGender"
                                    control={control}
                                    // rules={}
                                    render={({field}) => 
                                        <TextField
                                            {...field}
                                            select
                                            type="text"
                                            variant="outlined"
                                            label="Gender"
                                            fullWidth
                                        >
                                            {["Male", "Female"].map((option) => (
                                                <MenuItem key={option} value={option}>
                                                    {option}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                    }
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={8} lg={6} >
                                <Controller
                                    name="patientAddress"
                                    control={control}
                                    // rules={}
                                    render={({field}) => 
                                        <TextField
                                            {...field}
                                            type="text"
                                            variant="outlined"
                                            label="Address"
                                            fullWidth
                                            multiline
                                            minRows={4}
                                        />
                                    }
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={3} >
                                <Controller
                                    name="patientDOB"
                                    control={control}
                                    // rules={}
                                    render={({field}) => 
                                        <DatePicker
                                            {...field}
                                            value={value} 
                                            onChange={(newValue) => setValue(newValue)}
                                        />
                                    }
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} lg={3} >
                                <Controller
                                    name="refferedBy"
                                    control={control}
                                    // rules={}
                                    render={({field}) => 
                                        <TextField
                                            {...field}
                                            type="text"
                                            variant="outlined"
                                            label="Reffered By"
                                            fullWidth
                                        />
                                    }
                                />
                            </Grid>
                        </Grid>
                        <Grid container >
                            
                        </Grid>
                        <Button type='submit' variant='contained'>Save Invoice</Button>
                    </form>
                </CardContent>
                <DevTool control={control} />
            </Card>
        </LocalizationProvider>
    );
};

export default NewInvoice;