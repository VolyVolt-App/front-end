import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
//import axios from 'axios'

export const AuthContext= createContext()

export const AuthContextProvider = ({children}) => {

    //const CHECK_USER_ENDPOINT= 'https://127.0.0.1:8000/user'
    
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

     /* //set expiration Time for one hour from current time expirationTime ||   
      const expiration = new Date(new Date().setHours(new Date().getHours()+2))
      setTokenExpirationTime(expiration)*/
      

      //save everything in local storage
      localStorage.setItem(
        'userData' , 
        JSON.stringify({
          user,
          token,
          roles
          //isAuthenticated,
      //    expirationTime: expiration
        }) 
      )
      navigate('/home')
  }

  //on reload check if the user is still logged in in server
  const reload = (user,token,roles) => {
    
    setUser(user)
    setToken(token)
    setRoles(roles)
    setAuthenticated(true)

  }

  const handleLogout = () => {
   /*axios.post(LOGOUT_ENDPOINT)
    .then(resp => {
      setUser(null)
      setAuthenticated(false)
      localStorage.removeItem('userData')

    })
    .catch(error => {
      console.log(error)
    })*/
      setUser(null)
      setToken(null)
      setAuthenticated(false)
      setRoles(null)
      localStorage.removeItem('userData')
      //console.log(auth)
  }

  
      //when the user reload the page 
      useEffect(()=>{
        const storedData = JSON.parse(localStorage.getItem('userData'))
        console.log('reload', storedData)
       // if(storedData && storedData.token && new Date(storedData.expirationTime) > new Date()){
        if(storedData && storedData.token && storedData.roles){
          reload(storedData.user, storedData.token, storedData.roles) 
         // handleLogin(storedData.user, storedData.token, storedData.expirationTime)
        }
        console.log('use effect [auth contextjs]')
        //reload()
      }, [])

/*
      //set the timer if the expiration time is in future otherwise we clear the timer here
      useEffect(() => {
        if( token && tokenExpirationTime){
          const remainingTime = tokenExpirationTime.getTime() - new Date().getTime()
          logoutTimer = setTimeout(handleLogout, remainingTime)
        } else {
          clearTimeout(logoutTimer)
        }
      },[token, handleLogout, tokenExpirationTime]) */
   return (
     <AuthContext.Provider value={{user,token,isAuthenticated,handleLogin,handleLogout,roles}}>
         {children}
     </AuthContext.Provider>
   )
}