import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from './useAuth'
import { useState } from 'react'

export const RequireAuth = ({allowedRoles}) => {

    const auth = useAuth()

    const role = auth.roles.find(role => allowedRoles?.includes(role))

    
    const location = useLocation()
    console.log(location)

    //const isThereString = (str) => str ? true: false
    // console.log(allowedRoles?.includes(auth.roles))
    // console.log(isThereString(auth?.roles?.find(role => allowedRoles?.includes(role))))
     /*return (
       isRole
           ? <Outlet/>
           : auth?.user
               ? <Navigate to='/unauthorized' state={{from: location}} replace />
               : <Navigate to='/login' state={{from: location}} replace />
     )*/
     /*if(isThereString(auth?.roles?.find(role => allowedRoles?.includes(role)))){
       return <Outlet/>
     }
     else //if( ! isThereString(auth?.roles?.find(role => allowedRoles?.includes(role))))
     {
       return <Navigate to='/login' state={{from: location}} replace/>
     }*/
  
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
}
