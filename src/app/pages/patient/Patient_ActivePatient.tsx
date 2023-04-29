import { Card, CardContent } from '@mui/material';
import React from 'react';
import CustomCardHeader from '../../../components/CustomCardHeader';
import { useForm, Controller } from 'react-hook-form';

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

const Patient_ActivePatient = () => {
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
        <Card>
            <CustomCardHeader
                title="New Patient"
                subheader="Create New Patient"
                navigationlink="/patient/create"
            />
            <CardContent>
            <form onSubmit={handleSubmit(onSubmit)}>

            </form>
            </CardContent>
        </Card>
    );
};

export default Patient_ActivePatient;