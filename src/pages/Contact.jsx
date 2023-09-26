import { Box, Grid, Divider, Typography, Stack, TextField, Button, Select, MenuItem, InputLabel, FormControl } from '@mui/material'
import React, {useState} from 'react'

import backgroundBanner from '../asset/image/contact/equipe-commerciale-reussie-heureuse 1.png'
import teamvolyvolt from '../asset/image/équipe verte 1.png'
import backgroundMobileBanner from '../asset/image/contact/bannermobilecontact.png'
import { Embarque } from '../component/contact/Embarque'

import {ReactComponent as ConventionIcon} from '../asset/icon/icons-convention 1.svg'
import {ReactComponent as MoneyIcon} from '../asset/icon/icons-money.svg'
import {ReactComponent as SensibilisationIcon} from '../asset/icon/icons-sensibilisation.svg'
import {ReactComponent as VolunteerIcon} from '../asset/icon/icons-volunteer.svg'

import {ReactComponent as LocalityIcon} from '../asset/icon/icons-locality 1.svg'
import {ReactComponent as PhoneIcon} from '../asset/icon/icons-phone 1.svg'
import {ReactComponent as MailIcon} from '../asset/icon/Vector.svg'

import { FbOutlinedIcon } from "../asset/dynamic/FbOutlinedIcon"
import {ReactComponent as FacebookIcon} from '../asset/icon/icons-fb outline 1.svg'
import {ReactComponent as InstagramIcon} from '../asset/icon/insta.svg'
import {ReactComponent as LinkedinIcon} from '../asset/icon/linkedin out.svg'
import {ReactComponent as TwitterIcon} from '../asset/icon/twitter-svgrepo-com.svg'

import { Link } from 'react-router-dom';
import { RejoindreDialog } from '../component/contact/RejoindreDialog'
import { SliderRight } from '../component/gallery/SliderRight'
import { SliderLeft } from '../component/gallery/SliderLeft'
import { useTheme } from '@emotion/react'
import { InstagramOutlined } from '../asset/dynamic/InstagramOutlined'
import { TwitterOutlined } from '../asset/dynamic/TwitterOutlined'
import { LinkedInOutlinedIcon } from '../asset/dynamic/LinkedInOutlinedIcon'

export const Contact = () => {
    const [isHover, setHover] = useState('')
    const [rejoindreDialog, setRejoindreDialog] = useState(false)
    const theme = useTheme()
  return (
   <Box sx={{bgcolor: '#F5F5F5'}}>
   <Grid container  pt={9} sx={{
        backgroundColor: '#082D0E',}}>
      <Grid item xs={12} sx={{
        position:'relative',
        
      }}>
        <Box sx={{
            position: 'absolute',
            display: {md:'none'},
            zIndex:20,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(8, 45, 14, 0.73)',
        }}/>
          <Box
              component={'img'}
              sx={{
                width: '100%',
                display:{xs:'none',md:'flex'}
                //width: '100%'
              //width: {md:450, xs:'100%'},
              //mt:{xs:3,md:0},
              
              // maxHeight: { xs: 50, md: 60},
              // maxWidth: {xs: 50, md: 60 }
              }}
              alt="rdf"
              src= {backgroundBanner}
          />
          <Box
              component={'img'}
              sx={{
                position:'relative',
                width: '100%',
                display:{xs:'flex',md:'none'}
                //width: '100%'
              //width: {md:450, xs:'100%'},
              //mt:{xs:3,md:0},
              
              // maxHeight: { xs: 50, md: 60},
              // maxWidth: {xs: 50, md: 60 }
              }}
              alt="rdf"
              src= {backgroundMobileBanner}
          />
            
          {/* front */}
          <Box sx={{
                position:'absolute',
                zIndex:21,
                bottom:0,
                width:'100%',
                px:{xs:0, md:6,lg:12}
                //bgcolor: 'blue'
          }}>
            <Grid container >
              {/* text on sm screen */}
              <Grid item xs={12} sx={{
                display: {xs:'flex', md:'none'},
                justifyContent:'center',
              }}>
                  <Box sx={{
                    display:'flex',
                    alignItems:'baseline',
                    
                  }}>
                    <Box>
                        
                      <Typography  sx={{
                        color: '#96CC1E',
                        fontWeight: 'bold',
                      }}>
                        TONDRO
                      </Typography>
                      
                      <Typography variant='h5' sx={{
                        color: '#96CC1E',
                        fontWeight: 'bold',
                      }}>
                      
                        TOKANA
                      </Typography>
                      <Box display={'flex'} alignItems={'baseline'}>
                          
                        <Typography variant='h6' sx={{
                          color: '#96CC1E',
                          fontWeight: 'bold',
                        }}>
                          TSY MAHAZO HAO
                        </Typography>
                            
                        <Box
                          sx={{
                            width: 5,
                            height: 5,
                            bgcolor: '#96CC1E',
                            mx:1
                          }}
                        />
                      </Box>
                    </Box>
                  </Box>
              </Grid>
              {/* END text on sm screen */}

              <Grid item xs={12} md={7}>
                  
              <Box
                component={'img'}
                sx={{
                  
               // position:'absolute',
               // zIndex:21,
               
                width: {xs:'100%'},
                //height: {md:'50vh',lg:'60vh',xl:'70vh'},
                height: '100%'
                //width: {md:450, xs:'100%'},
                //mt:{xs:3,md:0},
                
                // maxHeight: { xs: 50, md: 60},
                // maxWidth: {xs: 50, md: 60 }
                }}
                alt="rdf"
                src= {teamvolyvolt}
              />
              </Grid>
              <Grid xs={12} md={5} sx={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center'
              }}>

              {/* text on sm screen */}
                
                {/* END text on sm screen */}

                {/* text on large screen */}
                <Box sx={{
                  display: {xs:'none',md:'block'}
                }}>
                  <Typography variant='h5' sx={{
                    color: '#96CC1E',
                    fontWeight: 'bold'
                  }}>
                    TONDRO  
                  </Typography>
                  
                  <Typography variant='h3' sx={{
                    color: '#96CC1E',
                    fontWeight: 'bold',
                    py:2,
                  }}>
                    TOKANA  
                  </Typography>
                  <Typography variant='h4' sx={{
                    color: '#96CC1E',
                    fontWeight: 'bold'
                  }}>
                    TSY MAHAZO HAO  
                  </Typography>

                </Box>
                {/* END text on large screen */}
              </Grid>
            </Grid>

          </Box>

         
          {/* front */}
          </Grid>
    </Grid>
    {/* section 2 */}
    <Box sx={{bgcolor: '#6E9F00'}} px={{xs:2,md:6, lg: 12}} py={3}>
      <Typography variant='h6' color={'white'}>EMBARQUONS DANS L’AVENTURE “ VOLYVOLT” !</Typography>
      <Typography color={'white'}  pt={2}>
      Un proverbe malgache très sage dit : "Tondro tokana tsy mahazo hao", ce qui signifie littéralement qu'un doigt seul ne peut attraper un poux.  CE proverbe met en valeur la nécessité de la solidarité.  dAvec cette sagesse en tête, nous vous invitons à nous rejoindre. Chez VolyVolt, nous mettons la collaboration au cœur de notre mission. Nous croyons fermement que VolyVolt ne peut réussir pleinement sans vous. 
      </Typography>
      <Typography pt={2} color={'white'} fontSize={18}>Rejoignez-nous pour créer une synergie puissante et faire une réelle différence ensemble.</Typography>
    </Box>
    {/* end section 2 */}

    {/* section 3 */}
    <Box px={{xs:2,md:6, lg: 12}} pt={{xs:4,md:3}}>
      <Typography variant='h5' 
            sx={{
              color: '#8BBC1F',
              width: 'fit-content'
            }}>
              COMMENT EMBARQUER DANS L’AVENTURE ?
              <Divider sx={{ borderBottomWidth: 1, bgcolor: '#8BBC1F', mt:1 }} />
          </Typography>
      <Typography pt={3} pb={1} >
      Nous sommes convaincus que le changement positif naît de l'engagement communautaire et de la collaboration. Vous pouvez vous joindre à notre aventure  et contribuer à notre mission de diverses manières significatives :
      </Typography>
    </Box>
    <Grid container px={{xs:2,md:6, lg: 12}} py={3}>
      
      <Grid item xs={12} md={6}>
          <Embarque isHover={isHover} setHover={setHover}
            title='ADOPTER LA SOLUTION'
            image={<ConventionIcon width={120} height={120}/>}
            text={
                <Typography color={'white'} fontSize={{xs:14.5,sm:16}}>
                  Si vous représentez une ONG ou une fondation engagée à avoir un impact tangible au sein des communautés rurales grâce à une électrification propre et fiable, envisagez d'adopter la solution VolyVolt. Explorez 
                  <Link to={'/solution'} style={{textDecoration: 'none' , fontWeight: 'bold' , color: 'white'}}>
                     &nbsp;Notre Solution&nbsp; 
                  </Link> 
                     pour obtenir toutes les informations nécessaires. Si vous souhaitez plus de détails, notre équipe est à votre disposition pour répondre à vos questions. Contactez-nous.
                </Typography>}
            />
      </Grid>
      <Grid item xs={12} md={6}>
          <Embarque isHover={isHover} setHover={setHover}
            title='SOUTENIR FINANCIÈREMENT'
            image={<MoneyIcon width={120} height={120}/>}
            text={
                <Typography color={'white'} fontSize={{xs:14.5,sm:16}}>
                Si l'idée de contribuer financièrement à notre mission vous séduit, vous pouvez faire 
                <Link to='/don' style={{textDecoration: 'none' , fontWeight: 'bold' , color: 'white'}}>&nbsp;un don à VolyVolt&nbsp;</Link>
                . Votre soutien nous aidera à étendre nos opérations, indépendamment des clients et à fournir de l'électricité propre à davantage de communautés rurales, créant ainsi un impact social positif.  Votre don peut faire une réelle différence.
                </Typography>}
            />
      </Grid>

      <Grid item xs={12} md={6}>
          <Embarque isHover={isHover} setHover={setHover}
            title='DEVENIR BENEVOLE'
            image={<VolunteerIcon width={120} height={120}/>}
            text={
                <Typography color={'white'} fontSize={{xs:14.5,sm:16}}>
                  Si notre mission et nos valeurs résonnent en vous, et que vous aspirez à vous impliquer activement, VolyVolt serait enchanté de vous accueillir en tant que bénévole. Découvrez 
                  <span style={{fontWeight: 'bold'}} onClick={()=>setRejoindreDialog(true)}>&nbsp; pourquoi rejoindre VolyVolt&nbsp;</span>
                    peut être une expérience gratifiante. Nous accueillons avec enthousiasme les volontaires désireux d'apporter leur expertise pour soutenir nos projets
                </Typography>}
            />
      </Grid>
      <Grid item xs={12} md={6}>
          <Embarque isHover={isHover} setHover={setHover}
            title='PARTAGER NOS RÉALISATIONS'
            image={<SensibilisationIcon width={120} height={120}/>}
            text={
                <Typography color={'white'} fontSize={{xs:13.5,sm:16}}>
                  La sensibilisation joue un rôle essentiel dans notre mission. En partageant nos réalisations, nos histoires d'impact et nos articles sur les réseaux sociaux, vous contribuez à sensibiliser davantage aux enjeux de l'électrification rurale et à nous aider à gagner en visibilité. Vous augmentez ainsi les chances que les communautés rurales accèdent à l'électricité. Nous avons préparé de 
                  jolis Photoframes
                   que vous pouvez utiliser dans vos publications pour soutenir notre cause.
                </Typography>}
            />
      </Grid>

    </Grid>
    {/* end section 3 */}

    {/* pop up for rejoindre */}
    <RejoindreDialog rejoindreDialog={rejoindreDialog} setRejoindreDialog={setRejoindreDialog}/>
    {/* pop up for rejoindre */}

    {/* sector slider */}
    <Grid container>
      <Grid item xs={12}>
        <Box sx={{position:'relative', width: '100%', height:'fit-content'}}>

          <Box sx={{ position:"absolute",zIndex:20,width: '100%', height:'100%',backgroundColor: 'rgba(8, 45, 14, 0.73)'}}></Box>
          <Box sx={{position: 'absolute', zIndex:21,width: '100%', height:'100%' , display:'flex', alignItems:'center'}}>
            <Typography variant='h5' color={'white'} 
              sx={{ 
                fontWeight: 600,
                px: {xs:3,md:12},
                fontSize: {xs:25,md:39}
              }}>  
              Illuminer les coeurs, <br/>
              Semer le changement, <br/>
              Éclairer les foyers ... <br/>
            </Typography>
          </Box>
          <SliderRight/>
          <SliderLeft/>
        </Box>
        
      </Grid>
    </Grid>
    {/* end sector slider */}

    {/* section nous contacter */}
    <Grid container px={{xs:2,md:6, lg: 12}} pb={6} pt={6} sx={{
      bgcolor: '#2F2121',
      borderBottomLeftRadius: {xs:35,md:50},
    }}>
      <Grid item xs={12} md={6}>
        <Box>
          <Typography variant='h6' sx={{
            color: '#96CC1E'
          }}>NOUS CONTACTER</Typography>
          <Typography variant='h6' fontWeight={600} color={'white'} py={2}>
          Ensemble, nous pouvons éclairer des vies, créer de l'espoir et construire un avenir meilleur pour les communautés rurales de Madagascar. 
          </Typography>
          <Typography color={'white'}>
          Faites part de votre intérêt, posez nous vous questions, ne serons ravis d’interagir avec vous, nous essayerons de répondre à votre message aussitôt que possible . Nous sommes impatients de vous compter au sein de notre communauté engagée.
          </Typography>
        </Box>
      </Grid>

      
      <Grid item xs={12} md={6} position={'relative'}>
        <Stack px={3} py={3} mx={3} width={'100%'} color={'warning'} backgroundColor={'white'} borderRadius={2} spacing={2} position={'absolute'} display={{xs:'none',md:'flex'}}>
          <TextField label='Nom  et Prénoms / Nom de l’organisme' color={'yellowVoly'} />
          <TextField label='Adresse E-mail' color='yellowVoly' />
          <TextField label='Numéro de téléphone' color='yellowVoly' />
          <TextField label='Moyen de communication préféré' color='yellowVoly' />

          <FormControl color='yellowVoly'>

          <InputLabel id="connuvoly">Comment avez-vous connu VolyVolt?</InputLabel>
            <Select labelId="connuvoly" label='Comment avez-vous connu VolyVolt?' color='yellowVoly'>
              <MenuItem value={'Mouteur de recherche'}>Mouteur de recherche</MenuItem>
              <MenuItem value={'Recommandation'}>Recommandation</MenuItem>
              <MenuItem value={'Linkin'}>Linkin</MenuItem>
              <MenuItem value={'Facebook'}>Facebook</MenuItem>
              <MenuItem value={'Evenement'}>Evenement</MenuItem>
              <MenuItem value={'Autre'}>Autre</MenuItem>
            </Select>
          </FormControl>
          
          <TextField label='Objet' color='yellowVoly'/>
          <TextField label='Message' color='yellowVoly' multiline rows={5}/>
          <Button variant='contained' color='yellowVoly'>Envoyez le message</Button>
          <Typography fontSize={12}>
          En soumettant ce formulaire, vous consentez à notre politique de confidentialité et à l'utilisation de vos informations personnelles aux fins de votre demande.
          </Typography>
        </Stack>
      </Grid>
    </Grid>

    {/* formulaire in small screen */}
    <Stack  py={2} mx={1} px={1} my={1}  color={'yellowVoly'} backgroundColor={'white'} borderRadius={2} spacing={2} display={{xs:'flex',md:'none'}}>
          <TextField label='Nom  et Prénoms / Nom de l’organisme' color='yellowVoly' />
          <TextField label='Adresse E-mail' color='yellowVoly' />
          <TextField label='Numéro de téléphone' color='yellowVoly' />
          <TextField label='Moyen de communication préféré' color='yellowVoly' />

          <FormControl color='yellowVoly'>

          <InputLabel id="connuvoly">Comment avez-vous connu VolyVolt?</InputLabel>
            <Select labelId="connuvoly" label='Comment avez-vous connu VolyVolt?' color='yellowVoly'>
              <MenuItem value={'Mouteur de recherche'}>Mouteur de recherche</MenuItem>
              <MenuItem value={'Recommandation'}>Recommandation</MenuItem>
              <MenuItem value={'Linkin'}>Linkin</MenuItem>
              <MenuItem value={'Facebook'}>Facebook</MenuItem>
              <MenuItem value={'Evenement'}>Evenement</MenuItem>
              <MenuItem value={'Autre'}>Autre</MenuItem>
            </Select>
          </FormControl>
          
          <TextField label='Objet' color='yellowVoly'/>
          <TextField label='Message' color='yellowVoly' multiline rows={5}/>
          <Button variant='contained' color='yellowVoly'>Envoyez le message</Button>
          <Typography fontSize={12}>
          En soumettant ce formulaire, vous consentez à notre politique de confidentialité et à l'utilisation de vos informations personnelles aux fins de votre demande.
          </Typography>
        </Stack>
    {/* end formulaire in small screen */}

    {/* section contact info */}
    <Grid container px={{xs:2,md:6, lg: 12}} py={{xs:3,md:12}}>
      <Grid item xs={12} md={6}>
        <Stack direction={'row'} alignItems={'center'} spacing={2}>
          <PhoneIcon width={60} height={60}/>
          <Typography variant='h6' sx={{
            color: '#2F2121',
            fontWeight: 600
          }}>
          +261 32 90 600 32
          </Typography>
        </Stack>
        <Stack direction={'row'} alignItems={'center'} spacing={2} py={3}>
          <LocalityIcon width={60} height={60}/>
          <Typography variant='h6' sx={{
            color: '#2F2121',
            fontWeight: 600
          }}>
          Tour Redland
          </Typography>
        </Stack>
        <Stack direction={'row'} alignItems={'center'} spacing={2}>
          <MailIcon  width={40} height={40}/>
          <Typography variant='h6' sx={{
            color: '#2F2121',
            fontWeight: 600
          }}>
          Volyvolt.contact@gmail.com
          </Typography>
        </Stack>
      </Grid>
    </Grid>
    {/* end section contact info */}

    {/* reseaux sociaux */}
    <Grid container px={{xs:2,md:6, lg: 12}} pb={6}>
      <Grid item xs={12} md={6} display={'flex'} alignItems={'center'} flexDirection={{xs:'column', sm:'row'}}> 
          <Typography>Nous suivre sur les réseaux :</Typography>
          <Stack direction={'row'} pl={2} spacing={1} pt={{xs:1,sm:0}}>
            <FbOutlinedIcon isHover={isHover} setHover={setHover}/>
            <InstagramOutlined isHover={isHover} setHover={setHover}/>
            <TwitterOutlined isHover={isHover} setHover={setHover}/>
            <LinkedInOutlinedIcon isHover={isHover} setHover={setHover}/>
          </Stack>
      </Grid>
    </Grid>
    {/* end reseaux sociaux */}
    {/* end section nous contacter */}
   </Box>
  )
}

/*

 <Box sx={{
                position:'absolute',
                zIndex:21,
                display: {xs: 'flex', md:'none'},
                width:'100%',
                bgcolor: 'blue'
          }}>
            <Typography>TONDRO  TOKANA TSY MAHAZO HAO</Typography>
            <Box sx={{width:20,height:20}}></Box>
          </Box>



*/