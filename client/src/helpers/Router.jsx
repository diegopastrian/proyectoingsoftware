
import React, { useContext } from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import { Dashboard, Inicio, Login, Register, Logout} from '../pages'
import { UserContext } from '../../context/userContext'

export const Router = () => {

  const { user } = useContext(UserContext);
  
  return (
    <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path = '/logout' element = { <Logout/>}/>
        {user ? (<Route path='/dashboard' element={<Dashboard />} />) : (
        <Route path='/dashboard' element={<Navigate to='/login' replace />}/>
        )}
    </Routes>
  )
}
