import { Box, Button, Divider, Typography } from '@mui/material'
import React from 'react'

export const ClientCourbePredit = ({data}) => {
    console.log(data)
  return (
    <>
    {data.consomation.length === 0 && (
        <Box>
            <Typography variant='h6' sx={{
                fontWeight: 'bold',
                color: '#8BBC1F',
                width: 'fit-content'
            }}>
                Donnée de prediction de consomation
                <Divider variant="middle" sx={{ borderBottomWidth: 1, bgcolor: '#8BBC1F', mt:1 }} />
            </Typography>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width:'fit-content',
                py:2,
                pl:3
            }}>                
                <Typography pt={1} >Pas encore de prediction</Typography>
                <Button variant='contained' color='primary' sx={{
                    color: 'white',
                    mt:1
                }}>Predire</Button>
            </Box>
        </Box>
    )}
    {
        data.consomation.length !== 0 && (
           <Box>

           </Box>
        )
    }
    </>
  )
}
