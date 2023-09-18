const ScrollAnimationVariants = {
    hidden: {
        opacity: 0,
        y: -75
    },
    visible: {
        opacity: 1, 
        y: 0,
        transition: {
            delay: 0.5,
            duration: 0.5
        }
    }
}


export { ScrollAnimationVariants }