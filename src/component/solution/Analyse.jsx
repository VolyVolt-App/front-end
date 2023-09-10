import React from 'react'
import {  Typography, Box } from '@mui/material'


export const Analyse = () => {
  return (
    <Box py={2} >
     <Typography align='center' sx={{color: '#5E840E'}}>
     VolyVolt collabore avec vous pour analyser des projets d'électrification rurale sur mesure. VolyVolt commence par une analyse approfondie du projet d'électrification, en tenant compte des besoins spécifiques et des ressources disponibles de l'ONG ou de la fondation. Cette étape permet de définir la portée du projet et d'identifier les meilleures approches.
     </Typography>
     <Typography pt={2}>
     Notre solution est spécifiquement conçue pour les ONG et les fondations qui partagent la vision selon laquelle : 
     </Typography>
     <Typography fontSize={19}>
     “ l'accès à une énergie fiable ne devrait pas être un luxe, mais un droit fondamental ”
     </Typography>
     <Typography>
     Si vous vous reconnaissez dans cette vision et que vous cherchez à avoir un impact positif, alors la solution VolyVolt est faite pour vous.
     </Typography>
    </Box>
  )
}
