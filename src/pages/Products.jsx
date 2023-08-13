import { Box, Button, Grid, Stack } from '@mui/material'
import React, { useState } from 'react'
import '../styles/accordion.css'
import { useRef } from 'react'

export const Products = () => {
  const [selected, setSelected]= useState('one')
  const refOne= useRef(null)
  const refTwo = useRef(null)
  const refThree = useRef(null)
  const refFour = useRef(null)

  const handleCollapseOne = () => {
    refOne.current.style.maxWidth=refOne.current.scrollWidth+'px' 
    refTwo.current.style.maxWidth=null
    refThree.current.style.maxWidth=null
    refFour.current.style.maxWidth=null
  
  }
  const handleCollapseTwo = () => {
    refTwo.current.style.maxWidth=refTwo.current.scrollWidth+'px'
    refThree.current.style.maxWidth=null
    refFour.current.style.maxWidth=null
    refOne.current.style.maxWidth=null
  }
  const handleCollapseThree = () => {
    refThree.current.style.maxWidth=refThree.current.scrollWidth+'px'
    refTwo.current.style.maxWidth=null
    refFour.current.style.maxWidth=null
    refOne.current.style.maxWidth=null
  }
  const handleCollapseFour = () => {
    refFour.current.style.maxWidth=refFour.current.scrollWidth+'px' 
    refTwo.current.style.maxWidth=null
    refThree.current.style.maxWidth=null
    refOne.current.style.maxWidth=null
  }
 
  return (
    <Box pt={9}>
      <Button onClick={handleCollapseOne}>One</Button>
      <Button onClick={handleCollapseTwo}>Two</Button>
      <Button onClick={handleCollapseThree}>Three</Button>
      <Button onClick={handleCollapseFour}>Four</Button>
      <Stack direction={'row'}>
        <Box>
          ljljk
        </Box>
        <Box className='panel-horizontal' ref={refOne}
        sx={{
          backgroundColor: 'red'
        }}>hj
        </Box>
        <Box>
          ljljk
        </Box>
        <Box className='panel-horizontal' ref={refTwo}>
          horizontal
        </Box>
        <Box>
          ljljk
        </Box>
        <Box className='panel-horizontal' ref={refThree}
        sx={{
          backgroundColor: 'blue'
        }}>jkjk</Box>
        <Box>
          ljljk
        </Box>
        <Box className='panel-horizontal' ref={refFour}
        sx={{
          backgroundColor: 'blue'
        }}>jkjk</Box>
        
      </Stack>
    </Box>
  )
}
