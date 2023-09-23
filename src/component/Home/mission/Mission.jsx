import { Divider, Typography } from '@mui/material'
import React from 'react'
import ScrollAnimationLayout from '../../Layout/ScrollAnimationLayout'
import { ColorRevealLayout } from '../../Layout/ColorRevealLayout'

export const Mission = () => {
  return (
    <>
        <Typography variant='h5' 
            sx={{
              fontWeight: 'bold',
              width:'fit-content'
            }}>MISSION DE VOLYVOLT
            
            <Divider variant="fullwidth" sx={{ borderBottomWidth: 2, mt:1 }} />
        </Typography>
        <ScrollAnimationLayout>
          <Typography py={2} sx={{fontSize: 20}}>
          Résoudre le problème d'électrification rurale à Madagascar en permettant aux ménages d'accéder à une solution énergétique verte, durable et à coût abordable 
          </Typography>
        </ScrollAnimationLayout>
        <ScrollAnimationLayout>
          <Typography py={2}>
          Seulement 10,9 % de la population rurale a accès à l'électricité, tandis que ce chiffre atteint 72,6 % en zone urbaine. Cette disparité crée des obstacles au développement socio-économique des communautés rurales, car elles luttent pour éclairer leurs maisons, alimenter leurs appareils électroniques et utiliser des équipements nécessitant de l'énergie.
          </Typography>
        </ScrollAnimationLayout>
        <ScrollAnimationLayout>
          <Typography>
          Face à ce défi, VolyVolt propose de fournir des services  clé en main d'électrification aux des ONG et des fondations  au niveau des localités où ils souhaitent apporter leur contribution. 
          La particularité de notre solution réside dans l'utilisation de la technologie des piles microbiennes. Grâce à des bactéries situées au niveau des racines des plantes, nous générons de l'électricité de manière propre et durable, offrant ainsi une source d'énergie verte à ces communautés. 
          </Typography>
        </ScrollAnimationLayout>
    </>
  )
}
