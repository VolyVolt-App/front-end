import { Box, Button, Divider, Grid, InputAdornment, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

//import {ReactComponent as FacebookIcon} from '../asset/icon/fb.svg'
//import {ReactComponent as InstagramIcon} from '../asset/icon/instagram.svg'
//import {ReactComponent as TwitterIcon} from '../asset/icon/twitter.svg'
//import {ReactComponent as LinkedinIcon} from '../asset/icon/linkedin.svg'
import {ReactComponent as OrangeLogo} from '../asset/icon/orange_master_logo 1.svg'
import german from '../asset/logo/german.png'
import africa from '../asset/logo/africa.png'
import giz from '../asset/logo/giz.png'
import partnerlogo from '../asset/logo/partner.png'



import {ReactComponent as Logo} from '../asset/image/logo-volyvolt.svg'
import { LinkedinIcon } from '../asset/dynamic/LinkedinIcon'
import { TwitterIcon } from '../asset/dynamic/TwitterIcon'
import { InstagramIcon } from '../asset/dynamic/InstagramIcon'
import { FbIcon } from '../asset/dynamic/FbIcon'

const pages = [
    {
      text:"Accueil",
      link: ''
    },
    {
      text:"Notre solution",
      link: 'solution'
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
    const [isHover, setHover] = useState('')
  return (
    <Box 
        sx={{
            background: 'linear-gradient(180deg, #082D0E 37.50%, #1B470C 100%)',
            width: '100%'
        }}>
            
        <Grid container display={'flex'} justifyContent={'center'}>
            <Grid item xs={12} sm={6} sx={{backgroundColor: '#638715'}} p={1} mt={3} marginX={{xs:1,md:0}} borderRadius={2}>
                <Stack direction={{xs:'column',sm:'row'}} alignItems={'center'} justifyContent={'center'} spacing={2}>
                    <Typography color={'white'}>S’abonner aux Newsletters</Typography>
                    <TextField placeholder='Entre ton email' sx={{backgroundColor: 'white', borderRadius:2}}
                        InputProps={{
                            endAdornment: <InputAdornment position='end'>
                                <Button variant='contained' sx={{backgroundColor: '#FFBE18'}} >S'abonner</Button>
                                </InputAdornment>
                        }}/>
                </Stack>
            </Grid>
        </Grid>
        <Grid container display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
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
                    <FbIcon isHover={isHover} setHover={setHover}/>
                    <InstagramIcon isHover={isHover} setHover={setHover}/>
                    <TwitterIcon isHover={isHover} setHover={setHover}/>
                    <LinkedinIcon isHover={isHover} setHover={setHover}/>
                </Stack>
            </Grid>{/*end grid item*/}
            

            <Grid item xs={12} sm={4} >
                <Stack direction={'row'} spacing={1} p={2} justifyContent={'center'}>
                    <OrangeLogo width={{xs:'24.12%',sm:56}}/>
                    {/*<Box
                        component={'img'}
                        sx={{
                            //width: 100,
                        //mt:{xs:3,md:0},
                        
                        // maxHeight: { xs: 50, md: 60},
                        // maxWidth: {xs: 50, md: 60 }
                        }}
                        alt="rdf"
                        src= {partnerlogo}
                        />
                    */}
                    <Box
                        component={'img'}
                        sx={{
                            width: {xs:'24.1%', sm: 99.81},
                            height: {sm:55},
                        //mt:{xs:3,md:0},
                        
                        // maxHeight: { xs: 50, md: 60},
                        // maxWidth: {xs: 50, md: 60 }
                        }}
                        alt="rdf"
                        src= {german}
                        />
                    <Box
                        component={'img'}
                        sx={{
                            width: {xs:'32.8%',sm:136.4},
                            height: {sm:55},
                        //mt:{xs:3,md:0},
                        
                        // maxHeight: { xs: 50, md: 60},
                        // maxWidth: {xs: 50, md: 60 }
                        }}
                        alt="rdf"
                        src= {africa}
                        />
                        <Box
                            component={'img'}
                            sx={{
                                width: {xs:'18.91%', sm:78.42},
                                height: {sm:55},
                            //mt:{xs:3,md:0},
                            
                            // maxHeight: { xs: 50, md: 60},
                            // maxWidth: {xs: 50, md: 60 }
                            }}
                            alt="rdf"
                            src= {giz}
                            />
                </Stack>
            </Grid>{/*end grid item*/}

        </Grid>{/*end grid container*/}
        
        <Divider variant="middle" sx={{ borderBottomWidth: 1, bgcolor: '#8BBC1F', mt:1 }} />
        <Grid container display={'flex'} justifyContent={'space-between'} p={1}>
            <Grid item xs={12} sm={3} my={1}>
                <Typography color={'white'} align='center'
                sx={{
                    fontSize: '12px'
                }}>
                    &copy;2023 Tous droit réservés
                </Typography>
            </Grid>{/*end grid item*/}

            <Grid item xs={12} sm={3} display={'flex'} justifyContent={'center'} my={1}>
                <Link to='/'><Logo width={80}/></Link>
                
            </Grid>{/*end grid item*/}

            <Grid item xs={12} sm={3} display={'flex'} justifyContent={'center'} my={1}>
                <Link to={'/confidentialite'} style={{textDecoration: 'none'}}>
                    <Typography color={'white'} 
                    sx={{
                    fontSize: '12px'}}>
                        Politique de confidentialité
                    </Typography>
                </Link>
                    
                <Link to={'/condition'} style={{textDecoration: 'none'}}>
                <Typography color={'white'} condition
                    sx={{
                    fontSize: '12px',
                    marginLeft: 1}}>
                        Conditions et Termes
                    </Typography>
                </Link>
            </Grid>{/*end grid item*/}
        </Grid>{/*end grid container*/}
    </Box>
  )
}
