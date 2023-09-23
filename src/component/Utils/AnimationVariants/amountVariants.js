const amountVariants = {
    hidden: {
        rotate:90, 
        y:-50, 
        opacity:0 
    },
    visible: {
        rotate:0, 
        y: 0, 
        opacity: 1,
        transition:{ 
            type:"spring", 
            stiffness: 260, 
            damping: 10,
            duration: 0.6 
        },
        viewport: { 
            once:false, 
            amount:1
        }
    }
}

export {amountVariants}