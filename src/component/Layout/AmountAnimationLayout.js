import { Box } from '@mui/material';
import React from 'react'
import { motion } from 'framer-motion';
import { amountVariants } from '../Utils/AnimationVariants/amountVariants';

const AmountAnimationLayout = ({children}) => {
  return (
    <Box component={motion.div} variants={amountVariants} initial="hidden" whileInView="visible">
        {children}
    </Box>
  )
}

export default AmountAnimationLayout;