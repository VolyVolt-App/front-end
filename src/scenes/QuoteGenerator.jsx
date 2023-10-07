import { Box, Button, Grid, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { CardQuote } from './component/quotegenerator/CardQuote'

export const QuoteGenerator = () => {
  return (
    <Box>
        <Typography variant='h6' fontWeight={'bold'} pb={1}>INPUTS CLIENTS</Typography>
        <Grid container>
            <Grid item xs={12} md={6} sx={{bgcolor: 'white', p:{xs:1,sm:2,md:3,lg:4}, borderRadius: 1}}>
                <TextField label='Nom de l’organisme' fullWidth size='small' sx={{mb:1}}/>
                <TextField label='Adresse E-mail' fullWidth size='small' sx={{my:1}}/>
                <TextField label='Numéro de téléphone' fullWidth size='small'sx={{my:1}}/>
                <Stack direction={'row'} spacing={1}sx={{py:1}}>
                    <TextField label='Localité' fullWidth size='small'/>
                    <TextField label='Distance' fullWidth size='small'/>
                </Stack>
                <TextField label='Nombres de ménages bénéficiaires' fullWidth size='small'sx={{my:1}}/>
                <TextField label='Nombres de points de rechargement souhaités' fullWidth size='small'sx={{my:1}}/>
                <TextField label='Durée du contrat' fullWidth size='small'sx={{py:1}}/>
                <Button variant='contained' fullWidth sx={{my:1}}>GENERER LE DEVIS</Button>
            </Grid>

            
            <Grid item xs={12} md={6} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <Stack spacing={2} dis alignItems={'center'}>
                    <CardQuote title={"PRODUCTION D’ENERGIE NECESSAIRE "} value={'124kWh'} />
                    <CardQuote title={"SURFACE TOTALE À CULTIVER"} value={'4Ha'} />
                    <CardQuote title={"DEVIS  dES SERVICES"} value={'4Ha'} />
                </Stack>
            </Grid>
        </Grid>{/* end grid container */}

        <Typography variant='h6' fontWeight={'bold'} pb={1}>DETAILS DU DEVIS</Typography>


    </Box>
  )
}
