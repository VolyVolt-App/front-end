import { Box, Typography } from '@mui/material'
import React from 'react'

export const Cibles = ({heading,text}) => {
  return (
    <Box p={3} sx={{backgroundColor: '#B7C288', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset'}}>
        <Typography variant='h6' align='center'
        sx={{
            fontWeight: 'bold'
        }}>
            {heading}
        </Typography>
        <Typography align='center'>
            {text}
        </Typography>
    </Box>
  )
}
