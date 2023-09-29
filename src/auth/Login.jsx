import { Box, Button, Grid, TextField } from '@mui/material'
import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { ENDPOINT } from '../services/BaseUrl'
import { LoadingSpinner } from '../component/Utils/modal/LoadingSpinner'
import { useState } from 'react'
import { ModalError } from '../component/Utils/modal/ModalError'
import { instance } from '../services/RequestWithAuth'
import { useAuth } from './useAuth'
//import { ReactComponent as logo } from '../asset/logo/volivolt-logo.svg'

export const Login = () => {

  const [isLoading,setIsLoading] = useState(false)
  const [error, setError] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)

    const auth = useAuth()
   // const navigate = useNavigate()
    const user = new Object()

  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data) => {
      setIsLoading(true)
      console.log('starting login')

      axios.post(ENDPOINT+'api/login_check',{
        email:data.email,
        password:data.password
      
      })
      .then(resp => {
        if(resp.data){
          const token = resp.data.token
          console.log(token)
          console.log('logged')
          getUser(token)
          //auth.handleLogin(token,user)
          //navigate('/')
        }
    })
    .catch(err => {
      setIsLoading(false)
      console.log(err)
      setErrorMessage('Mauvais mot de passe ou email')
      setError(true)
      console.log('Mauvais mot de passe ou email')
    })
  }

  const getUser = (token) => {
    instance(token).get('api/user')
    .then( resp => {
    //console.log('axios reload [auth contextjs]',resp)
    //user.id=resp.data.id
    user.username=resp.data.username
    
    //user.token=token
    //console.log('token',token)
    setIsLoading(false)
    console.log('user',user)

    auth.handleLogin(user,token, resp.data.roles)
  })
  .catch( err => {
    //if(error.response.status===401){
      if (err.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log('that falls out of the range of 2xx')
        console.log(err.response.data)
        console.log(err.response.status)
        console.log(err.response.headers)

        setIsLoading(false)
        setErrorMessage('il y a erreur, refresh')
        setError(true)


      } else if (err.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log('efa authetifier fa @getUser misi olana')
        console.log('The request was made but no response was received')
        console.log(err.request)
        
        setIsLoading(false)
        setErrorMessage('il y a erreur, refresh')
        setError(true)
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Something happened in setting up the request that triggered an Error');

        console.log('Error', err.message)
      }
      console.log(err.config)
    
    console.log('failed to get the pong result')
  })
}

  

  return (
    <Box width={'100%'} height={'100vh'} sx={{/*backgroundColor: '#082D0E'*/}}>
      {isLoading && <LoadingSpinner/>}
      {error && <ModalError open={error} message={errorMessage} handleClose={()=>setError(false)}/>}
      
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Grid container justifyContent={'center'}>
      
        <Grid item xs={12} md={6} lg={4} display={'flex'} flexDirection={'column'}>
          <Box sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center'
          }}>
            <Box
              component={'img'}
              sx={{
                width: {md:150, xs:145},
                mt:{xs:3,md:0},
                //mx:'auto'
              // maxHeight: { xs: 50, md: 60},
              // maxWidth: {xs: 50, md: 60 }
              }}
              alt="rdf"
              src= 'http://localhost:3000/volivolt-logo.svg'
            />
          </Box>
          <TextField 
            label='Email' 
            color={'yellowVoly'} 
            size='small'
            id='email'
            {...register('email', { required: 'Veuillez entrer votre email'})} 
            error={!!errors.email}
            helperText={errors.email?.message}
            sx={{
            my: 1,
           /* input: {
              color: "white",
            }*/
          }}/>
          <TextField 
            label='Mot de passe' 
            type='password' 
            size='small' 
            id='password'
            {...register('password', { required: 'Veuillez entrer votre mot de passe'})}
            error={!!errors.password}
            helperText={errors.password?.message}
            color={'yellowVoly'} 
            sx={{
            my:1,
            /*input: {
              color: "white",
            }*/
          }}/>
          <Button variant='contained' color={'yellowVoly'} type='submit'>Connexion</Button>
          
        </Grid>
        
      </Grid>
      </form>
    </Box>
  )
}