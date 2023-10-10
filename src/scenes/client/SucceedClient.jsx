import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Stack, Typography } from '@mui/material'
import React from 'react'

export const SucceedClient = ({open,setOpen,data}) => {
  return (
    <Dialog
        open={open}
        onClose={()=>setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>
          <Typography variant='h6' color={'primary'} sx={{fontWeight: 'bold'}}>
            Vous avez un nouveau ClIENT!
          </Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Stack direction={'row'} spacing={1} pb={1}>
              <Typography color={'primary'} sx={{textDecoration: 'underline'}}>Nom: </Typography>
              <Typography>{data.nom}</Typography>
            </Stack>
            <Stack direction={'row'} alignItems='center' spacing={1}>
              <Typography color={'primary'} sx={{textDecoration: 'underline'}}>ID du Client: </Typography>
              <Typography sx={{ backgroundColor: '#8bbc1f', p:1, color:'white', fontWeight: 'bold', borderRadius:2}}>{data.clientId}</Typography>
            </Stack>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant='contained' onClick={()=>setOpen(false)} autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>

  )
}
