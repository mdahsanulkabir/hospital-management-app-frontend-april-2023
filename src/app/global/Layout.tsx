import { Box, Paper, Typography } from '@mui/material'
import TopBar from '../../components/Topbar';
import { Outlet } from 'react-router-dom';
import MySidebar from '../../components/MySidebar';

const Layout = () => {


    return (

            <Box sx={{display:'flex', width:'100%', height:'100vh'}}>
                <MySidebar />
                <Box sx={{display:'flex', flexDirection:'column', width:'100%', height:'100vh', overflowY:"scroll",maxHeight:'100vh', background:'#eaf1f7'}}>
                    <TopBar/>
                    <Box sx={{mt: '1.5rem', px:'15px', pb:'25px'}}>
                        <Outlet />
                    </Box>
                    <Box component={Paper} sx={{mt: 'auto', textAlign:'center', width:'100%', height:"65px",mb:'40px',py:'13px'}}>
                        <Box px='25px' justifyContent='space-between' alignItems='center' display='flex'>
                            <Box display='flex' >
                                <Typography mr='10px'>Help</Typography>
                                <Typography mr='10px'>Main Site</Typography>
                            </Box>
                            <Box>
                                <p>Made with <span>by Bluedot Technology Ltd</span> </p>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>

    );
};

export default Layout;