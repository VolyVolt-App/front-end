import { Box, Divider, Grid, Typography } from '@mui/material'
import React from 'react'


import bannerImage from '../asset/image/Group 104.png'
import bannerVideo from '../asset/image/Group 103.png'

export const Solution = () => {
  return (
    <>
    <Grid container px={{xs:2,md:14}} pt={9} pb={3} sx={{
        backgroundColor: '#082D0E'
      }} >
        <Grid item xs={12} md={6} >
            <Box
                component={'img'}
                sx={{
                    width: {md:'100%',lg:'80%', xs:'95%'},
                    mt:{xs:3,md:0},
                    
                    // maxHeight: { xs: 50, md: 60},
                    // maxWidth: {xs: 50, md: 60 }
                }}
                alt="rdf"
                src= {bannerImage}
            />
        </Grid>
        <Grid item xs={12} md={6} px={2}>
            <Typography variant='h6' sx={{color: '#8BBC1F', fontSize:15}}>
            L'ENERGIE VERTE AU COEUR DE VOS ACTIONS
            </Typography>
            <Typography variant='h6' color={'white'} fontWeight={'bold'} my={2}>
            Embarquez aujourd'hui dans le courant de l'énergie verte et osez faire la différence au cœur des communautés rurales.
            </Typography>
            <Typography sx={{color: '#bbb'}}>
            Chaque initiative que vous entreprenez devient une vague d'impact positif, éclairant les foyers et les horizons des communautés rurales. Prenez la tête en tant que catalyseur audacieux du changement.
            </Typography>
        </Grid>
      </Grid>{/* end container */}

      <Grid container px={{xs:2,md:14}} py={3} 
      sx={{
        backgroundColor: '#8BBC1F'
      }}>
        <Grid item xs={12} md={8} >
            <Typography variant='h6' sx={{color: '#08280D', fontSize:15}}>
                ENERGIE À PARTIR DES CULTURES
            </Typography>
            <Typography variant='h6' color={'white'} mb={3}>
            Techniquement, comment ça fonctionne ..?
            </Typography>

            
            <Grid container>
              <Grid item xs={0.1} md={0.1}>
                <Divider orientation="vertical"  sx={{ borderLeftWidth: 5,borderRightWidth: 0, borderColor: '#A8E71C' }} />
              </Grid>
              <Grid item xs={11.9} md={11.9}>    
                <Typography color={'white'} px={1} >
                Le fonctionnement de VolyVolt est basé sur une technologie appelée "pile microbienne". Ces piles utilisent des micro-organismes, tels que des bactéries, pour produire de l'électricité. Les bactéries présentes dans les racines des plantes consomment des matières organiques et libèrent des électrons lors de leur dégradation. Ces électrons sont ensuite capturés par un circuit électrique, générant ainsi de l'électricité pour alimenter les équipements tels que les lampes, les chargeurs de téléphone et les radios.
                </Typography>
              </Grid>
            </Grid>{/*end mini container */}
            
        </Grid>
        <Grid item xs={12} md={4} >
            <Box
                component={'img'}
                sx={{
                    width: {md:'100%',lg:'80%', xs:'95%'},
                    mt: 'auto',
                    
                    // maxHeight: { xs: 50, md: 60},
                    // maxWidth: {xs: 50, md: 60 }
                }}
                alt="rdf"
                src= {bannerVideo}
            />
        </Grid>
      </Grid>{/*end container */}
    </>
  )
}
