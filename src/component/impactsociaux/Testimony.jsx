import { Box, Typography } from '@mui/material'
import React from 'react'
import {ReactComponent as Gillemet} from '../../asset/icon/biggillemet.svg'

export const Testimony = () => {
  return (
    <Box position={'relative'}>
        <Box position={'absolute'} top={{xs:-5, md:-20}} left={{xs:-5, md: -20}}>
            <Gillemet/>
        </Box>
        <Typography color={'white'}>
        Au début, nous étions sceptiques quant à l'idée de voir des jeunes à la tête de ce startup. Cependant, nous avons été agréablement surpris par leur engagement, leur expertise et leur professionnalisme. VolyVolt a prouvé sa capacité à mener des projets d'électrification rurale avec succès, en s'attaquant non seulement à la question de l'accès à l'électricité, mais aussi à des aspects plus larges du développement local. Les impacts des projets sont tangibles et vont au-delà de l'électrification, on est ravis de recolter des retours positifs venant des communautés rurales. Nous sommes très satisfaits de notre collaboration avec VolyVolt et nous sommes impatients de continuer à travailler ensemble pour étendre ces bénéfices à d'autres communautés rurales. Ils ont prouvé que l'innovation et la jeunesse peuvent être des atouts majeurs pour générer un impact positif.
        </Typography>
        <Typography variant='h6' sx={{
            mt:3,
            fontWeight: 'bold',
            color: 'white'
        }}>
        -- Steve RAJAOFERANA
        </Typography>
        <Typography variant='h6' color={'white'}>
        Strategic Manager - ONG Antsika
        </Typography>
    </Box>
  )
}
