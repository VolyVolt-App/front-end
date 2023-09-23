const ScrollAnimationVariants = {
    hidden: {
        opacity: 0,
        y: 25
    },
    visible: {
        opacity: 1, 
        y: 0,
        transition: {
            y: {duration: 0.6},
		    opacity: { duration: 1.2},
            ease:"easeOut",
            delay: 0.25
        }
    }
}


export { ScrollAnimationVariants }
