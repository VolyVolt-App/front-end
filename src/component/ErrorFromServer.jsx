import { Box } from '@mui/material'
import React from 'react'

export const ErrorFromServer = () => {
  return (
    <Box sx={{
        p:2,
        backgroundColor: '#dc3545',
        borderRadius:2,
        mx: 'auto',
        width: 300
    }}> Oops Il y a erreur depuis le serveur</Box>
  )
}
