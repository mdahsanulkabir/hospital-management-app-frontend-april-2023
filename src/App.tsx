import { Routes, Route } from 'react-router-dom'
import Login from './app/global/Login'
import Layout from './app/global/Layout'
import Dashboard from './app/pages/dashboard/Dashboard'
import NewInvoice from './app/pages/outdoorInvoice/NewInvoice'
import AllOutdoorInvoice from './app/pages/outdoorInvoice/AllOutdoorInvoice'
import IPD_NewAdmission from './app/pages/ipdAdmission/IPD_NewAdmission'
import IPD_DraftAdmission from './app/pages/ipdAdmission/IPD_DraftAdmission'
import IPD_FinalAdmission from './app/pages/ipdAdmission/IPD_FinalAdmission'
import IPD_AllAdmission from './app/pages/ipdAdmission/IPD_AllAdmission'
import Finance_NewIncome from './app/pages/finance/Finance_NewIncome'
import Finance_NewExpense from './app/pages/finance/Finance_NewExpense'
import Finance_IPDIncome from './app/pages/finance/Finance_IPDIncome'
import Finance_OutdoorIncome from './app/pages/finance/Finance_OutdoorIncome'
import Finance_PharmacyIncome from './app/pages/finance/Finance_PharmacyIncome'
import Finance_IPDExpense from './app/pages/finance/Finance_IPDExpense'
import Finance_OutdoorExpense from './app/pages/finance/Finance_OutdoorExpense'
import Finance_PharmacyExpense from './app/pages/finance/Finance_PharmacyExpense'
import Finance_AllIncome from './app/pages/finance/Finance_AllIncome'
import Finance_AllExpense from './app/pages/finance/Finance_AllExpense'
import Finance_AllRecord from './app/pages/finance/Finance_AllRecord'
import Patient_NewPatient from './app/pages/patient/Patient_NewPatient'
import Patient_ActivePatient from './app/pages/patient/Patient_ActivePatient'
import Patient_BannedPatient from './app/pages/patient/Patient_BannedPatient'
import Patient_AllPatient from './app/pages/patient/Patient_AllPatient'
import NewInvestigation from './app/pages/investigation/NewInvestigation'
import AllInvestigation from './app/pages/investigation/AllInvestigation'
import Equipment from './app/pages/investigation/Equipment'
import IPD_NewService from './app/pages/ipdService/IPD_NewService'
import IPD_AllIPDService from './app/pages/ipdService/IPD_AllIPDService'
import IPD_ServiceType from './app/pages/ipdService/IPD_ServiceType'
import NewSeat from './app/pages/seat/NewSeat'
import AllSeat from './app/pages/seat/AllSeat'
import NewInvestigationPackage from './app/pages/investigationPackage/NewInvestigationPackage'
import AllInvestigationPackage from './app/pages/investigationPackage/AllInvestigationPackage'
import NewAppointment from './app/pages/appointment/NewAppointment'
import AllAppointment from './app/pages/appointment/AllAppointment'
import NewDoctor from './app/pages/doctor/NewDoctor'
import ActiveDoctor from './app/pages/doctor/ActiveDoctor'
import InactiveDoctor from './app/pages/doctor/InactiveDoctor'
import AllDoctor from './app/pages/doctor/AllDoctor'
import NewPrescription from './app/pages/prescription/NewPrescription'
import AllPrescription from './app/pages/prescription/AllPrescription'
import NewDepartment from './app/pages/department/NewDepartment'
import AllDepartment from './app/pages/department/AllDepartment'
import NewPharmacy from './app/pages/pharmacy/NewPharmacy'
import AllPharmacy from './app/pages/pharmacy/AllPharmacy'
import NewPharmacyInventory from './app/pages/pharmacyInventory/NewPharmacyInventory'
import AllPharmacyInventory from './app/pages/pharmacyInventory/AllPharmacyInventory'
import NewPharmacyPurchase from './app/pages/pharmacyPurchase/NewPharmacyPurchase'
import AllPharmacyPurchase from './app/pages/pharmacyPurchase/AllPharmacyPurchase'
import NewPharmacyVendor from './app/pages/pharmacyVendor/NewPharmacyVendor'
import AllPharmacyVendor from './app/pages/pharmacyVendor/AllPharmacyVendor'
import NewPharmacyInvoice from './app/pages/pharmacyInvoice/NewPharmacyInvoice'
import AllPharmacyInvoice from './app/pages/pharmacyInvoice/AllPharmacyInvoice'
import NewDrug from './app/pages/drug/NewDrug'
import AllDrug from './app/pages/drug/AllDrug'
import NewNotice from './app/pages/notice/NewNotice'
import AllNotice from './app/pages/notice/AllNotice'
import SampleCollection from './app/pages/sampleCollection/SampleCollection'
import ReportManagement from './app/pages/reportManagement/ReportManagement'
import IPDReport from './app/pages/report/IPDReport'
import OutdoorReport from './app/pages/report/OutdoorReport'
import PharmacyReport from './app/pages/report/PharmacyReport'
import PharmacyInventoryReport from './app/pages/report/PharmacyInventoryReport'
import AppointmentReport from './app/pages/report/AppointmentReport'
import ReferralReport from './app/pages/report/ReferralReport'
import Investigation_inv_Report from './app/pages/report/Investigation_inv_Report'
import Investigation_Status_Report from './app/pages/report/Investigation_Status_Report'
import Investigation_Ref_Report from './app/pages/report/Investigation_Ref_Report'
import AdmissionByDoctorReport from './app/pages/report/AdmissionByDoctorReport'
import IncomeReport from './app/pages/report/IncomeReport'
import ExpenseReport from './app/pages/report/ExpenseReport'
import OverviewReport from './app/pages/report/OverviewReport'
import GrowthReport from './app/pages/report/GrowthReport'
import ProfitLossReport from './app/pages/report/ProfitLossReport'
import NewUser from './app/pages/user/NewUser'
import ActiveUser from './app/pages/user/ActiveUser'
import PendingUser from './app/pages/user/PendingUser'
import BannedUser from './app/pages/user/BannedUser'
import AllUser from './app/pages/user/AllUser'
import Employees from './app/pages/humanResources/Employees'
import Attendance from './app/pages/humanResources/Attendance'
import Leave from './app/pages/humanResources/Leave'
import Shift from './app/pages/humanResources/Shift'
import Loan from './app/pages/humanResources/Loan'
import PayGrade from './app/pages/humanResources/PayGrade'
import Payroll from './app/pages/humanResources/Payroll'
import Holidays from './app/pages/humanResources/Holidays'
import HospitalSetting from './app/pages/setting/HospitalSetting'

function App() {


  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/' element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path='invoice/create' element={<NewInvoice />} />
        <Route path='invoice' element={<AllOutdoorInvoice />} />
        <Route path='admission/create' element={<IPD_NewAdmission />} />
        <Route path='admission/draft' element={<IPD_DraftAdmission />} />
        <Route path='admission/final' element={<IPD_FinalAdmission />} />
        <Route path='admission' element={<IPD_AllAdmission />} />
        {/* <Route path='finance/create' element={<Finance_NewIncome />} />   // create income or expense */}
        <Route path='finance/create/income' element={<Finance_NewIncome />} />
        <Route path='finance/create/expense' element={<Finance_NewExpense />} />
        <Route path='finance/ipd-income' element={<Finance_IPDIncome />} />
        <Route path='finance/opd-income' element={<Finance_OutdoorIncome />} />
        <Route path='finance/pharmacy-income' element={<Finance_PharmacyIncome />} />
        <Route path='finance/ipd-expense' element={<Finance_IPDExpense />} />
        <Route path='finance/opd-expense' element={<Finance_OutdoorExpense />} />
        <Route path='finance/pharmacy-expense' element={<Finance_PharmacyExpense />} />
        <Route path='finance/all-income' element={<Finance_AllIncome />} />
        <Route path='finance/all-expense' element={<Finance_AllExpense />} />
        <Route path='finance' element={<Finance_AllRecord />} />
        <Route path='patient/create' element={<Patient_NewPatient />} />
        <Route path='patient/active' element={<Patient_ActivePatient />} />
        <Route path='patient/banned' element={<Patient_BannedPatient />} />
        <Route path='patient' element={<Patient_AllPatient />} />
        <Route path='investigation/create' element={<NewInvestigation />} />
        <Route path='investigation' element={<AllInvestigation />} />
        <Route path='equipment' element={<Equipment />} />
        <Route path='service/create' element={<IPD_NewService />} />
        <Route path='service' element={<IPD_AllIPDService />} />
        <Route path='service-type' element={<IPD_ServiceType />} />
        <Route path='seat/create' element={<NewSeat />} />
        <Route path='seat' element={<AllSeat />} />
        <Route path='investigation/package' element={<NewInvestigationPackage />} />
        <Route path='investigation' element={<AllInvestigationPackage />} />
        <Route path='appointment/create' element={<NewAppointment />} />
        <Route path='appointment' element={<AllAppointment />} />
        <Route path='doctor/create' element={<NewDoctor />} />
        <Route path='doctor/active' element={<ActiveDoctor />} />
        <Route path='doctor/inactive' element={<InactiveDoctor />} />
        <Route path='doctor' element={<AllDoctor />} />
        <Route path='prescription/create' element={<NewPrescription />} />
        <Route path='prescription' element={<AllPrescription />} />
        <Route path='department/create' element={<NewDepartment />} />
        <Route path='department' element={<AllDepartment />} />
        <Route path='pharmacy/create' element={<NewPharmacy />} />
        <Route path='pharmacy' element={<AllPharmacy />} />
        <Route path='pharmacy-inventory/create' element={<NewPharmacyInventory />} />
        <Route path='pharmacy-inventory' element={<AllPharmacyInventory />} />
        <Route path='pharmacy-purchase/create' element={<NewPharmacyPurchase />} />
        <Route path='pharmacy-purchase' element={<AllPharmacyPurchase />} />
        <Route path='pharmacy-vendor/create' element={<NewPharmacyVendor />} />
        <Route path='pharmacy-vendor' element={<AllPharmacyVendor />} />
        <Route path='pharmacy-invoice/create' element={<NewPharmacyInvoice />} />
        <Route path='pharmacy-invoice' element={<AllPharmacyInvoice />} />
        <Route path='drug/create' element={<NewDrug />} />
        <Route path='drug' element={<AllDrug />} />
        <Route path='notice/create' element={<NewNotice />} />
        <Route path='notice' element={<AllNotice />} />
        <Route path='invoice/sample-collection' element={<SampleCollection />} />
        <Route path='invoice/report' element={<ReportManagement />} />
        <Route path='report/ipd' element={<IPDReport />} />
        <Route path='report/outdoor' element={<OutdoorReport />} />
        <Route path='report/pharmacy' element={<PharmacyReport />} />
        <Route path='report/pharmacy-inventory' element={<PharmacyInventoryReport />} />
        <Route path='report/appointment' element={<AppointmentReport />} />
        <Route path='report/referral' element={<ReferralReport />} />
        <Route path='report/investigation-invoice-wise' element={<Investigation_inv_Report />} />
        <Route path='report/investigation-status-wise' element={<Investigation_Status_Report />} />
        <Route path='report/investigation-referral' element={<Investigation_Ref_Report />} />
        <Route path='report/admission-by-doctor' element={<AdmissionByDoctorReport />} />
        <Route path='report/income' element={<IncomeReport />} />
        <Route path='report/expense' element={<ExpenseReport />} />
        <Route path='report/overview' element={<OverviewReport />} />
        <Route path='report/growth' element={<GrowthReport />} />
        <Route path='report/profit-loss' element={<ProfitLossReport />} />
        <Route path='user/create' element={<NewUser />} />
        <Route path='user/active' element={<ActiveUser />} />
        <Route path='user/pending' element={<PendingUser />} />
        <Route path='user/banned' element={<BannedUser />} />
        <Route path='user' element={<AllUser />} />
        
        <Route path='employee' element={<Employees />} />
        {/* <Route path='employee/create' element={<Employees />} />  //create employee */}
        <Route path='attendance/today' element={<Attendance />} />
        {/* <Route path='attendance/report' element={<Attendance />} />  //other reports */}
        <Route path='hrleave' element={<Leave />} />
        {/* <Route path='hrleave/create' element={<Leave />} /> //new hr leave */}
        <Route path='shift' element={<Shift />} />
        {/* <Route path='shift/create' element={<Shift />} /> // new shift */}
        <Route path='hrloan' element={<Loan />} />
        {/* <Route path='hrloan/create' element={<Loan />} />  // new hr loan */}
        <Route path='paygrade' element={<PayGrade />} />
        {/* <Route path='paygrade' element={<PayGrade />} />   // new pay grade */}
        <Route path='payroll' element={<Payroll />} />
        {/* <Route path='payroll/sync' element={<Payroll />} />   //payroll sync */}
        <Route path='holiday' element={<Holidays />} />
        {/* <Route path='holiday/create' element={<Holidays />} />  // add new holiday */}
        <Route path='setting' element={<HospitalSetting />} />
      </Route>
      
      
    </Routes>
  )
}

export default App
