import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'

import ClearIcon from '@mui/icons-material/Clear'

export const ThxDialog = ({thxDialog, setThxDialog}) => {
    const theme = useTheme()
    const fullscreen = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <Dialog 
    open={thxDialog}
    scroll='paper'
    fullScreen={fullscreen}
    onClose={()=>setThxDialog(false)}

    >
        <DialogTitle component={'div'} sx={{bgcolor: '#082D0E',display:'flex', justifyContent:'space-between'}}>
        <Typography sx={{color: '#8BBC1F', flexGrow: 1}} align='center' variant='h5'>Merci d’un coeur reconnaissant </Typography>
        
        <IconButton onClick={()=>setThxDialog(false)} sx={{position: 'absolue', right:-10}}>
            <ClearIcon sx={{fill: 'white'}}/>
        </IconButton>
        </DialogTitle>
        <DialogContent
        sx={{
            backgroundColor: '#082D0E'
        }}>
            <DialogContentText>
                <Typography color={'white'} py={1} align='center'>
                    Chaque généreux don que vous faites est une étincelle d'espoir pour les communautés rurales de Madagascar, et nous sommes profondément émus par votre soutien inestimable.
                </Typography>
                <Typography color={'white'} py={1} align='center'>
                    Votre confiance et votre générosité ne passent pas inaperçues. Chacune de vos contributions contribue de manière significative à notre mission, apportant de la lumière et de l'espoir là où il n'y en avait pas. Vous n'êtes pas seulement un donateur, vous êtes un artisan de l'impact concret que nous créons ensemble.
                </Typography>
                <Typography color={'white'} py={1} align='center'>
                    Nous nous engageons à vous tenir au courant de chaque étape de notre voyage commun. Votre soutien ne s'arrête pas à la simple donation ; il se traduit par des actions tangibles que nous partagerons fièrement avec vous.
                </Typography>
                <Typography color={'white'} py={1} align='center'>
                    Nous nous engageons à vous tenir au courant de chaque étape de notre voyage commun. Votre soutien ne s'arrête pas à la simple donation ; il se traduit par des actions tangibles que nous partagerons fièrement avec vous.
                </Typography>
                <Typography color={'white'} py={1} align='center'>
                    Un immense merci pour votre engagement. Ensemble, nous éclairons des vies et nous bâtissons un avenir meilleur, grâce à votre précieuse contribution. Votre lumière continue de briller dans les cœurs de ceux que nous aidons.
                </Typography>
            </DialogContentText>
        </DialogContent>

    </Dialog>
  )
}
