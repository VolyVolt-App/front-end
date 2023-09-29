import { Box, Button, Grid, TextField } from '@mui/material'
import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { ENDPOINT } from '../services/BaseUrl'
//import { ReactComponent as logo } from '../asset/logo/volivolt-logo.svg'

export const Login = () => {

  
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    //setIsLoading(true)
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
         // getUser(token)
          //auth.handleLogin(token,user)
          //navigate('/')
        }
    })
    .catch(err => {
      //setIsLoading(false)
      console.log(err)
      //setErrorMessage('Mauvais mot de passe ou email')
      //setError(true)
      console.log('Mauvais mot de passe ou email')
    })
  }

  return (
    <Box width={'100%'} height={'100vh'} sx={{/*backgroundColor: '#082D0E'*/}}>
      
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