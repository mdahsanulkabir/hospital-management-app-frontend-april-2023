import { Box, IconButton, Menu, MenuItem, MenuList, Paper, TextField, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { useState } from 'react'

const Topbar = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Box pr={1}>
            <Paper elevation={2} sx={{display: 'flex', p:'1rem', height: '75px', justifyContent: 'space-between'}}>
                <TextField 
                    sx={{width: { xs: '150px', lg: '200px' }, 
                        "& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root": {height: '40px'}
                    }} />
                    
                <IconButton color="primary" aria-label="add to shopping cart" onClick={handleClick}>
                    <PersonIcon fontSize='large' />
                </IconButton>
                <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '& .MuiSvgIcon-root': {
                                width: 20,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&:before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    <MenuList dense sx={{p:0, m:0}}>
                        <MenuItem onClick={handleClose}>
                            <PersonIcon fontSize='small'/> <Typography fontSize={'13px'}>Profile</Typography>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <Settings fontSize='small'/> <Typography fontSize={'13px'}>Settings</Typography>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <Logout fontSize='small'/> <Typography fontSize={'13px'}>Logout</Typography>
                        </MenuItem>
                    </MenuList>
                </Menu>
            </Paper>
        </Box>
    );
};

export default Topbar;