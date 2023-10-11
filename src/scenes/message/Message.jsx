import { Box, Typography } from '@mui/material'
import React from 'react'

export  const Message = () => {
  return (
    <Box p={2}
      sx={{
        width:{xs: '100%', md: 300, lg: 400}
      }}
    >
        <Box sx={{
            backgroundColor: 'red',
            p:2,
            borderRadius:2,
            width:'fit-content'
        }}>
        <Typography color='white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque ut quis dolore, numquam.</Typography>
        </Box>
    </Box>
  )
}


