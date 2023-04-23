import { Routes, Route } from 'react-router-dom'
import Login from './app/global/Login'
import Layout from './app/global/Layout'
import Dashboard from './app/pages/dashboard/Dashboard'
import NewInvoice from './app/pages/outdoorInvoice/NewInvoice'
import AllOutdoorInvoice from './app/pages/outdoorInvoice/AllOutdoorInvoice'

function App() {


  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/' element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path='invoice/create' element={<NewInvoice />} />
        <Route path='invoice' element={<AllOutdoorInvoice />} />
      </Route>
      
      
    </Routes>
  )
}

export default App
