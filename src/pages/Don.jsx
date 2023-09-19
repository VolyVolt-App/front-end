import { Box, Button, FormControl, Grid, InputLabel, List, ListItem, MenuItem, TextField, Typography, Select, FormGroup, FormControlLabel, Checkbox, Divider } from '@mui/material'
import React, { useState } from 'react'
import madalogo from '../asset/logo/icons8-madagascar-96 1.png'

import '../styles/backgroundImage.css'

import { Cart } from '../asset/dynamic/Cart'
import { PaypalIcon } from '../asset/dynamic/PaypalIcon'

import mastercardImage from '../asset/logo/mastercard.png'
import visaIcon from '../asset/logo/visa.png'
import { ThxDialog } from '../component/don/ThxDialog'

export const Don = () => {
  const [once,setOnce] = useState(true)
  const [isPaypal, setPaypal] = useState(false)
  const [thxDialog, setThxDialog] = useState(false)
  return (
    <Box id='imgbg'
      sx={{
        background: 'linear-gradient(332deg, rgba(255, 255, 255, 0.00) 17.71%, rgba(209, 229, 213, 0.00) 29.01%, rgba(4, 55, 13, 0.67) 73.31%)',
        position: 'relative'
      }}
    >
      <ThxDialog thxDialog={thxDialog} setThxDialog={setThxDialog}/>
      <Box
        sx={{
          //background: 'linear-gradient(270deg, #00000088 40%, #ff8e5300 100%)',
          background: 'linear-gradient(180deg, green 40%, #ffffff00 100%)',
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          position: 'absolute',
          width: '100%',
          height: '100%',
          zIndex: -99
        }}
      >
      </Box>
      {/* section intro */}
      <Grid container px={{xs:2,md:6,lg:12}} pt={9} sx={{
           // backgroundColor: '#082D0E'
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
      {/* end section intro */}

      {/* section first pay */}
      <Grid container py={3} px={{xs:2,md:6,lg:12}}>
        {/* mon don */}
        <Grid item xs={12} md={6} lg={3.9} borderRadius={2} overflow={'hidden'} mr={1} sx={{bgcolor: 'rgba(251, 255, 241, 0.55)', height: 'fit-content'}}>
          <Box>
            <Typography variant='h6' align='center' sx={{
              bgcolor: '#2F2121',
              color: 'white',
              p:2,

            }}>
                1.MON DON
            </Typography>
            <Box p={2}>

              {/* bouton top */}
              <Box display={'flex'} justifyContent={'center'} pb={2}>
                <Button variant={once?'contained':'outlined'} color='yellowVoly' sx={{flexGrow:1}}
                onClick={
                  ()=>{
                    setOnce(true)
                    setPaypal(false)
                    }}>
                Je donne une fois
                </Button>
                <Button variant={!once?'contained':'outlined'} color='yellowVoly' sx={{ml:1, flexGrow:1}}
                onClick={()=>setOnce(false)}>
                Je donne une fois
                </Button>
              </Box>
              {/* end bouton top */}
              <Box display={'flex'} >
              
                  <TextField  color='yellowVoly' 
                    label='Entrez le montant'
                    size='small'
                    sx={{
                      flexGrow:1
                    }}/>
                  <Box ml={1}>
                    <FormControl >
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        //value={'MGA'}
                        //label="Age"
                        size='small'
                        sx={{
                          width: 100
                        }}
                        //onChange={handleChange}
                      >
                        <MenuItem value={10}>MGA</MenuItem>
                        <MenuItem value={20}>Euro</MenuItem>
                        <MenuItem value={30}>Dollar</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
              </Box>
              <FormGroup sx={{py:2}}>
                <FormControlLabel control={<Checkbox size='small'/>} label="Si vous ne souhaitez pas recevoir des informations venant de Volyvolt, veuillez cocher cette case. " />
              </FormGroup>
            </Box>
          </Box>
        </Grid>
        {/* end mon don */}

        {/* Coordonee */}
        <Grid item xs={12} md={6} lg={3.9} borderRadius={2} overflow={'hidden'} mx={0.5} sx={{bgcolor: 'rgba(251, 255, 241, 0.55)', height: 'fit-content'}}>
          <Box>
            <Typography variant='h6' align='center' sx={{
              bgcolor: '#2F2121',
              color: 'white',
              p:2,

            }}>
                2.MES COORDONNÉES
            </Typography>
            <Box p={2}>

              
              <TextField label='E-mail' color='yellowVoly' size='small' fullWidth/>
              <FormGroup sx={{py:1}}>
                <FormControlLabel control={<Checkbox size='small'/>} label="Je fais un don au nom d’une organisation. " />
              </FormGroup>
              
              <Box display={'flex'} >
                  
                  <Box mr={1}>
                    <FormControl size='small' color='yellowVoly'>
                      
                    <InputLabel id="Civilité">Civilité</InputLabel>
                      <Select
                        labelId="Civilité"
                        id="Civilité-p"
                        //value={'MGA'}
                        label="Civilité"
                        //size='small'
                        sx={{
                          width: 100
                        }}
                        //onChange={handleChange}
                      >
                        <MenuItem value={'Monsieur'}>Monsieur</MenuItem>
                        <MenuItem value={'Madame'}>Madame</MenuItem>
                        <MenuItem value={'Mademoiselle'}>Mademoiselle</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                  <TextField  color='yellowVoly' 
                    label='Prénom'
                    size='small'
                    sx={{
                      flexGrow:1
                    }}/>
              </Box>
              <TextField label='Nom' color='yellowVoly' size='small' fullWidth sx={{mt:2,mb:1}}/>
              <TextField label='Adresse' color='yellowVoly' size='small' fullWidth sx={{my:1}}/>
              <Box display={'flex'} my={1}>
                <TextField  color='yellowVoly' 
                      label='Code Postale'
                      size='small'
                      sx={{
                        flexGrow:1,
                        mr:0.5
                }}/>
                <TextField  color='yellowVoly' 
                    label='Ville'
                    size='small'
                    sx={{
                      flexGrow:1,
                      ml:0.5
                }}/>
              </Box>
              <FormControl size='small' color='yellowVoly' fullWidth sx={{my:1}}>
                      
                      <InputLabel id="nationalite">Nationalité</InputLabel>
                        <Select
                          labelId="nationalite"
                          id="nationalite-p"
                          //value={'MGA'}
                          label="Nationalité"
                        
                          
                          //onChange={handleChange}
                        >
                          <MenuItem value={'Madagascar'}>
                            <Box display={'flex'}>
                              <Box
                              component={'img'}
                              alt='madalogo'
                              src={madalogo}
                              />
                            </Box>
                            <Typography>
                              Madagascar
                            </Typography>
                          </MenuItem>
                        </Select>
              </FormControl>
            </Box>
          </Box>
        </Grid>
        {/* END Coordonee */}

        {/* Reglement */}
        <Grid item xs={12} md={6} lg={3.9} borderRadius={2} overflow={'hidden'} ml={1} sx={{bgcolor: 'rgba(251, 255, 241, 0.55)', height: 'fit-content'}}>
          <Box>
            <Typography variant='h6' align='center' sx={{
              bgcolor: '#2F2121',
              color: 'white',
              p:2,

            }}>
                3. MON RÈGLEMENT
            </Typography>
            <Box p={2}>

              {/* text top Plateforme de paiement 100% sécurisée*/}
              <Typography align='center' pb={3} pt={1}>Plateforme de paiement 100% sécurisée</Typography>

              {/* paypal or carte bancaire */}
              <Box display={'flex'} justifyContent={'center'}>
                  <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    cursor: 'pointer'
                  }}
                  onClick={()=>setPaypal(false)}>
                    <Cart active={!isPaypal}/>
                    <Typography sx={{
                      color: !isPaypal ?'#2F2121':'rgba(47, 33, 33, 0.60)',
                      mt:1
                    }}>
                      PAYER PAR CARTE BANCAIRE
                      {!isPaypal && <Divider sx={{ borderBottomWidth: 9, bgcolor: '#2F2121', mt:1 }} />}
                    </Typography>
                  </Box>

                  {once && <Box 
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    ml:1,
                    cursor: 'pointer'
                  }}
                  onClick={()=> setPaypal(true)}
                  >
                    <PaypalIcon active={isPaypal}/>
                    <Typography sx={{
                      color: isPaypal ?'#2F2121':'rgba(47, 33, 33, 0.60)',
                      mt:1
                    }}>
                      PAYER VIA PAYPAL
                      
                      {isPaypal && <Divider sx={{ borderBottomWidth: 9, bgcolor: '#2F2121', mt:1 }} />}
                    </Typography>
                  </Box>}
              </Box>
              {/* END paypal or carte bancaire */}

              { ! isPaypal &&
              <>
              {/* check box mastercard or visa*/}
              
              <Box sx={{ display:'flex', justifyContent: 'center', py:4}}>
                  <Box  sx={{display: 'flex', flexDirection:'column', alignItems:'center'}}>
                    <Box
                      component={'img'}
                      alt='mastercard'
                      src={mastercardImage}
                    />
                    <Checkbox size='large'/>
                  </Box>
                  <Box  pl={3} sx={{display: 'flex', flexDirection:'column', alignItems:'center'}}>
                    <Box
                      component={'img'}
                      alt='visa'
                      src={visaIcon}
                    />
                    <Checkbox size='large'/>
                  </Box>
              </Box>
              {/* END check box mastercard or visa*/}

              {/* sector final */}
              <TextField label='Numéro de carte bancaire' color='yellowVoly' size='small' fullWidth sx={{mb:2}}/>
              <Box sx={{
                display: 'flex',

              }}>
              <FormControl size='small' color='yellowVoly' sx={{width:'40%'}}>
                      
                      <InputLabel id="mois">Mois</InputLabel>
                        <Select
                          labelId="mois"
                          id="mois-p"
                          //value={'MGA'}
                          label="Mois"
                        
                          
                          //onChange={handleChange}
                        >
                          <MenuItem value={'Janvier'}>
                            Janvier
                          </MenuItem>
                          
                          <MenuItem value={'Janvier'}>
                            Fevrier
                          </MenuItem>
                        </Select>
              </FormControl>

              <FormControl size='small' color='yellowVoly' sx={{width:'40%', px:1}}>
                      
                      <InputLabel id="Année">Année</InputLabel>
                        <Select
                          labelId="Année"
                          id="Année-p"
                          //value={'MGA'}
                          label="Année"
                        
                          
                          //onChange={handleChange}
                        >
                          <MenuItem value={'2021'}>
                            2021
                          </MenuItem>
                          
                          <MenuItem value={'2023'}>
                            2023
                          </MenuItem>
                        </Select>
              </FormControl>
              
              <TextField label='CVC' color='yellowVoly' size='small' sx={{width:'20%'}}/>
              </Box>
              {/* end sector final */}
              </>
}
              {/* valider */}
                <Button variant='contained' color='yellowVoly' fullWidth sx={{my:3}} onClick={()=>setThxDialog(true)}>
                VALIDER
                </Button>
              {/* end valider */}
            </Box>
          </Box>
        </Grid>
        {/* END Reglement */}
      </Grid>
      {/* section first pay */}
    </Box>
  )
}
