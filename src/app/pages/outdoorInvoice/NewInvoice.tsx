import { Card, CardContent } from "@mui/material";
import CustomCardHeader from "../../../components/CustomCardHeader";
import { useForm, useFieldArray } from 'react-hook-form'
import { DevTool } from "@hookform/devtools";

type FormValues = {
    username : string
    email: string
    channel: string
    social : {
        twitter: string
        facebook: string
    },
    phoneNumbers: string[]
    phNumbers: {
        number : string
    }[]
    age : number
    dob: Date
}

const NewInvoice = () => {

    const { register, control, handleSubmit, formState, watch, getValues } = useForm<FormValues>({
        defaultValues:  {
            username: "batman",
            email: "",
            channel: "",
            social: {
                twitter: "",
                facebook: ""
            },
            phoneNumbers: ["",""],
            phNumbers : [{ number: '' }],
            age: 0,
            dob: new Date()
        }
    })

    const onSubmit = (data : FormValues) => {
        console.log('from submitted', data)
    }

    return (
        <Card>
            <CustomCardHeader
                title="New Invoice"
                subheader="Create New Invoice"
                // navigationlink="hello"
            />
            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)}>

                </form>
            </CardContent>
            <DevTool control={control} />
        </Card>
    );
};

export default NewInvoice;