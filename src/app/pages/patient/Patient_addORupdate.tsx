import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import CustomCardHeader from "../../../components/CustomCardHeader";
import { useForm, Controller } from 'react-hook-form'
import { DevTool } from "@hookform/devtools";
import MenuItem from '@mui/material/MenuItem';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Dayjs } from 'dayjs';
import { useState } from "react";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

type FormValues = {
    patientName : string
    patientEmail: string
    patientMobilePhone: number
    patientGender: string
    patientAddress : string
    patientSpecialnote: string
    patientDOB : Date
    patientBloodGroup : string
    patientGuardianName: string
    patientGuardianMobilePhone: number
    patientGuardianNID: string
    patientNID: string
    patientBirthCertificate: string
    patientVisitorPass: string | null
    patientStatus: string
    password: string
}

type Patient_addORupdateProps = {
    customHeaderTitle: string
    customHeaderSub: string
    submitButtonText: string
    // onSubmit: () => void
}

const Patient_addORupdate = ({customHeaderTitle, customHeaderSub, submitButtonText, }:Patient_addORupdateProps) => {
    
    const [value, setValue] = useState<Dayjs | null>(null);

    const { register, control, handleSubmit, formState, watch, getValues } = useForm<FormValues>({
        defaultValues:  {
            patientName: "",
            patientEmail: "",
            patientMobilePhone: 0,
            patientGender: "",
            patientAddress: "",
            patientSpecialnote: "",
            patientDOB: new Date,
            patientBloodGroup: "",
            patientGuardianName: "",
            patientGuardianMobilePhone: 0,
            patientGuardianNID: "",
            patientNID: "",
            patientBirthCertificate: "",
            patientVisitorPass: "",
            patientStatus: "",
            password: ''
        }
    })

    const onSubmit = (data : FormValues) => {
        console.log('from submitted', data)
    }
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Card>
            <CustomCardHeader
                title={customHeaderTitle}
                subheader={customHeaderSub}
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
                        <Grid item xs={12} sm={12} md={8} lg={6} >
                            <Controller
                                name="patientSpecialnote"
                                control={control}
                                // rules={}
                                render={({field}) => 
                                    <TextField
                                        {...field}
                                        type="text"
                                        variant="outlined"
                                        label="Special Note"
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
                        <Grid item xs={12} sm={6} md={3} >
                            <Controller
                                name="patientBloodGroup"
                                control={control}
                                // rules={}
                                render={({field}) => 
                                    <TextField
                                        {...field}
                                        type="text"
                                        variant="outlined"
                                        label="Blood Group"
                                        fullWidth
                                    />
                                }
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} >
                            <Controller
                                name="patientGuardianName"
                                control={control}
                                // rules={}
                                render={({field}) => 
                                    <TextField
                                        {...field}
                                        type="text"
                                        variant="outlined"
                                        label="Guardian"
                                        fullWidth
                                    />
                                }
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} >
                            <Controller
                                name="patientGuardianMobilePhone"
                                control={control}
                                // rules={}
                                render={({field}) => 
                                    <TextField
                                        {...field}
                                        type="text"
                                        variant="outlined"
                                        label="Guardian mobile"
                                        fullWidth
                                    />
                                }
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} >
                            <Controller
                                name="patientGuardianNID"
                                control={control}
                                // rules={}
                                render={({field}) => 
                                    <TextField
                                        {...field}
                                        type="text"
                                        variant="outlined"
                                        label="Guardian NID"
                                        fullWidth
                                    />
                                }
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} >
                            <Controller
                                name="patientNID"
                                control={control}
                                // rules={}
                                render={({field}) => 
                                    <TextField
                                        {...field}
                                        type="text"
                                        variant="outlined"
                                        label="Patient NID"
                                        fullWidth
                                    />
                                }
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} >
                            <Controller
                                name="patientBirthCertificate"
                                control={control}
                                // rules={}
                                render={({field}) => 
                                    <TextField
                                        {...field}
                                        type="text"
                                        variant="outlined"
                                        label="Patient Birth Certificate"
                                        fullWidth
                                    />
                                }
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} >
                            <Controller
                                name="patientVisitorPass"
                                control={control}
                                // rules={}
                                render={({field}) => 
                                    <TextField
                                        {...field}
                                        type="text"
                                        variant="outlined"
                                        label="Visitor Pass"
                                        fullWidth
                                    />
                                }
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} >
                            <Controller
                                name="patientStatus"
                                control={control}
                                // rules={}
                                render={({field}) => 
                                    <TextField
                                        {...field}
                                        select
                                        type="text"
                                        variant="outlined"
                                        label="Status"
                                        fullWidth
                                    >
                                        {['active', 'pending', 'banned'].map((option) => (
                                            <option key={option} value={option}>
                                            {option}
                                            </option>
                                        ))}
                                    </TextField>
                                }
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} >
                            <Controller
                                name="password"
                                control={control}
                                // rules={}
                                render={({field}) => 
                                    <TextField
                                        {...field}
                                        type="password"
                                        variant="outlined"
                                        label="Password"
                                        fullWidth
                                    />
                                }
                            />
                        </Grid>
                    </Grid>
                    <Button type='submit' variant='contained'>{submitButtonText}</Button>
                </form>
            </CardContent>
            <DevTool control={control} />
        </Card>
        </LocalizationProvider>
    );
};

export default Patient_addORupdate;