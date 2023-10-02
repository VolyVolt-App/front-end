import { useQueries, useQuery } from '@tanstack/react-query'
import React from 'react'
import { useParams } from 'react-router-dom'
import { axiosClient } from '../../utils/axios'
import { ErrorFromServer } from '../../component/ErrorFromServer'
import { Loading } from '../../component/Loading'
import { Box, Grid } from '@mui/material'
import { ClientShow } from './ClientShow'
import { ClientCourbePredit } from './ClientCourbePredit'
import { ClientCourbeReelAndPredit } from './ClientCourbeReelAndPredit'
import { LastConsomation } from './LastConsomation'

export const ClientDetail = () => {
    const params=useParams()
    
   /* const {data,isLoading,isError, isSuccess} = useQuery(['client id'.params.id],()=>
    axiosClient.get(ENDPOINT+'allClient')
    .then((res) => res.data)
    )*/

    //client detaill
    // ENDPOINT'client/'+params.id


    //courbe

    //getConsomationReelandPredit/'+params.id

    //getConsomationPredit/'+params.id
    const [client, consomationPredit, consomationReelAndPredit, lastConsomation] = useQueries({
      queries : [
        {
          queryKey: ['client/'+params.id],
          queryFn: () => axiosClient.get('/client/'+params.id, 
          {headers : {
            'content-type' : 'application/json',
            //'Authorization': 'Bearer '+auth.token,
          } ,})
          .then((res) => res.data)
        },//end query one
        {
          queryKey: ['getConsomationPredit/'+params.id],
          queryFn: () => axiosClient.get('getConsomationPredit/'+params.id, 
          {headers : {
            'content-type' : 'application/json',
         //   'Authorization': 'Bearer '+auth.token,
          } ,})
          .then((res) => res.data)
        },//end query two
        {
          queryKey: ['getConsomationReelandPredit/'+params.id],
          queryFn: () => axiosClient.get('getConsomationReelandPredit/'+params.id, 
          {headers : {
            'content-type' : 'application/json',
         //   'Authorization': 'Bearer '+auth.token,
          } ,})
          .then((res) => res.data)
        },//end query three
        
        {
          queryKey: ['getConsomation/'+params.id],
          queryFn: () => axiosClient.get('getConsomation/'+params.id, 
          {headers : {
            'content-type' : 'application/json',
         //   'Authorization': 'Bearer '+auth.token,
          } ,})
          .then((res) => res.data)
        },//end query four
      ]
    })


  return (
    <Box>

      {/* start client detail */}
      <Grid container py={2}>
        <Grid item xs={12}>
                {client.status === 'loading'  &&
                    <Loading/>
                }
                { client.status === 'error' &&
                    <ErrorFromServer/>
                }
                {client.status === 'success'  &&
                  <ClientShow data={client.data}/>
                }
        </Grid>{/* end item */}
      </Grid>{/* end container */}
      
      {/* end client detail */}

      {/* courbe predit */}
      <Grid container py={2}>
        <Grid item xs={12}>
        {consomationPredit.status === 'loading'  &&
                    <Loading/>
                }
                { consomationPredit.status === 'error' &&
                    <ErrorFromServer/>
                }
                {consomationPredit.status === 'success'  &&
                  <ClientCourbePredit data={consomationPredit.data} id={params.id}/>
                }
        </Grid>
      </Grid>
      {/* end courbe predit */}

      {/* courbe reel and predit */}
      <Grid container py={2}>
        <Grid item xs={12}>
                {consomationReelAndPredit.status === 'loading'  &&
                    <Loading/>
                }
                { consomationReelAndPredit.status === 'error' &&
                    <ErrorFromServer/>
                }
                {consomationReelAndPredit.status === 'success'  &&
                  <ClientCourbeReelAndPredit data={consomationReelAndPredit.data}/>
                }
        </Grid>
      </Grid>
      {/* end courbe reel and predit */}

      
      {/* last consomation */}
      <Grid container py={2}>
        <Grid item xs={12}>
                {lastConsomation.status === 'loading'  &&
                    <Loading/>
                }
                { lastConsomation.status === 'error' &&
                    <ErrorFromServer/>
                }
                {lastConsomation.status === 'success'  &&
                  <LastConsomation data={lastConsomation.data}/>
                }
        </Grid>
      </Grid>
      {/* end last consomation */}
    </Box>
  )
}
/*


//multiple
    const [recentTransac, recentCashout] = useQueries({
      queries : [
        {
          queryKey: ['RecentSuccessedTransacUser'],
          queryFn: () => axiosClient.get('/api/getRecentSuccessedTransaction', 
          {headers : {
            'content-type' : 'application/json',
            'Authorization': 'Bearer '+auth.token,
          } ,})
          .then((res) => res.data)
        },//end query one
        {
          queryKey: ['RecentSuccessedCashOutUser'],
          queryFn: () => axiosClient.get('/api/getrecentsuccessedrpcashoutbyuser', 
          {headers : {
            'content-type' : 'application/json',
            'Authorization': 'Bearer '+auth.token,
          } ,})
          .then((res) => res.data)
        },//end query two
      ]
    })





*/