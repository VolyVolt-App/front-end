import { Box, Button, Grid, Stack } from '@mui/material'
import React, { useState } from 'react'
import { Header } from '../component/Header'
import * as Yup from 'yup'
import { yupResolver }from '@hookform/resolvers/yup'
import axios from 'axios'
import { FormInput } from '../../component/form/FormInput'
import { FormProvider, useForm } from 'react-hook-form'
import { ENDPOINT } from '../../services/BaseUrl'
import { ModalError } from '../../component/Utils/modal/ModalError'
import { LoadingSpinner } from '../../component/Utils/modal/LoadingSpinner'
import { SucceedClient } from './SucceedClient'

const validationSchema = Yup.object().shape({
  nom : Yup.string()
    .required("Le client doit avoire un nom"),
    //.matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'entrez un addresse email valide'),
  cin: Yup.string('le numero CIN doit etre des chiffres')
    .required('ce champ ne peut pas etre vide')
    .matches(/^([0-9]{12})+$/, 'veuillez entrer un numero CIN valide'),
  address : Yup.string()
    .required("Entrer l'addresse du client"),
  nombrePerson : Yup.number()
    .required("Entrer le nombre dans la famille"),
  devices : Yup.string()
    .required("entrer les appareils utilisées par le client"),
})

export const AddClient = () => {
  
  const [isLoading, setIsLoading]= useState(false)
  const [success, setSuccess] = useState(false)
  const [error,setError] = useState(false)
  const [errorMessage, setErrorMessage]= useState('')
  const [data,setData] = useState([])


  const methods = useForm({
    resolver:yupResolver(validationSchema)
  })
  const {handleSubmit,formState: { errors }} = methods


  const onSubmit = (data) => {
    //NomOrOrganisme,email,numero,communicationMeans,volyvoltAware,objet,message

    setIsLoading(true)

    console.log(data)
         
    dataForm.append('nom',data.nom)
    dataForm.append('cin',data.cin)
    dataForm.append('address',data.address)
    dataForm.append('nombrePerson',data.nombrePerson)
    dataForm.append('devices',data.devices)
    //dataForm.append('contained',data.contained)
    
    //dataForm.append('',data.)
    axios.post(ENDPOINT+'client',dataForm,
    {
      transformRequest: dataForm=> dataForm,//to solve axios issue
    })
    .then(resp => {
      setIsLoading(false)
      setData(resp.data)
      setSuccess(true)  
    
    })
    .catch(error => {
      console.log(error)
      setError(true)
      setIsLoading(false)
      setErrorMessage("Echec de creation de nouvelle client")
      //console.log("Echec d'enregistrement! veillez resseyer plus tard")
    })
}

  const dataForm = new FormData()

  return (
    <Box>
        <Header title={'AJOUTER NOUVEAU CLIENT'} subtitle={'ajouter ici votre nouveau client'}/>
        <FormProvider {...methods}>
         <SucceedClient open={success} setOpen={setSuccess} data={data}/> 
      {isLoading && <LoadingSpinner/>}
      {error && <ModalError open={error} message={errorMessage} handleClose={()=>setError(false)}/>}
        <form>
          <Grid container>
            <Grid xs={12} md={6} lg={5}>
            <Stack spacing={2}>
              <FormInput name='nom' label='Nom  et Prénoms '  error={errors?.nom} helperText={errors?.nom?.message} fullWidth/>
              <FormInput name='cin' label='Numéro CIN' c error={errors?.cin} helperText={errors?.cin?.message} fullWidth/>  
              <FormInput name='address' label='Addresse du client'  error={errors?.address} helperText={errors?.address?.message} fullWidth/>
              <FormInput name='nombrePerson' label='Nombre du personne dans la famille'  error={errors?.nombrePerson} helperText={errors?.nombrePerson?.message} fullWidth/>  
              <FormInput name='devices' label='Les appareils utilisées'  error={errors?.devices} helperText={errors?.devices?.message} fullWidth/>  
              <Button variant='contained'  onClick={handleSubmit(onSubmit)}>Creer</Button>
            </Stack>
            </Grid>
          </Grid>
        </form>
        </FormProvider>
    </Box>
  )
}
