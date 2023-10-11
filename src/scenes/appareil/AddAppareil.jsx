import React from 'react'
import { Header } from '../component/Header'
import { Box, Button } from '@mui/material'
import axios from 'axios'
import { ENDPOINT } from '../../services/BaseUrl'
import { AreUSure } from '../component/AreUSure'
import { useState } from 'react'
import { LoadingSpinner } from '../../component/Utils/modal/LoadingSpinner'
import { ModalError } from '../../component/Utils/modal/ModalError'
import { SucceedAppareil } from './SucceedAppareil'

const AddAppareil = () => {
    // are sure
    const [open,setOpen] = useState(false)

    //post management
    const [isLoading, setIsLoading]= useState(false)
    const [success, setSuccess] = useState(false)
    const [error,setError] = useState(false)
    const [errorMessage, setErrorMessage]= useState('')
    const [data,setData] = useState([])

    const handleNewDevices = () => {
        setIsLoading(true)
        axios.post(ENDPOINT+'appareil')
        .then(resp => {
            setIsLoading(false)
            setData(resp.data)
            setSuccess(true)  
          
          })
          .catch(error => {
            console.log(error)
            setError(true)
            setIsLoading(false)
            setErrorMessage("Echec de creation de nouvel Appareil")
            //console.log("Echec d'enregistrement! veillez resseyer plus tard")
          })
    }
  return (
    <Box
    sx={{height: '83vh'}}>
        <SucceedAppareil open={success} setOpen={setSuccess} data={data}/>
        {isLoading && <LoadingSpinner/>}
        {error && <ModalError open={error} message={errorMessage} handleClose={()=>setError(false)}/>}
      <Header title={'Ajouter Un Nouveau Appareil'} subtitle={'lorsque vous acquérez un nouvel appareili'}/>
      <Button variant='contained' onClick={()=>setOpen(true)}>Nouvel Appareil</Button>
      <AreUSure open={open}  setOpen={setOpen} title='Comfirmer' text='vous allez créer un nouvel appareil' action={handleNewDevices}/>
    </Box>
  )
}

export default AddAppareil
