import  { 
    ProSidebarProvider,
    Sidebar, Menu, MenuItem, SubMenu, useProSidebar, sidebarClasses, menuClasses
}  from 'react-pro-sidebar'
import CircleIcon from '@mui/icons-material/Circle';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Item } from './Item';
import { useState } from 'react';





const MySidebar = () => {
    const [ isCollapsed, setIsCollapsed ] = useState(false)
    const [selected, setSelected] = useState("Dashboard");
    const [ subMenuOpenStatus, setSubMenuOpenStatus ] = useState("")
    return (
        <ProSidebarProvider>
            <Sidebar
                width="300px" 
                defaultCollapsed={false}
                rootStyles={{
                    [`.${sidebarClasses.container}`]: {
                        backgroundColor: '#052fac',
                    },
                    [`.${menuClasses.root}`]:{
                        color: '#3699ff',
                    },
                    [`.${menuClasses.menuItemRoot}:hover`]:{
                        // fontSize: '1.5em',
                    },
                    [`.${menuClasses.active}`]:{
                        color: 'orange',
                    },
                    [`.${menuClasses.subMenuContent}`]:{
                        // color: 'cyan',
                        background:'inherit',
                        marginLeft:'15px',
                        
                    },
                }}
            >
                <Menu>
                    <Item 
                        title='Dashboard' 
                        to="/" 
                        icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                        selected={selected} 
                        setSelected={setSelected}/>
                    <SubMenu label="Outdoor Invoice" open={(subMenuOpenStatus === "Outdoor Invoice")} icon={<i className="bi bi-receipt"></i>} onClick={()=>setSubMenuOpenStatus("Outdoor Invoice")}>
                        <Item 
                            title='New Invoice' 
                            to="/invoice/create" 
                            icon={<i className="bi bi-receipt"></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                        <Item 
                            title='All Invoice' 
                            to="/invoice" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                    </SubMenu>
                    <SubMenu label="IPD Admission" open={(subMenuOpenStatus === "IPD Admission")} onClick={()=>setSubMenuOpenStatus("IPD Admission")}>
                        <Item 
                            title='New Admission' 
                            to="/admission/create" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                        <Item 
                            title='Draft Admission' 
                            to="/admission/draft" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                        <Item 
                            title='Final Admission' 
                            to="/admission/final" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                        <Item 
                            title='All Admission' 
                            to="/admission" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                    </SubMenu>
                    <SubMenu label="Finance">
                        <Item 
                            title='New Income' 
                            to="/finance/create/income" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                        <Item 
                            title='New Expense' 
                            to="/finance/create/expense" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                        <Item 
                            title='IPD Income' 
                            to="/finance/ipd-income" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                        <Item 
                            title='Outdoor Income' 
                            to="/finance/opd-income" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                        <Item 
                            title='Pharmacy Income' 
                            to="/finance/pharmacy-income" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                        <Item 
                            title='IPD Expense' 
                            to="/finance/ipd-expense" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                        <Item 
                            title='Outdoor Expense' 
                            to="/finance/opd-expense" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                        <Item 
                            title='Pharmacy Expense' 
                            to="/finance/pharmacy-expense" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                        <Item 
                            title='All Income' 
                            to="/finance/all-income" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                        <Item 
                            title='All Expense' 
                            to="/finance/all-expense" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                        <Item 
                            title='All Record' 
                            to="/finance" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                    </SubMenu>
                    <SubMenu label="Patient">
                        <Item 
                            title='New Patient' 
                            to="/patient/create" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                        <Item 
                            title='Active Patient' 
                            to="/patient/active" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                        <Item 
                            title='Banned Patient' 
                            to="/patient/banned" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                        <Item 
                            title='All Patient' 
                            to="/patient" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                    </SubMenu>
                    <SubMenu label="Investigation">
                        <Item 
                            title='New Investigation' 
                            to="/investigation/create" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                        <Item 
                            title='All Investigation' 
                            to="/investigation" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                        <Item 
                            title='Equipment' 
                            to="/equipment" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                    </SubMenu>
                    <SubMenu label="IPD Service">
                        <Item 
                            title='New Service' 
                            to="/service/create" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                        <Item 
                            title='All IPD Service' 
                            to="/service" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                        <Item 
                            title='IPD Service Type' 
                            to="/service-type" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                    </SubMenu>
                    <SubMenu label="Seat">
                        <Item 
                            title='New Seat' 
                            to="/seat/create" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                        <Item 
                            title='All Seat' 
                            to="/seat" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                    </SubMenu>
                    <SubMenu label="Investigation Package">
                        <Item 
                            title='New Package' 
                            to="/investigation/package" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                        <Item 
                            title='All Package' 
                            to="/investigation" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                    </SubMenu>
                    <SubMenu label="Appointment">
                        <Item 
                            title='New Appointment' 
                            to="/appointment/create" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                        <Item 
                            title='All Appointment' 
                            to="/appointment" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                    </SubMenu>
                    <SubMenu label="Doctor">
                        <Item 
                            title='New Doctor' 
                            to="/doctor/create" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                        <Item 
                            title='Active Doctor' 
                            to="/doctor/active" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                        <Item 
                            title='Inactive Doctor' 
                            to="/doctor/inactive" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                        <Item 
                            title='All Doctor' 
                            to="/doctor" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                    </SubMenu>
                    <SubMenu label="Prescription">
                        <Item 
                            title='New Prescription' 
                            to="/prescription/create" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                        <Item 
                            title='All Prescription' 
                            to="/prescription" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                    </SubMenu>
                    <SubMenu label="Department">
                        <Item 
                            title='New Department' 
                            to="/department/create" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                        <Item 
                            title='All Department' 
                            to="/department" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                    </SubMenu>
                    <SubMenu label="Pharmacy">
                        <Item 
                            title='New Pharmacy' 
                            to="/pharmacy/create" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                        <Item 
                            title='All Pharmacy' 
                            to="/pharmacy" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                    </SubMenu>
                    <SubMenu label="Pharmacy Inventory">
                        <Item 
                            title='New Pharmacy Inventory' 
                            to="/pharmacy-inventory/create" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                        <Item 
                            title='All Pharmacy Inventory' 
                            to="/pharmacy-inventory" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                    </SubMenu>
                    <SubMenu label="Pharmacy Purchase">
                        <Item 
                            title='New Pharmacy Purchase' 
                            to="/pharmacy-purchase/create" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                        <Item 
                            title='All Pharmacy Purchase' 
                            to="/pharmacy-purchase" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                    </SubMenu>
                    <SubMenu label="Pharmacy Vendor">
                        <Item 
                            title='New Pharmacy Vendor' 
                            to="/pharmacy-vendor/create" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                        <Item 
                            title='All Pharmacy Vendor' 
                            to="/pharmacy-vendor" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                    </SubMenu>
                    <SubMenu label="Pharmacy Invoice">
                        <Item 
                            title='New Pharmacy Invoice' 
                            to="/pharmacy-invoice/create" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                        <Item 
                            title='All Pharmacy Invoice' 
                            to="/pharmacy-invoice" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                    </SubMenu>
                    <SubMenu label="Drug">
                        <Item 
                            title='New Drug' 
                            to="/drug/create" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                        <Item 
                            title='All Drug' 
                            to="/drug" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                    </SubMenu>
                    <SubMenu label="Notice">
                        <Item 
                            title='New Notice' 
                            to="/notice/create" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                        <Item 
                            title='All Notice' 
                            to="/notice" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                    </SubMenu>
                    {/* <MenuItem>Sample Collection</MenuItem> */}
                        <Item 
                            title='Sample Collection' 
                            to="/invoice/sample-collection" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                    {/* <MenuItem>Report Management</MenuItem> */}
                        <Item 
                            title='Report Management' 
                            to="/invoice/report" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                    <SubMenu label="Report">
                        <Item 
                            title='IPD Report' 
                            to="/report/ipd" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                        <Item 
                            title='Outdoor Report' 
                            to="/report/outdoor" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                        <Item 
                            title='Pharmacy Report' 
                            to="/report/pharmacy" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                        <Item 
                            title='P. Inventory Report' 
                            to="/report/pharmacy-inventory" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                        <Item 
                            title='Appointment Report' 
                            to="/report/appointment" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                        <Item 
                            title='Referral Report' 
                            to="/report/referral" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                        <Item 
                            title='Investigation (inv) Report' 
                            to="/report/investigation-invoice-wise" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                        <Item 
                            title='Investigation (status) Report' 
                            to="/report/investigation-status-wise" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                        <Item 
                            title='Investigation (ref.) Report' 
                            to="/report/investigation-referral" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                        <Item 
                            title='Admissions by Doctor Report' 
                            to="/report/admission-by-doctor" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                        <Item 
                            title='Income Report' 
                            to="/report/income" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                        <Item 
                            title='Expense Report' 
                            to="/report/expense" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                        <Item 
                            title='Overview Report' 
                            to="/report/overview" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                        <Item 
                            title='Growth Report' 
                            to="/report/growth" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                        <Item 
                            title='Profit/Loss Report' 
                            to="/report/profit-loss" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                    </SubMenu>
                    <SubMenu label="User">
                        <Item 
                            title='New User' 
                            to="/user/create" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                        <Item 
                            title='Active User' 
                            to="/user/active" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                        <Item 
                            title='Pending User' 
                            to="/user/pending" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                        <Item 
                            title='Banned User' 
                            to="/user/banned" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                        <Item 
                            title='All User' 
                            to="/user/" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                    </SubMenu>
                    <SubMenu label="Human Resources">
                        <Item 
                            title='Employees' 
                            to="/employee" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                        <Item 
                            title='Attendance' 
                            to="/attendance/today" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                        <Item 
                            title='Leave' 
                            to="/hrleave" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                        <Item 
                            title='Shift' 
                            to="/shift" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                        <Item 
                            title='Loan' 
                            to="/hrloan" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                        <Item 
                            title='Pay' 
                            to="/paygrade" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                        <Item 
                            title='Payroll' 
                            to="/payroll" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                        <Item 
                            title='Holidays' 
                            to="/holiday" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                    </SubMenu>
                    <SubMenu label="Setting">
                        <Item 
                            title='Hospital Setting' 
                            to="/setting" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                        <Item 
                            title='IPD/Indoor Setting' 
                            to="/setting" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                        <Item 
                            title='Outdoor Setting' 
                            to="/setting" 
                            icon={<i className='bx bxs-tachometer bx-sm bx-tada-hover'></i>} 
                            selected={selected} 
                            setSelected={setSelected}/>
                    </SubMenu>
                    <SubMenu label="System">
                        <MenuItem> Backup </MenuItem>
                        <MenuItem> Totem </MenuItem>
                        <MenuItem> Horizon </MenuItem>
                        <MenuItem> Logs </MenuItem>
                    </SubMenu>
                </Menu>

            </Sidebar>
        </ProSidebarProvider>
    );
};

export default MySidebar;