import { Box, Typography } from '@mui/material'
import React from 'react'

export const CardQuote = ({title,value}) => {
  return (
    <Box sx={{
        bgcolor: 'rgba(255, 192, 0, 0.15)',
        width: {xs: '90%', md: 370},
        height: 120,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    }}>
        <Typography variant='h6' align='center' sx={{color: '#76A40F', fontWeight:600}}>{title}</Typography>
        <Typography align='center' sx={{color: '#76A40F', fontWeight: 700, fontSize:45}} >{value}</Typography>
    </Box>
  )
}
