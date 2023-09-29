import React from 'react'
import axios from 'axios'
import { ENDPOINT } from './BaseUrl'

// used in login to fech user
export const instance = (token) => axios.create({   
    baseURL: ENDPOINT,   
    //timeout: 1000,   
    headers :{ 
        'authorization': 'Bearer ' + token 
    } 
})


export const RequestWithAuth = () => {
    
 //const instance = (token) => axios.create({   baseURL: ENDPOINT,   timeout: 1000,   headers :{ 'authorization': 'Bearer ' + token } })
 return null
    
}

//used to post depot
export const postInstanceWithAuth = (token,dataForm) => axios.create(
    {
            baseURL: ENDPOINT,   
            timeout: 1000,   
            headers :{ 
                'authorization': 'Bearer ' + token,
                'content-type' : 'application/json' 
            },
            transformRequest: dataForm => dataForm 
    
    })

export const postInstance = (dataForm) => axios.create(
        {
                baseURL: ENDPOINT,   
                timeout: 1000,   
                headers :{ 
                    'content-type' : 'application/json' 
                },
                transformRequest: dataForm => dataForm 
        
        })   
       
   

   /*{
                headers : {
                  'content-type' : 'application/json'
                } ,

                ,//to solve axios issue
              }*/
