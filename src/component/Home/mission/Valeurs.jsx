import { Divider, Typography } from '@mui/material'
import React from 'react'

export const Valeurs = () => {
  return (
    <>
    <Typography variant='h5' 
        sx={{
          color: '#638715',
          fontWeight: 'bold',
          width:'fit-content'
        }}>NOS VALEURS
        
        <Divider variant="fullwidth" sx={{ borderBottomWidth: 2, mt:1 }} />
        </Typography>

        <Typography mt={2}>
        VolyVolt incarne trois valeurs essentielles qui guident son engagement envers ses clients, partenaires et communautés : <br/>
        <span style={{fontWeight: 'bold', fontFamily: 'Assistant'}}>Inclusion :</span> L'inclusion est l'une des valeurs fondamentales de VolyVolt, et elle se reflète dans la mission même de l'entreprise, qui vise à réduire les inégalités d'accès à l'énergie en électrifiant les zones rurales. Cette valeur d'inclusion s'étend à tous les aspects de l'entreprise, que ce soit dans ses partenariats, ses collaborations ou au sein de son équipe interne.<br/>
        <span style={{fontWeight: 'bold', fontFamily: 'Assistant'}}>Responsabilité Sociale et Sociétale:</span> Nous sommes déterminés à agir en faveur des défis sociaux. Nous veillons également au bien-être de nos employés, car nous croyons que notre responsabilité sociale s'étend à tous les aspects de leur expérience au sein de notre entreprise.<br/>
        <span style={{fontWeight: 'bold', fontFamily: 'Assistant'}}>Progrès Durable:</span> Le progrès durable est au cœur de notre démarche. Nous nous engageons à créer un impact tangible en écoutant les besoins des communautés que nous servons. Nous nous efforçons d'apprendre en permanence et d'améliorer constamment nos pratiques pour garantir un progrès durable.
        </Typography>
    </>
  )
}
