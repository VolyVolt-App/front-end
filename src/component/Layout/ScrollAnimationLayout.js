import { Box } from '@mui/material'
import React, { useRef, useEffect } from 'react'
import { motion, useAnimation,useInView } from 'framer-motion';
import { ScrollAnimationVariants } from '../Utils/AnimationVariants/HomeAnimationVariants';

const ScrollAnimationLayout = ({children}) => {
    const ref = useRef(null);
    const scrollAnimation = useAnimation();
    const inView = useInView(ref, { once: true });

    useEffect(() => {
      if(inView) {
        scrollAnimation.start('visible');
      }
    }, [inView])
    

    return (
      <Box ref={ref} component="div" style={{ position:"relative", overflow: "hidden" }} >
        <Box 
            component={motion.div} 
            variants={ScrollAnimationVariants} 
            initial="hidden"
            animate={scrollAnimation}
        >
            {children}
        </Box>
      </Box>
    )
}

export default ScrollAnimationLayout