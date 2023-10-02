import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { axiosClient } from '../../utils/axios'
import { ENDPOINT } from '../../services/BaseUrl'
import { ErrorFromServer } from '../../component/ErrorFromServer'
import { Loading } from '../../component/Loading'
import { ClientLayout } from './ClientLayout'

export const Client = () => {
    const {data,isLoading,isError, isSuccess} = useQuery(['allClient'],()=>
    axiosClient.get(ENDPOINT+'allClient')
    .then((res) => res.data)
    )
  return (
    <>
    {isError && <ErrorFromServer/>}
    {isSuccess &&
      <ClientLayout data={data}/>
      }
    {isLoading && <Loading/>}
    </>
  )
}
