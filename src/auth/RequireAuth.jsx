import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from './useAuth'
import { useState } from 'react'

export const RequireAuth = ({allowedRoles}) => {

    const auth = useAuth()
    //const [isAuth,setAuth] = useState(true)

   // console.log(allowedRoles)

    //const roless = ['ADMIN','USER']

//    const feno = auth?.roles?.find(role => allowedRoles?.includes(role))

    const role = auth.roles.find(role => allowedRoles?.includes(role))

   // const role =roless.find(role => allowedRoles.includes(role))

   // console.log('role',role)
    
    const location = useLocation()
    console.log(location)
  
  return (
    <>
    { auth.isAuthenticated ?
        role?
          <Outlet/>
          :
          <div>unotorezed</div>
        :
        <Navigate to='/login' state={{from: location}} replace/>
    }
    </>
  )
 /* return(
    <Outlet/>
  )*/
}
