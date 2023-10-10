import { Alert, Box, Dialog, DialogContent, IconButton, Modal, Typography } from '@mui/material'
import { GridCloseIcon } from '@mui/x-data-grid'
import React, { useState } from 'react'


  

export const ThxForAbonnement = ({open,setOpen}) => {
   // const [open,setOpen] = useState(true)
  return (
    <Dialog
        open={open}
        onClose={()=>{setOpen(false)}}
      >
        <DialogContent sx={{p:0}}>
        <Alert
          sx={{
            p:4
          }}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <GridCloseIcon fontSize="inherit" />
            </IconButton>
          }

        >
          Vous ête abonné!! Volyvolt vous Remercie
        </Alert>
        </DialogContent>
      </Dialog>

  )
}
