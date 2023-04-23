import { Routes, Route } from 'react-router-dom'
import Login from './app/global/Login'
import Layout from './app/global/Layout'

function App() {


  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/layout' element={<Layout />} />
      
      
    </Routes>
  )
}

export default App
