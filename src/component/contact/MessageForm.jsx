import React, { useState } from 'react'
import {  Typography, Stack, TextField, Button, Select, MenuItem, InputLabel, FormControl, Modal, Box } from '@mui/material'
import { FormProvider, useForm } from 'react-hook-form'
import { FormInput } from '../form/FormInput'
import { FormSelect } from '../form/FormSelect'

import * as Yup from 'yup'
import { yupResolver }from '@hookform/resolvers/yup'
import axios from 'axios'
import { LoadingSpinner } from '../Utils/modal/LoadingSpinner'
import { ModalError } from '../Utils/modal/ModalError'
import { ENDPOINT } from '../../services/BaseUrl'
import { ThxForMessage } from './ThxForMessage'


const validationSchema = Yup.object().shape({
    email : Yup.string()
      .required("l'email de votre compte est necessaire")
      .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'entrez un addresse email valide'),
    numero: Yup.string()
      .matches(/^(?!.*\S)|((\+261|0)(34|38|32|33)([0-9]{7}))$/,'veuillez entrer un numero valide'),
    NomOrOrganisme : Yup.string()
      .required("Entrer votre nom ou votre nom d'organisme"),
    communicationMeans : Yup.string()
      .required("Entrer ou vous avez connu volyvolt"),
    objet : Yup.string()
      .required("entrer l'objet"),
    message : Yup.string()
      .required("Le message est necessaire"),
})

export const MessageForm = (props) => {
    const methods = useForm({
      resolver:yupResolver(validationSchema)
    })
    //const methods = useForm()

    const {handleSubmit,formState: { errors }} = methods
    const dataForm = new FormData()

    
    const [isLoading, setIsLoading]= useState(false)
    const [success, setSuccess] = useState(false)
    const [error,setError] = useState(false)
    const [errorMessage, setErrorMessage]= useState('')

    const volyvoltAware = ['Mouteur de recherche','Recommandation','LinkIn','Facebook','Evenement','Autre']
    
    //console.log(errors)
    
    const onSubmit = (data) => {
        //NomOrOrganisme,email,numero,communicationMeans,volyvoltAware,objet,message

        setIsLoading(true)

        console.log(data)
             
        dataForm.append('NomOrOrganisme',data.NomOrOrganisme)
        dataForm.append('email',data.email)
        dataForm.append('numero',data.numero)
        dataForm.append('communicationMeans',data.communicationMeans)
        dataForm.append('volyvoltAware',data.volyvoltAware)
        dataForm.append('objet',data.objet)
        dataForm.append('message',data.message)
        
        //dataForm.append('',data.)
        axios.post(ENDPOINT+'message',dataForm,
        {
          transformRequest: dataForm=> dataForm,//to solve axios issue
        })
        .then(resp => {
          setIsLoading(false)
          setSuccess(true)  
        
        })
        .catch(error => {
          console.log(error)
          setError(true)
          setIsLoading(false)
          setErrorMessage("Echec d'enregistrement du message! veillez resseyer plus tard")
          //console.log("Echec d'enregistrement! veillez resseyer plus tard")
        })
    }
  return (
    <FormProvider {...methods}>
      <ThxForMessage open={success} setOpen={setSuccess}/>
    {isLoading && <LoadingSpinner/>}
    {error && <ModalError open={error} message={errorMessage} handleClose={()=>setError(false)}/>}
    <form>
    <Stack px={3} py={3} mx={{xs:0,md:3}} width={'100%'} color={'warning'} backgroundColor={'white'} borderRadius={2} spacing={2} {...props}>
          <FormInput name='NomOrOrganisme' label='Nom  et Prénoms / Nom de l’organisme' color={'yellowVoly'} error={errors?.NomOrOrganisme} helperText={errors?.NomOrOrganisme?.message}/>
          <FormInput name='email' label='Adresse E-mail' color={'yellowVoly'} error={errors?.email} helperText={errors?.email?.message} />
          <FormInput name='numero' label='Numéro de téléphone' color={'yellowVoly'} error={errors?.numero} helperText={errors?.numero?.message}/>
          <FormInput name='communicationMeans' label='Moyen de communication préféré' color={'yellowVoly'} error={errors?.communicationMeans} helperText={errors?.communicationMeans?.message} />
        {/* <FormInput name='' label='' color={'yellowVoly'} /> */}

          <FormSelect name='volyvoltAware' label='Comment avez-vous connu VolyVolt?' color='yellowVoly' options={volyvoltAware}/>

          <FormInput name='objet' label='Objet' color={'yellowVoly'} error={errors?.objet} helperText={errors?.objet?.message}/>
          <FormInput name='message' label='Message' color={'yellowVoly'} multiline rows={5} error={errors?.message} helperText={errors?.message?.message}/>

          <Button variant='contained' color='yellowVoly' onClick={handleSubmit(onSubmit)}>Envoyez le message</Button>
          <Typography fontSize={12}>
          En soumettant ce formulaire, vous consentez à notre politique de confidentialité et à l'utilisation de vos informations personnelles aux fins de votre demande.
          </Typography>
    </Stack>
    </form>
    </FormProvider>
  )
}