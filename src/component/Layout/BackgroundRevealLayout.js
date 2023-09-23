import { Box } from '@mui/material'
import { motion, useAnimation, useInView } from 'framer-motion'
import React, { useEffect, useRef } from 'react'

export const BackgroundRevealLayout = ({initial,bgColor,children}) => {
    const ref = useRef(null);
    const scrollAnimation = useAnimation();
    const inView = useInView(ref, { once: true });

    const backgroundRevealAnimation = {
        hidden: {
            backgroundColor: `${initial}`
        },
        visible: {
            backgroundColor: `${bgColor}`,
            
            transition: {
                duration:0.5,
                ease: 'easeIn'
            }
        }
    }

    useEffect(() => {
      if(inView) {
        scrollAnimation.start('visible');
      }
    }, [inView])
  return (
    <Box component={motion.div}
    ref={ref}
    variants={backgroundRevealAnimation}
    initial='hidden'
    animate={scrollAnimation}
    >
        {children}
    </Box>
  )
}
