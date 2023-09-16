import { Box, Grid, List, ListItem, Typography } from '@mui/material'
import React from 'react'

export const Don = () => {
  return (
    <Box sx={{bgcolor: '#F5F5F5'}}>
      <Grid container px={{xs:2,md:14}} pt={9} sx={{
            backgroundColor: '#082D0E' 
      }}>
        <Grid item xs={12}>
          <Typography variant='h6' sx={{color:'#96CC1E'}}>
          Votre générosité peut faire toute la différence 
          </Typography>
          <Typography color={'white'} py={2}>
          Votre générosité peut faire toute la différence dans la vie des communautés rurales de Madagascar. En faisant un don à VolyVolt, vous contribuez directement à notre mission d'électrification rurale durable et à la création d'un avenir meilleur pour ces communautés.
          </Typography>
          <Typography sx={{ color: 'white', fontSize: 18, fontWeight: 600}}>
          Comment faire un don :
          </Typography>
          <List>
            <ListItem disablePadding>
              <Typography color={'white'}>
              Vous pouvez faire un don ponctuel en utilisant notre plateforme de paiement sécurisée.
              </Typography>
            </ListItem>
            
            <ListItem disablePadding>
              <Typography color={'white'}>
              Si vous préférez, vous pouvez également envisager de devenir un donateur mensuel pour un impact durable.
              </Typography>
            </ListItem>
          </List>
          <Typography color={'white'}>
          Chaque don compte, quelle que soit sa taille. En nous rejoignant dans cette aventure, vous faites partie de la solution pour un avenir plus lumineux et plus durable pour les communautés rurales de Madagascar. Rejoignez-nous aujourd'hui pour participer à cette mission passionnante.
          </Typography>
        </Grid>

      </Grid>
    </Box>
  )
}
