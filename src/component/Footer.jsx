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



import {ReactComponent as Logo} from '../asset/image/logo-volyvolt.svg'
import { LinkedinIcon } from '../asset/dynamic/LinkedinIcon'
import { TwitterIcon } from '../asset/dynamic/TwitterIcon'
import { InstagramIcon } from '../asset/dynamic/InstagramIcon'
import { FbIcon } from '../asset/dynamic/FbIcon'
import { ENDPOINT, FRONTENDPOINT } from '../services/BaseUrl'
import { Youtube } from '../asset/dynamic/Youtube'

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
      text:"Nos Impacts",
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
            width: '100%',
            
        }}>
         <Grid container display={'flex'} justifyContent={'space-between'} alignItems={'center'} sx={{backgroundColor: '#FFFFFF'}}  >
         
            <Grid item xs={12}  p={1} my={1} px={{xs:2,md:3, lg: 6}}>
                <Box sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: {xs: 'center',sm:'space-between'},
                }}>
                    <Box
                        component={'img'}
                        sx={{
                            //width: {xs: 50, sm: 150},
                            height: {xs:'8vh', sm: '10vh', md: '15vh'},
                            my:1
                        //mt:{xs:3,md:0},
                        
                        // maxHeight: { xs: 50, md: 60},
                        // maxWidth: {xs: 50, md: 60 }
                        }}
                        alt="rdf"
                        src= {FRONTENDPOINT+'logo-orange.svg'}
                    />
                        <Box
                        component={'img'}
                        sx={{
                            //width: {xs:50, sm: 150},
                            height: {xs:'8vh', sm: '10vh', md: '15vh'},
                            my:1,
                        //mt:{xs:3,md:0},
                        
                        // maxHeight: { xs: 50, md: 60},
                        // maxWidth: {xs: 50, md: 60 }
                        }}
                        alt="rdf"
                        src= {FRONTENDPOINT+'logo-aws.svg'}
                        />
                    </Box>
            </Grid> 
        

            </Grid>{/*end grid item*/}   
        <Grid container display={'flex'} justifyContent={'center'}>
            <Grid item xs={12} sm={6} sx={{backgroundColor: '#6E9F00'}} p={1} mt={3} marginX={{xs:1,md:0}} borderRadius={2}>
                <Stack direction={{xs:'column',sm:'row'}} alignItems={'center'} justifyContent={'center'} spacing={2}>
                    <Typography color={'white'}>S’abonner aux Newsletters</Typography>
                    <TextField placeholder='Entre ton email' sx={{backgroundColor: 'white', borderRadius:2}}
                        InputProps={{
                            endAdornment: <InputAdornment position='end'>
                                <Button variant='contained' color='yellowVoly'sx={{color:'black'}} >S'abonner</Button>
                                </InputAdornment>
                        }}/>
                </Stack>
            </Grid>
        </Grid>
        <Grid container display={'flex'} justifyContent={'space-between'} alignItems={'center'} px={{xs:2,md:3, lg: 6}}
        >
            <Grid item xs={12} sm={4} >
                <Box sx={{ display: "flex",justifyContent: {xs:'center',md:'start'} , py:2  }}>
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
                <Stack direction={'row'} spacing={2}   py={2} justifyContent={{xs:'center',md:'end'}}>
                    <a href='https://www.facebook.com/profile.php?id=61550528378165'><FbIcon isHover={isHover} setHover={setHover}/></a>
                    <InstagramIcon isHover={isHover} setHover={setHover}/>
                    {/*<TwitterIcon isHover={isHover} setHover={setHover}/>*/}
                    <a href='https://www.youtube.com/@VolyVolt-mg2023'><Youtube isHover={isHover} setHover={setHover}/></a>
                    <LinkedinIcon isHover={isHover} setHover={setHover}/>
                    
                </Stack>
            </Grid>{/*end grid item*/}
            

           
        </Grid>{/*end grid container*/}
        
        <Divider variant="middle" sx={{ borderBottomWidth: 1, bgcolor: '#8BBC1F', mt:1 }} />
        <Grid container display={'flex'} justifyContent={'space-between'} py={1}  px={{xs:2,md:3, lg: 6}}>
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

            <Grid item xs={12} sm={3} display={'flex'} justifyContent={{xs:'center',md:'end'}} my={1}>
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
