import { Alert } from '@mui/material'
import React from 'react'

export const ErrorFromServer = () => {
  return (
    <Alert variant="filled" severity="error">
    Oops Il y a erreur depuis le serveur
    </Alert>
  )
}
