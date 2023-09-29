import { Backdrop, Box, Fade, IconButton, Modal, Typography } from '@mui/material'
import React from 'react'
import CancelIcon from '@mui/icons-material/Cancel';

export const ModalError = ({open, handleClose, message}) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: '#dc3545',
        //border: '2px solid #000',
        borderRadius: 1,
        //boxShadow: 24,
        p: 4,
      };

  return (
    <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <IconButton onClick={handleClose}>
                <CancelIcon  sx={{fill: 'white'}}/>
            </IconButton>
            <Typography align='center' sx={{ color: 'white' }}>
                {message}
            </Typography>
          </Box>
        </Fade>
      </Modal>
  )
}
