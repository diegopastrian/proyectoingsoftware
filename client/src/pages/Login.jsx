
import React, { useContext, useState } from 'react';
import axios from 'axios';
import {toast} from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'
import { UserContext } from '../../context/userContext';

export const Login = () => {
  
  const navigate = useNavigate();
  
  const [data, setData] = useState({  
    name: '',
    email: '',
    password: '',
  })
  const { user, setuser } = useContext(UserContext);
  console.log(user);
  const loginUser = async(e) => {
    e.preventDefault()
    const {email, password} = data;
    try {
      
      const {data} = await axios.post('/login',{
        email, password
      });
      if(data.error){
        toast.error(data.error)
      } else {
        setData({});
        setuser(data);
        toast.success('Ingreso exitoso.');
        navigate('/Dashboard');
      }

    } catch (error) {
      
    }
  }

  return (
    <form className="max-w-sm mx-auto mt-12 flex flex-col w-96 p-6 shadow-lg bgwhite dark:bg-slate-900 rounded-md" onSubmit={loginUser} >
      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
        <input 
          type='text' 
          placeholder='Correo...' 
          value={data.email} 
          onChange={(e)=> setData({...data, email:e.target.value})}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div className="mb-5">
        <label label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>

        <input 
          type='password' 
          placeholder='Contraseña...' 
          value={data.password} 
          onChange= { (e)=> setData({...data, password:e.target.value})} 
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />

      </div>
      <button type='submit' className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Ingresar</button>
    </form>

  )
}
