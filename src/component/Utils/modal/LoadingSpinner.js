import React from 'react'
//import { Modal } from 'react-bootstrap'
import { RotatingLines } from 'react-loader-spinner'

//import '../styles/LoadingSpinner.css'
import { Box, Modal } from '@mui/material'

export const LoadingSpinner= () => {
  return (
    <Modal
    open={true}
    //onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    >
      <Box sx={{
        display: 'flex',
        width: '100%',
        height: '100%',
        justifyContent: 'center'
      }}>
        <RotatingLines strokeColor='#8bbc1f' strokeWidth='5'
        animationDuration='0.75'
        width='56'
        visible={true}/>
      </Box>
    </Modal>
  )
}
