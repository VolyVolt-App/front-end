import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

export const ImpactTwo = ({value,icon,text}) => {
  return (
    <>
        <Box> 
            <Stack direction={'row'} alignItems={'center'} justifyContent={'center'}>
                {icon}
                <Typography variant='h3'>{value}</Typography>
            </Stack>
            <Typography align='center' sx={{fontWeight: 'bold'}}>{text}</Typography>
        </Box>
    </>
  )
}
