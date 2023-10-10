import { Box, Typography } from '@mui/material'
import React from 'react'

export const ClientShow = ({data}) => {
    console.log(data)
  return (
    <Box sx={{
     // backgroundColor: 'red'
    }}>
      <Box sx={{
        display:'flex',
      }}>
        <Typography variant='h6'>Nom du Client:</Typography>
        <Typography variant='h6' sx={{ 
          color: '#8bbc1f',
          ml:2,
          fontWeight: 'bold'
          }}>{data.nom}</Typography>
      </Box>
      <Box sx={{
        display:'flex',
      }}>
        <Typography variant='h6'>CIN : </Typography>
        <Typography variant='h6' sx={{ 
          color: '#8bbc1f',
          ml:2,
          fontWeight: 'bold'
          }}>{data.cin}</Typography>
      </Box>
      <Box sx={{
        display:'flex',
      }}>
        <Typography variant='h6'>Appareil : </Typography>
        <Typography variant='h6' sx={{ 
          color: '#8bbc1f',
          ml:2,
          fontWeight: 'bold'
          }}>{data.uDevices}</Typography>
      </Box>
      <Box sx={{
        display:'flex',
      }}>
        <Typography variant='h6'>Address : </Typography>
        <Typography variant='h6' sx={{ 
          color: '#8bbc1f',
          ml:2,
          fontWeight: 'bold'
          }}>{data.address}</Typography>
      </Box>

    </Box>
  )
}
