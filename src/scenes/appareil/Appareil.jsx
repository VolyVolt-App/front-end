import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { axiosClient } from '../../utils/axios'
import { ENDPOINT } from '../../services/BaseUrl'
import { ErrorFromServer } from '../../component/ErrorFromServer'
import { Loading } from '../../component/Loading'
import { AppareilLayout } from './AppareilLayout'
import { Box } from '@mui/material'


export const Appareil = () => {
    const {data,isLoading,isError, isSuccess} = useQuery(['allappareil'],()=>
    axiosClient.get(ENDPOINT+'allappareil')
    .then((res) => res.data)
    )
  return (
    <Box
    sx={{height: '82vh'}}>
    {isError && <ErrorFromServer/>}
    {isSuccess &&
      <AppareilLayout data={data}/>
      }
    {isLoading && <Loading/>}
    </Box>
  )
}
