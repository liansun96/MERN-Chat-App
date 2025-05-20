import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import SignUpPage from './pages/SIgnUpPage'
import {Routes , Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import LogInPage from './pages/LogInPage'
import ProfilePage from './pages/ProfilePage'
import SettingPage from './pages/SettingPage'
import { useAuthStore } from './store/useAuthStore'

const App = () => {

  const {authUser , checkAuth} = useAuthStore()

  useEffect(() => {   
      checkAuth()
  } , [authUser])

  console.log({authUser});
  

  return (
      <div>
        <Navbar/>

        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/signup' element={<SignUpPage/>}/>
          <Route path='/login' element={<LogInPage/>}/>
          <Route path='/profile' element={<ProfilePage/>}/>
          <Route path='/setting' element={<SettingPage/>}/>
        </Routes>
      </div>
  )
}

export default App