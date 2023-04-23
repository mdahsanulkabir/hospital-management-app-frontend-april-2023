import  { 
    ProSidebarProvider,
    Sidebar, Menu, MenuItem, SubMenu, useProSidebar, sidebarClasses, menuClasses
}  from 'react-pro-sidebar'

const MySidebar = () => {
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
                        color: 'red',
                    },
                  }}
            >
                <Menu color='#3699ff'>
                    <MenuItem> Dashboard </MenuItem>
                    <SubMenu label="Outdoor Invoice">
                        <MenuItem> New Invoice </MenuItem>
                        <MenuItem> All Invoice </MenuItem>
                    </SubMenu>
                    <SubMenu label="IPD Admission">
                        <MenuItem> New Admission </MenuItem>
                        <MenuItem> Draft Admission </MenuItem>
                        <MenuItem> Final Admission </MenuItem>
                        <MenuItem> All Admission </MenuItem>
                    </SubMenu>
                    <SubMenu label="Finance">
                        <MenuItem> New Income </MenuItem>
                        <MenuItem> New Expense </MenuItem>
                        <MenuItem> IPD Income </MenuItem>
                        <MenuItem> Outdoor Income </MenuItem>
                        <MenuItem> Pharmacy Income </MenuItem>
                        <MenuItem> IPD Expense </MenuItem>
                        <MenuItem> Outdoor Expense </MenuItem>
                        <MenuItem> Pharmacy Expense </MenuItem>
                        <MenuItem> All Income </MenuItem>
                        <MenuItem> All Expense </MenuItem>
                        <MenuItem> All Record </MenuItem>
                    </SubMenu>
                    <SubMenu label="Patient">
                        <MenuItem> New Patient </MenuItem>
                        <MenuItem> Active Patient </MenuItem>
                        <MenuItem> Banned Patient </MenuItem>
                        <MenuItem> All Patient </MenuItem>
                    </SubMenu>
                    <SubMenu label="Investigation">
                        <MenuItem> New Investigation </MenuItem>
                        <MenuItem> All Investigation </MenuItem>
                        <MenuItem> Equipment </MenuItem>
                    </SubMenu>
                    <SubMenu label="IPD Service">
                        <MenuItem> New Service </MenuItem>
                        <MenuItem> All IPD Service </MenuItem>
                        <MenuItem> IPD Service Type </MenuItem>
                    </SubMenu>
                    <SubMenu label="Seat">
                        <MenuItem> New Seat </MenuItem>
                        <MenuItem> All Seat </MenuItem>
                    </SubMenu>
                    <SubMenu label="Investigation Package">
                        <MenuItem> New Package </MenuItem>
                        <MenuItem> All Package </MenuItem>
                    </SubMenu>
                    <SubMenu label="Appointment">
                        <MenuItem> New Appointment </MenuItem>
                        <MenuItem> All Appointment </MenuItem>
                    </SubMenu>
                    <SubMenu label="Doctor">
                        <MenuItem> New Doctor </MenuItem>
                        <MenuItem> Active Doctor </MenuItem>
                        <MenuItem> Inactive Doctor </MenuItem>
                        <MenuItem> All Doctor </MenuItem>
                    </SubMenu>
                    <SubMenu label="Prescription">
                        <MenuItem> New Prescription </MenuItem>
                        <MenuItem> All Prescription </MenuItem>
                    </SubMenu>
                    <SubMenu label="Department">
                        <MenuItem> New Department </MenuItem>
                        <MenuItem> All Department </MenuItem>
                    </SubMenu>
                    <SubMenu label="Pharmacy">
                        <MenuItem> New Pharmacy </MenuItem>
                        <MenuItem> All Pharmacy </MenuItem>
                    </SubMenu>
                    <SubMenu label="Pharmacy Inventory">
                        <MenuItem> New Pharmacy Inventory </MenuItem>
                        <MenuItem> All Pharmacy Inventory </MenuItem>
                    </SubMenu>
                    <SubMenu label="Pharmacy Purchase">
                        <MenuItem> New Pharmacy Purchase </MenuItem>
                        <MenuItem> All Pharmacy Purchase </MenuItem>
                    </SubMenu>
                    <SubMenu label="Pharmacy Vendor">
                        <MenuItem> New Pharmacy Vendor </MenuItem>
                        <MenuItem> All Pharmacy Vendor </MenuItem>
                    </SubMenu>
                    <SubMenu label="Pharmacy Invoice">
                        <MenuItem> New Pharmacy Invoice </MenuItem>
                        <MenuItem> All Pharmacy Invoice </MenuItem>
                    </SubMenu>
                    <SubMenu label="Drug">
                        <MenuItem> New Drug </MenuItem>
                        <MenuItem> All Drug </MenuItem>
                    </SubMenu>
                    <SubMenu label="Notice">
                        <MenuItem> New Notice </MenuItem>
                        <MenuItem> All Notice </MenuItem>
                    </SubMenu>
                    <MenuItem>Sample Collection</MenuItem>
                    <MenuItem>Report Management</MenuItem>
                    <SubMenu label="Report">
                        <MenuItem> IPD Report </MenuItem>
                        <MenuItem> Outdoor Report </MenuItem>
                        <MenuItem> Pharmacy Report </MenuItem>
                        <MenuItem> P. Inventory Report </MenuItem>
                        <MenuItem> Appointment Report </MenuItem>
                        <MenuItem> Referral Report </MenuItem>
                        <MenuItem> Investigation (inv) Report </MenuItem>
                        <MenuItem> Investigation (status) Report </MenuItem>
                        <MenuItem> Investigation (ref.) Report </MenuItem>
                        <MenuItem> Admissions by Doctor Report </MenuItem>
                        <MenuItem> Income Report </MenuItem>
                        <MenuItem> Expense Report </MenuItem>
                        <MenuItem> Overview Report </MenuItem>
                        <MenuItem> Growth Report </MenuItem>
                        <MenuItem> Profit/Loss Report </MenuItem>
                    </SubMenu>
                    <SubMenu label="User">
                        <MenuItem> New User </MenuItem>
                        <MenuItem> Active User </MenuItem>
                        <MenuItem> Pending User </MenuItem>
                        <MenuItem> Banned User </MenuItem>
                        <MenuItem> All User </MenuItem>
                    </SubMenu>
                    <SubMenu label="Human Resources">
                        <MenuItem> Employees </MenuItem>
                        <MenuItem> Attendance </MenuItem>
                        <MenuItem> Leave </MenuItem>
                        <MenuItem> Shift </MenuItem>
                        <MenuItem> Loan </MenuItem>
                        <MenuItem> Pay Grade </MenuItem>
                        <MenuItem> Payroll </MenuItem>
                        <MenuItem> Holidays </MenuItem>
                    </SubMenu>
                    <SubMenu label="Setting">
                        <MenuItem> Hospital Setting </MenuItem>
                        <MenuItem> IPD/Indoor Setting </MenuItem>
                        <MenuItem> Outdoor Setting </MenuItem>
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