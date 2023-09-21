import React from 'react'
import {  Typography, Box } from '@mui/material'
import { AnimatePresence, motion } from 'framer-motion'
import { processusVariants } from '../Utils/AnimationVariants/SolutionAnimationVariants'


export const Analyse = ({text}) => {
  return (
    <AnimatePresence>
    <Box component={motion.div}
     py={2}
     variants={processusVariants}
     initial='hidden'
     animate={'visible'}
     exit={{
      y:-10000,
      //opacity: 0,
  }}>
     <Typography align='center' sx={{color: '#5E840E'}}>
      {text}
     </Typography>
     
    </Box>
    </AnimatePresence>
  )
}
