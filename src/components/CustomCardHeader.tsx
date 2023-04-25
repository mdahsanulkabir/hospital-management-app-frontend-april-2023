import { Avatar, Button, CardHeader } from "@mui/material";
import { red } from "@mui/material/colors";
import MoreVertIcon from '@mui/icons-material/MoreVert';

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
                '& .css-sgoict-MuiCardHeader-action': { my: 0}
            }}
            title={title}
            subheader={subheader}
            avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">R</Avatar>
            }
            action={
                navigationlink && <Button variant="contained">{navigationlink}</Button>
            }
        />
    );
};

export default CustomCardHeader;