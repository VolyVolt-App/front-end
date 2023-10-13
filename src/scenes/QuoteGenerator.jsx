import { Box, Button, Grid, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { CardQuote } from './component/quotegenerator/CardQuote'
import { FormProvider, useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver }from '@hookform/resolvers/yup'
import axios from 'axios'
import { FormInput } from '../component/form/FormInput'
import { LoadingSpinner } from '../component/Utils/modal/LoadingSpinner'
import { ModalError } from '../component/Utils/modal/ModalError'
import { useState } from 'react'
import { ENDPOINT } from '../services/BaseUrl'
import { SuccessGeneration } from './quotegenerator/SuccessGeneration'

const validationSchema = Yup.object().shape({
    email : Yup.string()
      .required("l'email de votre compte est necessaire")
      .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'entrez un addresse email valide'),
    numero: Yup.string()
      .required("le numéro de téléphone est necessaire")
      .matches(/^(\+261|0)(34|38|32|033)([0-9]{7})$/,'veuillez entrer un numero valide'),
    organisme : Yup.string()
      .required("Entrer votre nom ou votre nom d'organisme"),
    localite : Yup.string()
      .required("Entrer une localité"),
    nbrmenage : Yup.number()
      .required("entrer le nombre de ménage"),
    ptkioske : Yup.number()
      .required("entrer le nombre de Kiosque")
      .min(1,'au moins un Kiosque'),
    contractduration: Yup.number()
      .required("entrer la duration du contract souhaité")
      .min(1,'au moins un ans'),
    distance: Yup.number()
      .required("entrer la distance")
      .min(1,'au moins un mettre'),
})



export const QuoteGenerator = () => {
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
      const [data,setData] = useState([])

      const onSubmit = (data) => {
        //organisme,email,numero,localite,distance,nbrmenage,ptkioske,contractduration
    
        setIsLoading(true)
    
        console.log(data)
             
        dataForm.append('organisme',data.organisme)
        dataForm.append('email',data.email)
        dataForm.append('numero',data.numero)
        dataForm.append('localite',data.localite)
        dataForm.append('distance',data.distance)
        dataForm.append('nbrmenage',data.nbrmenage)
        dataForm.append('ptkioske',data.ptkioske)
        dataForm.append('contractduration',data.contractduration)
        
        //dataForm.append('',data.)
        axios.post(ENDPOINT+'algo',dataForm,
        {
          transformRequest: dataForm=> dataForm,//to solve axios issue
        })
        .then(resp => {
          setData(resp.data)
          setIsLoading(false)
          setSuccess(true) 
          console.log(resp.data) 
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
    <Box>
        <SuccessGeneration open={success} setOpen={setSuccess} data={data}/>
        <Typography variant='h6' fontWeight={'bold'} pb={1}>INPUTS CLIENTS</Typography>
        <FormProvider {...methods}>
            {isLoading && <LoadingSpinner/>}
            {error && <ModalError open={error} message={errorMessage} handleClose={()=>setError(false)}/>}
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container>
                    <Grid item xs={12} md={6} sx={{bgcolor: 'white', p:{xs:1,sm:2,md:3,lg:4}, borderRadius: 1}}>
                        <Stack spacing={2}>
                        <FormInput name='organisme' label='Nom de l’organisme'  error={errors?.organisme} helperText={errors?.organisme?.message} size='small'/>
                        <FormInput name='email' label='Adresse E-mail'  error={errors?.email} helperText={errors?.email?.message} size='small'/>
                        <FormInput name='numero' label='Numéro de téléphone'  error={errors?.numero} helperText={errors?.numero?.message} size='small'/>
                        <Stack direction={'row'} spacing={1}>
                            <FormInput name='localite' label='Localité'  error={errors?.localite} helperText={errors?.localite?.message} fullWidth size='small'/>
                            <FormInput name='distance' label='Distance'  error={errors?.distance} helperText={errors?.distance?.message} fullWidth size='small'/>
                        </Stack>
                        <FormInput name='nbrmenage' label='Nombres de ménages bénéficiaires'  error={errors?.nbrmenage} helperText={errors?.nbrmenage?.message} size='small'/>
                        <FormInput name='ptkioske' label='Nombres de points de rechargement souhaités'  error={errors?.ptkioske} helperText={errors?.ptkioske?.message} size='small'/>
                        <FormInput name='contractduration' label='Durée du contrat'  error={errors?.ptkioske} helperText={errors?.ptkioske?.message} size='small'/>  
                        <Button variant='contained' fullWidth type='submit'>GENERER LE DEVIS</Button>
                        </Stack>
                    </Grid>
                    
                    <Grid item xs={12} md={6} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                        <Stack spacing={2} dis alignItems={'center'}>
                        </Stack>
                    </Grid>
                </Grid>{/* end grid container */}
            </form>
        </FormProvider>

        <Typography variant='h6' fontWeight={'bold'} pb={1}>DETAILS DU DEVIS</Typography>


    </Box>
  )
}
