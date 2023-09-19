import { Box } from '@mui/material'
import React, { useRef, useEffect } from 'react'
import { motion, useAnimation,useInView } from 'framer-motion';
import { imageVariants } from '../Utils/AnimationVariants/imageVariants';

const ImageAnimationLayout = ({children}) => {
    const ref = useRef(null);
    const imageControl = useAnimation();
    const inView = useInView(ref, { once: true });

    useEffect(() => {
      if(inView) {
        imageControl.start('visible');
      }
    }, [inView])
    

    return (
      <Box ref={ref} component="div" style={{ position:"relative", overflow: "hidden" }} >
        <Box 
            component={motion.div} 
            variants={imageVariants} 
            initial="hidden"
            animate={imageControl}
        >
            {children}
        </Box>
      </Box>
    )
}

export default ImageAnimationLayout
