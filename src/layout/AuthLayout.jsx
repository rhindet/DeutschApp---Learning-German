import React from 'react'
import Header from '../components/Header'
import {Outlet} from 'react-router-dom' 
const AuthLayout = () => {
  return (
    <div>
       <Header/>
      <main className='m-3'>
         <Outlet/>
      </main>
    </div>
  )
}

export default AuthLayout
