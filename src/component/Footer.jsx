import { Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

import {ReactComponent as FacebookIcon} from '../asset/icon/fb.svg'
import {ReactComponent as InstagramIcon} from '../asset/icon/instagram.svg'
import {ReactComponent as TwitterIcon} from '../asset/icon/twitter.svg'
import {ReactComponent as LinkedinIcon} from '../asset/icon/linkedin.svg'


import {ReactComponent as Logo} from '../asset/image/logo-volyvolt.svg'

const pages = [
    {
      text:"Accueil",
      link: ''
    },
    {
      text:"Nos Produit",
      link: 'products'
    },
    {
      text:"Espace Client",
      link: 'client'
    },
    {
      text:"Contact",
      link: 'contact'
    },
     ]

export const Footer = () => {
  return (
    <Box 
        sx={{
            background: 'linear-gradient(180deg, #082D0E 37.50%, #1B470C 100%)',
            width: '100%'
        }}>
        <Grid container display={'flex'} justifyContent={'space-between'}>
            <Grid item xs={12} sm={4} >
                <Box sx={{ display: "flex",justifyContent: 'center' , p:2  }}>
                    {pages.map((page) => (
                        <Typography marginRight={3} key={page.text}>
                            <Link 
                                to={`/${page.link}`} 
                                key={page.text} 
                                style={{textDecoration: 'none', color: 'white'}}>
                                    {page.text}
                            </Link> 
                        </Typography>
                    
                    ))}
                </Box>
            </Grid>{/*end grid item*/}
            <Grid item xs={12} sm={4} >
                <Stack direction={'row'} spacing={2} p={2} justifyContent={'center'}>
                    <FacebookIcon/>
                    <InstagramIcon/>
                    <TwitterIcon/>
                    <LinkedinIcon/>
                </Stack>
            </Grid>{/*end grid item*/}
        </Grid>{/*end grid container*/}
        
        <Grid container display={'flex'} justifyContent={'space-between'} p={1}>
            <Grid item xs={12} sm={3} >
                <Typography color={'white'} align='center'
                sx={{
                    fontSize: '12px'
                }}>
                    &copy;2023 Tous droit reserves
                </Typography>
            </Grid>{/*end grid item*/}

            <Grid item xs={12} sm={3} display={'flex'} justifyContent={'center'}>
                <Logo width={80}
                />
            </Grid>{/*end grid item*/}

            <Grid item xs={12} sm={3} display={'flex'} justifyContent={'center'}>
                <Typography color={'white'} 
                    sx={{
                    fontSize: '12px'}}>
                        Politique de Confidualité
                    </Typography>
                    
                <Typography color={'white'} 
                    sx={{
                    fontSize: '12px',
                    marginLeft: 1}}>
                        Condition d'utilisation
                    </Typography>
            </Grid>{/*end grid item*/}
        </Grid>{/*end grid container*/}
    </Box>
  )
}
