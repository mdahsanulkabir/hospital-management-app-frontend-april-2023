import { Card, CardContent } from "@mui/material";
import CustomCardHeader from "../../../components/CustomCardHeader";

const NewInvoice = () => {
    return (
        <Card>
            <CustomCardHeader
                title="New Invoice"
                subheader="Create New Invoice"
                // navigationlink="hello"
            />
            <CardContent>
            
            </CardContent>
        </Card>
    );
};

export default NewInvoice;