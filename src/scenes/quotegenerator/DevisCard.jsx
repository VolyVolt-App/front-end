import { Box, Typography } from '@mui/material'
import React from 'react'

export const DevisCard = ({title,children}) => {
  return (
    <Box sx={{
        bgcolor: 'rgba(255, 192, 0, 0.15)',
        width: {xs: '95%',md:'fit-content'},
        p:2,
        m:2,
        borderRadius: 2
    }}>
      <Typography color={'primary'} sx={{
        fontWeight:'bold'
      }}>
        {title}
      </Typography>
      {children}
    </Box>
  )
}