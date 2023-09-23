import { Box } from '@mui/material'
import React from 'react'
import { motion } from 'framer-motion'

import { btnVariants } from '../Utils/AnimationVariants/btnVariants'


const BtnAnimationLayout = ({children}) => {
  return (
    <Box component={motion.div} variants={btnVariants} initial="hidden" animate="visible">
        {children}
    </Box>
  )
}

export default BtnAnimationLayout