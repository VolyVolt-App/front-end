import { useQueries, useQuery } from '@tanstack/react-query'
import React from 'react'
import { axiosClient } from '../utils/axios'
import { ENDPOINT } from '../services/BaseUrl'
import { ErrorFromServer } from '../component/ErrorFromServer'
import { Loading } from '../component/Loading'
import { DashboardLayout } from './dashboard/DashboardLayout'
import { Box } from '@mui/material'
import { Chart } from './component/chart/Chart'

export const Dashboard = () => {
    /*const {data,isLoading,isError, isSuccess} = useQuery(['allClient'],()=>
    axiosClient.get(ENDPOINT+'allClient')
    .then((res) => res.data)
    )*/

    const [dashboard, allClient, allappareil] = useQueries({
      queries : [
        {
          queryKey: ['dashboard'],
          queryFn: () => axiosClient.get('dashboard', 
          {headers : {
            'content-type' : 'application/json',
            //'Authorization': 'Bearer '+auth.token,
          } ,})
          .then((res) => res.data)
        },//end query one
        {
          queryKey: ['allClient'],
          queryFn: () => axiosClient.get('allClient', 
          {headers : {
            'content-type' : 'application/json',
         //   'Authorization': 'Bearer '+auth.token,
          } ,})
          .then((res) => res.data)
        },//end query two
        {
          queryKey: ['allappareil'],
          queryFn: () => axiosClient.get('allappareil/', 
          {headers : {
            'content-type' : 'application/json',
         //   'Authorization': 'Bearer '+auth.token,
          } ,})
          .then((res) => res.data)
        },//end query three
        
       /* {
          queryKey: ['getConsomation/'+params.id],
          queryFn: () => axiosClient.get('getConsomation/'+params.id, 
          {headers : {
            'content-type' : 'application/json',
         //   'Authorization': 'Bearer '+auth.token,
          } ,})
          .then((res) => res.data)
        },//end query four*/
      ]
    })

  return (
    <Box
      sx={{
        height: '100% !important'
      }}>
    {(dashboard.status === 'error'||allClient.status === 'error'||allappareil.status === 'error') && <ErrorFromServer/>}
    {(dashboard.status === 'success'&& allClient.status === 'success' && allappareil.status === 'success')  &&
      <DashboardLayout dashboard={dashboard.data} allclient={allClient.data} allappareil={allappareil.data}/>
      }
    {(dashboard.status === 'loading'&& allClient.status === 'loading' && allappareil.status === 'loading') && <Loading/>}
    
    </Box>
    
  )
}