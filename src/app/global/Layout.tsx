import { Box } from '@mui/material'
import TopBar from '../../components/Topbar';
import { Outlet } from 'react-router-dom';
import MySidebar from '../../components/MySidebar';

const Layout = () => {


    return (

            <Box sx={{display:'flex', width:'100%', height:'100vh'}}>
                <MySidebar />
                <Box sx={{display:'flex', flexDirection:'column', width:'100%', height:'100vh', overflowY:"scroll",maxHeight:'100vh'}}>
                    <TopBar/>
                    <Outlet />
                    <Box sx={{mt: 'auto', textAlign:'center', backgroundColor:'grey', width:'100%'}}>Footer</Box>
                </Box>
            </Box>

    );
};

export default Layout;