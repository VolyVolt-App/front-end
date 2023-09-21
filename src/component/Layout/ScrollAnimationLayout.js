import { Box } from '@mui/material'
import React, { useEffect, useRef} from 'react'
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
        <Box 
            ref={ref} 
            component={motion.div} 
            variants={ScrollAnimationVariants} 
            initial="hidden"
            animate={scrollAnimation}
        >
            {children}
        </Box>
    )
}

export default ScrollAnimationLayout