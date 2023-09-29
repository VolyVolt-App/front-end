import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
//import axios from 'axios'

export const AuthContext= createContext()

export const AuthContextProvider = ({children}) => {

    
    const [user,setUser] = useState(null)
    const [token,setToken] = useState(null)
    const [roles,setRoles] = useState(null)//resp.data.roles
    const [isAuthenticated, setAuthenticated] = useState(false)

    const navigate = useNavigate()
// end test

    const handleLogin = (user,token,roles) => {
     
      console.log('authcontext',user)

      setUser(user)
      setToken(token)
      setRoles(roles)
      setAuthenticated(true)

      

      //save everything in local storage
      localStorage.setItem(
        'userData' , 
        JSON.stringify({
          user,
          token,
          roles
        }) 
      )
      navigate('/admin')
  }

  //on reload check if the user is still logged in in server
  const reload = (user,token,roles) => {
    
    setUser(user)
    setToken(token)
    setRoles(roles)
    setAuthenticated(true)

  }

  const handleLogout = () => {
   
      setUser(null)
      setToken(null)
      setAuthenticated(false)
      setRoles(null)
      localStorage.removeItem('userData')
      navigate('/login')
      
  }

  
      //when the user reload the page 
      useEffect(()=>{
        const storedData = JSON.parse(localStorage.getItem('userData'))
        console.log('reload', storedData)

        if(storedData && storedData.token && storedData.roles){
          reload(storedData.user, storedData.token, storedData.roles) 
        }
        
      }, [])

   return (
     <AuthContext.Provider value={{user,token,isAuthenticated,handleLogin,handleLogout,roles}}>
         {children}
     </AuthContext.Provider>
   )
}