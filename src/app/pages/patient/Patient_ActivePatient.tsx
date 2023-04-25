import { Card } from '@mui/material';
import React from 'react';
import CustomCardHeader from '../../../components/CustomCardHeader';

const Patient_ActivePatient = () => {
    return (
        <Card>
            <CustomCardHeader
                title="New Patient"
                subheader="Create New Patient"
                navigationlink="/patient/create"
            />
        </Card>
    );
};

export default Patient_ActivePatient;