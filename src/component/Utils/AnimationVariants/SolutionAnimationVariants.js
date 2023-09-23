const processusVariants = {
    hidden:{
        opacity: 0,
        x: '-100vw'
    },
    visible: {
        opacity: 1,
        x: 0,    
        transition: {
            //type: '',
            duration: 0.5,
            //ease: 'easeIn'
        },
    },
    exit: {
        x:'-100vw',
        opacity: 0,
    }
}

export {processusVariants}