import { Divider, Typography } from '@mui/material'
import React from 'react'

export const Histoire = () => {
  return (
    <>
    <Typography variant='h5' 
        sx={{
          color: '#638715',
          fontWeight: 'bold',
          width:'fit-content'
        }}>HISTOIRE DE VOLYVOLT
        
        <Divider variant="fullwidth" sx={{ borderBottomWidth: 2, mt:1 }} />
        </Typography>


        <Typography py={2}>
        L'aventure de VolyVolt a pris son envol en 2023 lors de l'Orange Summer Challenge, une expérience humaine et technologique inspirante qui a marqué le début de notre parcours entrepreneurial. Au cours de cette compétition, nous avons eu le privilège de collaborer avec l'équipe de l'Orange Digitale Center. Durant la conception de notre projet, nous avons pris le temps d'écouter attentivement les communautés rurales, afin de comprendre en profondeur leurs besoins spécifiques et les défis auxquels elles étaient confrontées. Cette interaction nous a permis de perfectionner notre solution pour qu'elle réponde de manière optimale à leurs attentes. Depuis lors, nous maintenons un dialogue ouvert et continu avec ces communautés, car nous croyons fermement que c'est en les écoutant que nous pouvons constamment améliorer notre projet et créer un impact durable. Notre histoire est le reflet de notre engagement envers l'amélioration de la vie dans les zones rurales grâce à une énergie verte et accessible.  
        </Typography>
    </>
  )
}
