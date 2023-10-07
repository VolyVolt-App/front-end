import { Button, Dialog, DialogActions, DialogContent, DialogContentText } from '@mui/material'
import React from 'react'

export const SucceedClient = ({open,setOpen,data}) => {
  return (
    <Dialog
        open={open}
        onClose={()=>setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>setOpen(false)} autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>

  )
}
