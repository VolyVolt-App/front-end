import { Box } from '@mui/material'
import { motion } from 'framer-motion'
import React, { useRef } from 'react'

export const ColorRevealLayout = ({startColor,endColor,children}) => {
    const ref = useRef(null);

    const colorRevealVariants = {
        hidden: {
            color: `${startColor}`
        },
        visible: {
            color: `${endColor}`,
            transition: {
                duration:0.25,
                ease: 'easeIn'
            }
        }
    }

    return (
      <Box component={motion.div}
        ref={ref}
        variants={colorRevealVariants}
        initial='hidden'
        whileInView="visible"
        viewport={{ once: false }}
      >
          {children}
      </Box>
    )
}
