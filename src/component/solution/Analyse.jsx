import React from 'react'
import {  Typography, Box } from '@mui/material'


export const Analyse = ({text}) => {
  return (
    <Box py={2} >
     <Typography align='center' sx={{color: '#5E840E'}}>
      {text}
     </Typography>
     
    </Box>
  )
}
