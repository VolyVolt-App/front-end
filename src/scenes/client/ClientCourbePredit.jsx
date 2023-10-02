import { Box, Button, Divider, Typography } from '@mui/material'
import React, { useState } from 'react'
import { TendencyChart } from '../component/chart/TendencyChart'
import axios from 'axios'
import { ENDPOINT } from '../../services/BaseUrl'
import { LoadingSpinner } from '../../component/Utils/modal/LoadingSpinner'
import { ModalError } from '../../component/Utils/modal/ModalError'

export const ClientCourbePredit = ({data,id}) => {
    console.log(data)

    
  const [isLoading,setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)

    const predire = () => {
        setIsLoading(true)
        axios.post(ENDPOINT+'getPredictionToIA/'+id)
        .then((data)=>{
            setIsLoading(false)
            console.log('mety')
        })
        .catch(()=>{
            setIsLoading(false)
            setErrorMessage('une erreur se produit')
        }
        )
    }

    ///getPredictionToIA/1
  return (
    <>
      {isLoading && <LoadingSpinner/>}
      {error && <ModalError open={error} message={errorMessage} handleClose={()=>setError(false)}/>}
      
    {data.consomation.length === 0 && (
        <Box>
            <Typography variant='h6' sx={{
                fontWeight: 'bold',
                color: '#8BBC1F',
                width: 'fit-content'
            }}>
                Donnée de prediction de consomation
                <Divider variant="middle" sx={{ borderBottomWidth: 1, bgcolor: '#8BBC1F', mt:1 }} />
            </Typography>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width:'fit-content',
                py:2,
                pl:3
            }}>                
                <Typography pt={1} >Pas encore de prediction</Typography>
                <Button variant='contained' color='primary' 
                onClick={predire}
                sx={{
                    color: 'white',
                    mt:1
                }}>Predire</Button>
            </Box>
        </Box>
    )}
    {
        data.consomation.length !== 0 && (
           <Box>
                <TendencyChart  xdata={data.label} ydata={data.consomation} bigtitle={'CONSOMMATION PREDIT'} ytitle={'gh'} />
           </Box>
        )
    }
    </>
  )
}
