import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

export const Impact = ({value,icon,text}) => {
  return (
    <>
       {/** <Box>
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <Typography sx={{
                    fontSize: 50,
                    mr:0.5,
                    height: 5,
                    }}>
                        {value}
                </Typography>
                {icon}
            </Box>
            <Typography align='center'>
                {text}
            </Typography>
        </Box> */}
        <Box> 
            <Stack direction={'row'} alignItems={'center'} justifyContent={'center'}>
                <Typography variant='h3'>{value}</Typography>
                {icon}
            </Stack>
                <Typography align='center' sx={{fontWeight: 'bold'}}>{text}</Typography></Box></>
  )
}
