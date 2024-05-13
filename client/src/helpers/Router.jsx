
import React, { useContext } from 'react'
import {Route, Routes} from 'react-router-dom'
import { Dashboard, Inicio, Login, Register } from '../pages'
import { UserContext } from '../../context/userContext'

export const Router = () => {

  const { user } = useContext(UserContext);

  return (
    <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        {user && <Route path='/dashboard' element={<Dashboard/>}/>}
    </Routes>
  )
}
