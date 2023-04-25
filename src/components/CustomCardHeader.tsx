import { Avatar, Button, CardHeader } from "@mui/material";
import { red } from "@mui/material/colors";
import { Link } from "react-router-dom";

type CustomCardHeaderProps = {
    title: string
    subheader: string
    navigationlink?: string
}

const CustomCardHeader = ({title, subheader, navigationlink} : CustomCardHeaderProps) => {
    return (
        <CardHeader
            sx={{
                // '& .MuiCardheader-action': { mt: 0}
                '& .css-sgoict-MuiCardHeader-action': { my: 0},
                borderBottom : '1px solid #ebedf3'
            }}
            title={title}
            subheader={subheader}
            avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">R</Avatar>
            }
            action={
                navigationlink && <Link to={navigationlink} ><Button variant='contained'> + Add New </Button></Link>
            }
        />
    );
};

export default CustomCardHeader;