
import React, { useContext } from 'react'
import { UserContext } from '../../context/userContext'

export const Dashboard = () => {
    const {user} = useContext(UserContext); //para llamar al usuario logeado.
    console.log(user);
  return (
    <>
        <h1>Dashboard</h1>
        {!!user && <h1>Hola {user.name}!</h1>}
    </>
  )
}
