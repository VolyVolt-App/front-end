import { Box } from '@mui/material'
import { motion } from 'framer-motion'
import React, { useRef } from 'react'

export const BackgroundRevealLayout = ({startBgColor,endBgColor,children, amount}) => {
    const ref = useRef(null);

    const backgroundRevealAnimation = {
        hidden: {
            backgroundColor: `${startBgColor}`
        },
        visible: {
            backgroundColor: `${endBgColor}`,
            transition: {
                duration:0.25,
                ease: 'easeIn'
            }
        }
    }

    return (
      <Box component={motion.div}
        ref={ref}
        variants={backgroundRevealAnimation}
        initial='hidden'
        whileInView="visible"
        viewport={{ once: true, amount:amount }}
      >
          {children}
      </Box>
    )
}
