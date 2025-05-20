import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import SignUpPage from './pages/SIgnUpPage'
import {Routes , Route, Navigate} from 'react-router-dom'
import HomePage from './pages/HomePage'
import LogInPage from './pages/LogInPage'
import ProfilePage from './pages/ProfilePage'
import SettingPage from './pages/SettingPage'
import { useAuthStore } from './store/useAuthStore'
import {Loader} from 'lucide-react'

const App = () => {

  const {authUser , checkAuth , isCheckingAuth} = useAuthStore()

  useEffect(() => {   
      checkAuth()
  } , [authUser])

  console.log({authUser});

  if(isCheckingAuth && !authUser) return (
    <div className='flex items-center justify-center h-screen'>
        <Loader className='size-10 animate-spin'/>
    </div>
  ) 

  return (
      <div>
        <Navbar/>

        <Routes>
          <Route path='/' element={authUser ? <HomePage/> : <Navigate to='/login'/>}/>
          <Route path='/profile' element={authUser ? <ProfilePage/> : <Navigate to='/login'/>}/>
          <Route path='/signup' element={!authUser ? <SignUpPage/> : <Navigate to='/'/>}/>
          <Route path='/login' element={!authUser ? <LogInPage/> : <Navigate to='/'/>}/>
          <Route path='/setting' element={<SettingPage/>}/>
        </Routes>
      </div>
  )   
}

export default App