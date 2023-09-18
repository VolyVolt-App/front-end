import { Grid, Box, Typography, Button, Divider, Stack, Chip } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import '../styles/accordion.css'

import { motion } from 'framer-motion'

import bannerImage from '../asset/image/banner-image.png'
import { ReactComponent as ValuePropositionOne } from '../asset/icon/val1.svg'
import { ReactComponent as ValuePropositionTwo } from '../asset/icon/icons-commitment 1.svg'
import { ReactComponent as ValuePropositionThree } from '../asset/icon/icons-clee 1.svg'
import { ReactComponent as ValuePropositionFour } from '../asset/icon/icons-eco 1.svg'


import videoImg from '../asset/image/video.png'
import article1 from '../asset/image/image 19.png'
import article2 from '../asset/image/image 20.png'
import article3 from '../asset/image/travailleurs-campagne-ensemble-terrain 1.png'
//import { ReactComponent as OddTwo } from '../asset/image/odd2.svg'
import { ReactComponent as OddSeven } from '../asset/image/odd7_adobe_express.svg'
import { ReactComponent as OddNine } from '../asset/image/odd09_adobe_express.svg'
import { ReactComponent as OddTen } from '../asset/image/odd10_adobe_express.svg'
import { ReactComponent as OddEleven } from '../asset/image/odd11.svg'
import { ReactComponent as OddThirteen } from '../asset/image/odd13_adobe_express.svg'
import { ReactComponent as OddSeventeen } from '../asset/image/odd17.svg'

import { Articles } from '../component/Home/Articles'
import { Mission } from '../component/Home/mission/Mission'
import { Histoire } from '../component/Home/mission/Histoire'

import { Valeurs } from '../component/Home/mission/Valeurs'

import ScrollAnimationLayout from '../component/Layout/ScrollAnimationLayout'


export const Home = () => {
  //mission
  const [mission, setMission] = useState('mission')

 // const refMission = useRef


  /*const handleMission = (mission) => {
    setMission(mission)
  }*/

  //for odd


  const refOddSeventeen = useRef(null)
  const refOddSeven = useRef(null)
  const refOddNine = useRef(null)
  const refOddTen = useRef(null)
  const refOddEleven = useRef(null)
  const refOddThirteen = useRef(null)

  const handleCollapseOddSeventeen = () => {
    refOddSeventeen.current.style.maxWidth=refOddSeventeen.current.scrollWidth+'px'
    refOddSeven.current.style.maxWidth= null
    refOddNine.current.style.maxWidth= null
    refOddTen.current.style.maxWidth= null
    refOddEleven.current.style.maxWidth= null
    refOddThirteen.current.style.maxWidth= null
   // refTwo.current.style.maxWidth=null
  }

  const handleCollapseOddSeven = () => {
    refOddSeven.current.style.maxWidth=refOddSeven.current.scrollWidth+'px'
    refOddSeventeen.current.style.maxWidth= null
    refOddNine.current.style.maxWidth= null
    refOddTen.current.style.maxWidth= null
    refOddEleven.current.style.maxWidth= null
    refOddThirteen.current.style.maxWidth= null
  }
  const handleCollapseOddNine = () => {
    refOddNine.current.style.maxWidth=refOddNine.current.scrollWidth+'px'
    refOddSeven.current.style.maxWidth= null
    refOddSeventeen.current.style.maxWidth= null
    refOddTen.current.style.maxWidth= null
    refOddEleven.current.style.maxWidth= null
    refOddThirteen.current.style.maxWidth= null
  }
  const handleCollapseOddTen = () => {
    refOddTen.current.style.maxWidth=refOddTen.current.scrollWidth+'px'
    refOddSeven.current.style.maxWidth= null
    refOddNine.current.style.maxWidth= null
    refOddSeventeen.current.style.maxWidth= null
    refOddEleven.current.style.maxWidth= null
    refOddThirteen.current.style.maxWidth= null
  }
  const handleCollapseOddEleven = () => {
    refOddEleven.current.style.maxWidth=refOddEleven.current.scrollWidth+'px'
    refOddSeven.current.style.maxWidth= null
    refOddNine.current.style.maxWidth= null
    refOddTen.current.style.maxWidth= null
    refOddSeventeen.current.style.maxWidth= null
    refOddThirteen.current.style.maxWidth= null
  }
  const handleCollapseOddThirteen = () => {
    refOddThirteen.current.style.maxWidth=refOddThirteen.current.scrollWidth+'px'
    refOddSeven.current.style.maxWidth= null
    refOddNine.current.style.maxWidth= null
    refOddTen.current.style.maxWidth= null
    refOddEleven.current.style.maxWidth= null
    refOddSeventeen.current.style.maxWidth= null
  }

  useEffect(()=>{
    refOddSeven.current.style.maxWidth=refOddSeven.current.scrollWidth+'px'
  },[])

  const titleVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      }
    }
  }

  return (
  <>
    <Grid container px={{xs:2,md:14}} pt={9} sx={{
        backgroundColor: '#082D0E'
      }}>
      <ScrollAnimationLayout>
        <Typography component={motion.h5} align='center' variant='h5' sx={{
          color: '#96CC1E',
          fontSize: {xs:18,md:23},
          fontWeight: 'bold',
        }}
          variants={titleVariants}
          initial="initial"
          animate="visible"
        >
          Bienvenue chez VolyVolt, où chaque projet est une ode à la responsabilité sociale, à l’impact positif, et à un avenir plus lumineux pour tous.
        </Typography>
      </ScrollAnimationLayout>
    </Grid>

    <Grid container pt={3} justifyContent={'center'}  
      sx={{
        backgroundColor: '#082D0E'
      }}>
      <Grid item xs={12} md={5} px={1}>
        <ScrollAnimationLayout>
          <Typography variant='h6' mt={3} color={'white'}
          sx={{
          fontFamily: 'Assistant',
          }}>
          Imaginez un avenir où votre engagement a le pouvoir de faire briller un foyer et d’inspirer des sourires au sein des communautés rurales. 
          </Typography>
          <Typography sx={{color: '#bbb'}}>
          Collaborer avec VolyVolt, c'est bien plus que cultiver de l'énergie durable, c'est semer la transformation,  récolter la gratitude de ceux que vous aidez. 
          </Typography>
        </ScrollAnimationLayout>
        <Box mt={2} display={'flex'} justifyContent={{xs:'center',md:'start'}}>
          <ScrollAnimationLayout>
          <Button variant='contained' size='small' sx={{ color: '#fff'}} >NOTRE SOLUTION</Button> 
          </ScrollAnimationLayout>
          <ScrollAnimationLayout>
          <Button variant='outlined' size='small'
            sx={{
              marginLeft: 2
            }}>
              COLLABORER AVEC NOUS
          </Button>
          </ScrollAnimationLayout>
        </Box>
      </Grid> {/* end grid */}
      
      <Grid item xs={12} md={5} display={'flex'} pl={{xs:0, md:3}} >
      <Box
         component={motion.img}
         sx={{
          width: {md:450, xs:'100%'},
          mt:{xs:3,md:0},
          
         // maxHeight: { xs: 50, md: 60},
         // maxWidth: {xs: 50, md: 60 }
         }}
         alt="rdf"
         src= {bannerImage}
        />
      </Grid> {/* end grid */}

    </Grid> {/*end container */}


    <Typography variant='h5' align='center' p={2} sx={{
      backgroundColor: '#082D0E',
      fontFamily: 'Assistant',
      color: '#ffbe18',
      pb:3,
      pt:3
    }}>
      <ScrollAnimationLayout>
    “Illuminer les cœurs, semer le changement et éclairer les foyers”
    </ScrollAnimationLayout>
    </Typography>
{/* end voloan */}
{/* faharoa */}
    <Grid container
      sx={{
        backgroundColor: '#638715',
      }}>

      <Grid item xs={6} sm={6} md={3} mt={1}  display={'flex'} flexDirection={'column'} alignItems={'center'}
        sx={{
          p: {xs: 1,sm: 3, md: 3}
        }}>
        {/*<Box
         component={'img'}
         sx={{
          height: 60,
          width: 60,
          maxHeight: { xs: 50, md: 60},
          maxWidth: {xs: 50, md: 60 }
         }}
         alt="rdf"
         src= {img1}
        />*/}

        <ScrollAnimationLayout>
          <ValuePropositionOne width={70} height={70}/>
        </ScrollAnimationLayout>
        <ScrollAnimationLayout>
        <Typography align='center' mt={1} sx={{color: '#fff'}}>
          Accès à l’énergie verte  à partir des cultures locales
        </Typography>
        </ScrollAnimationLayout>
      </Grid> {/* end grid item*/}

      
      <Grid item xs={6} sm={6} md={3} mt={1}  display={'flex'} flexDirection={'column'} alignItems={'center'}
        sx={{
          p: {xs: 1,sm: 3, md: 3}
        }}>
        {/*<Box
         component={'img'}
         sx={{
          height: 60,
          width: 60,
          maxHeight: { xs: 50, md: 60},
          maxWidth: {xs: 50, md: 60 }
         }}
         alt="rdf"
         src= {img2}
        />*/}

        <ScrollAnimationLayout>
          <ValuePropositionTwo width={70} height={70}/>
        </ScrollAnimationLayout>
        <ScrollAnimationLayout>
          <Typography align='center' mt={1} sx={{color: '#fff'}}>
            Renforcement de la Responsabilité Sociale des ONGs et des fondations
          </Typography>
        </ScrollAnimationLayout>
      </Grid> {/* end grid item*/}
      
      <Grid item xs={6} sm={6} md={3} mt={1}  display={'flex'} flexDirection={'column'} alignItems={'center'}
        sx={{
          p: {xs: 1,sm: 3, md: 3}
        }}>
        <ScrollAnimationLayout>
          <ValuePropositionThree width={70} height={70}/>
        </ScrollAnimationLayout>

        <ScrollAnimationLayout>
          <Typography align='center' mt={1} sx={{color: '#fff'}}>
          Une solution clé en main pour l'électrification rurale
          </Typography>
        </ScrollAnimationLayout>
      </Grid> {/* end grid item*/}

      
      <Grid item xs={6} sm={6} md={3} mt={1}  display={'flex'} flexDirection={'column'} alignItems={'center'}
        sx={{
          p: {xs: 1,sm: 3, md: 3}
        }}>
        <ScrollAnimationLayout>
          <ValuePropositionFour width={70} height={70} />
        </ScrollAnimationLayout>
        <ScrollAnimationLayout>
          <Typography align='center' mt={1} sx={{color: '#fff'}}>
          Une éléctrification à moindre coûts  au sein des foyers ruraux
          </Typography>
        </ScrollAnimationLayout>
      </Grid> {/* end grid item*/}

    </Grid> {/* end grid container */}
    
{/* end faharoa */}

{/* mission */}
    <Grid container pl={{xs:2, md:6}} pr={{xs:2, md:0}} py={3} justifyContent={'space-between'}
      sx={{
        '& .hoverbuttonnn': {
          backgroundColor: '#8BBC1F'
        },
        '& .missionTextActive': {
          fontWeight: 'bold',
          fontSize: 16,
          fontStyle: 'Assistant'
        }
      }}>
      {/* nav on small */}
      <Grid item xs={12} sm={12} display={{xs:'block',md:'none'}}
      sx={{
        '& .missionTextActive': {
          fontWeight: 'bold',
          fontSize: 16,
          fontStyle: 'Assistant',
          right: {xs:'10%',sm:'20%'},
        },
        '& .missionButtonActive': {
          backgroundColor: '#8BBC1F'
        }
      }} >
        <Box display={'flex'} mb={3} mt={6}>

          <Box width={'33.333%'} position={'relative'} onClick={()=>setMission('mission')}
          sx={{
            '&:hover':{
              cursor: 'pointer',
              '& .hoverbutton': {
                backgroundColor: '#8BBC1F'
            },
            '& .hovertext': {
                fontWeight: 'bold',
                fontSize: 16,
                fontStyle: 'Assistant',
                right: {xs:'18%',sm:'20%'},
              }
              }
          }}>     
            <Divider variant='fullwidth'>
              <Typography
              className={ mission === 'mission' ? 'hovertext missionTextActive': 'hovertext'}
              sx={{
                position: 'absolute',
                top: -25,
                right: {xs:'20%',sm:'28%'},
                fontSize: 13
              }}>Notre Mission</Typography>
              <Chip 
              className={ mission === 'mission' ? 'hoverbutton missionButtonActive': 'hoverbutton'}
              sx={{width:26, height:26 }}/>
            </Divider>
          </Box>
          <Box width={'33.333%'} position={'relative'} onClick={()=>setMission('histoire')}
          sx={{
            '&:hover':{
              cursor: 'pointer',
              '& .hoverbutton': {
                backgroundColor: '#8BBC1F'
            },
            '& .hovertext': {
                fontWeight: 'bold',
                fontSize: 16,
                fontStyle: 'Assistant',
                right: {xs:'18%',sm:'20%'},
              }
              }
          }}>     
            <Divider variant='fullwidth'>
              <Typography
              className={ mission === 'histoire' ? 'hovertext missionTextActive': 'hovertext'}
              sx={{
                position: 'absolute',
                top: -25,
                right: {xs:'20%',sm:'28%'},
                fontSize: 13
              }}>Notre Histoire</Typography>
              <Chip 
              className={ mission === 'histoire' ? 'hoverbutton missionButtonActive': 'hoverbutton'}
              sx={{width:26, height:26 }}/>
            </Divider>
          </Box>

          <Box width={'33.333%'} position={'relative'} onClick={()=>setMission('valeurs')}
          sx={{
            '&:hover':{
              cursor: 'pointer',
              '& .hoverbutton': {
                backgroundColor: '#8BBC1F'
            },
            '& .hovertext': {
                fontWeight: 'bold',
                fontSize: 16,
                fontStyle: 'Assistant',
                right: {xs:'18%',sm:'20%'},
              }
              }
          }}>     
            <Divider variant='fullwidth'>
              <Typography
              className={ mission === 'valeurs' ? 'hovertext missionTextActive': 'hovertext'}
              sx={{
                position: 'absolute',
                top: -25,
                right: {xs:'25%',sm:'28%'},
                fontSize: 13
              }}>Nos Valeurs</Typography>
              <Chip 
              className={ mission === 'valeurs' ? 'hoverbutton missionButtonActive': 'hoverbutton'}
              sx={{width:26, height:26 }}/>
            </Divider>
          </Box>
        </Box>
        
      </Grid>
      {/* end nav on small */}
      <Grid item xs={12} sm={12} md={10} >

        {/* mission */}
        {mission === 'mission' && <Mission/>}
        {mission === 'histoire' && <Histoire/>}
        {mission === 'valeurs' && <Valeurs/>}
        
        


      </Grid>
      <Grid item xs={2} sm={2} md={1} display={{xs:'none',md:'block'}}
        sx={{
          '& .missionTextActive': {
            fontWeight: 'bold',
            fontSize: 16,
            fontStyle: 'Assistant'
          },
          '& .missionButtonActive': {
            backgroundColor: '#8BBC1F'
          }
        }}>
          <Box display={'flex'} flexDirection={'column'} alignItems={'stretch'} height={'100%'}>
            <Box height={'33.333%'} >
              <Divider orientation='vertical' variant='fullwidth'  sx={{
              }}>
                <Stack direction='row' justifyContent='center' onClick={()=>setMission('mission')}
                  sx={{
                    position:'relative',
                    '&:hover':{
                      cursor: 'pointer',
                      '& .hoverbutton': {
                        backgroundColor: '#8BBC1F'
                      },
                      '& .hovertext': {
                        fontWeight: 'bold',
                        fontSize: 16,
                        fontStyle: 'Assistant'
                      }
                    }
                    
                  }}>
                  <Typography className={ mission === 'mission' ? 'hovertext missionTextActive': 'hovertext'} 
                    sx={{
                      position: 'absolute', 
                      right:'80%',
                      fontSize: 13
                      }}>
                      Notre Mission
                  </Typography>
                  
                  <Chip className={ mission === 'mission' ? 'hoverbutton missionButtonActive': 'hoverbutton'}
                    sx={{
                      width:26, 
                      height:26,
                      
                    }}
                    />
                  
                </Stack>
              </Divider>
            </Box>
            <Box height={'33.333%'} >
              <Divider orientation='vertical' variant='fullwidth'  sx={{
              }}>
              <Stack direction='row' justifyContent='center' onClick={()=>setMission('histoire')}
                sx={{
                  position:'relative',
                  '&:hover':{
                    cursor: 'pointer',
                    '& .hoverbutton': {
                      backgroundColor: '#8BBC1F'
                    },
                    '& .hovertext': {
                      fontWeight: 'bold',
                      fontSize: 16,
                      fontStyle: 'Assistant'
                    }
                  }
                  
                }}>
                <Typography className={ mission === 'histoire' ? 'hovertext missionTextActive': 'hovertext'} 
                  sx={{
                    position: 'absolute', 
                    right:'80%',
                    fontSize: 13
                    }}>
                    Notre Histoire
                </Typography>
                
                <Chip className={ mission === 'histoire' ? 'hoverbutton missionButtonActive': 'hoverbutton'}
                  sx={{
                    width:26, 
                    height:26,
                    
                  }}
                  />
                
              </Stack>
            </Divider>
            </Box>
            <Box height={'33.333%'} >
              <Divider orientation='vertical' variant='fullwidth'  sx={{
              }}>
              <Stack direction='row' justifyContent='center' onClick={()=>setMission('valeurs')}
                sx={{
                  position:'relative',
                  '&:hover':{
                    cursor: 'pointer',
                    '& .hoverbutton': {
                      backgroundColor: '#8BBC1F'
                    },
                    '& .hovertext': {
                      fontWeight: 'bold',
                      fontSize: 16,
                      fontStyle: 'Assistant'
                    }
                  }
                  
                }}>
                <Typography className={ mission === 'valeurs' ? 'hovertext missionTextActive': 'hovertext'} 
                  sx={{
                    position: 'absolute', 
                    right:'80%',
                    fontSize: 13
                    }}>
                    Nos Valeurs
                </Typography>
                
                <Chip className={ mission === 'valeurs' ? 'hoverbutton missionButtonActive': 'hoverbutton'}
                  sx={{
                    width:26, 
                    height:26,
                    
                  }}
                  />
                
              </Stack>
            </Divider>
            </Box>
          </Box>
          {/* 
          <Divider orientation='vertical' variant='fullwidth'  sx={{
            }}>
              <Stack direction='row' justifyContent='center' sx={{ marginRight:5}} spacing={1}>
                <Typography>feno</Typography>
                <Chip sx={{width:26, height:26}}/>
              </Stack>
          </Divider>
        
          */}
        
        
    
        
      </Grid>

    </Grid>
{/* end mission */}

{/* cibles*/}
    {/* video */}
    <Grid container px={{xs:1,md:6}} py={5} sx={{backgroundColor:'#082D0E'}} alignItems={'center'}>
            <Grid item xs={12} sm={12} md={6}>
              <Box
                component={'img'}
                sx={{
                
                  width: '100%',
                }}
                alt="rdf"
                src= {videoImg}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} >
              <Box margin={'0px auto'} width={{xs:'100%',md:'80%'}}>
              <ScrollAnimationLayout>
                <Typography variant='h6' align='center' pb={3} pt={{xs:3,md:0}}
                  sx={{
                    color: '#8BBC1F',
                    fontWeight: 'bold',
                  }}>À QUI S’ADRESSE LA SOLUTION VOLYVOLT?
                  
                  <Divider variant="middle" sx={{ borderBottomWidth: 1, bgcolor: '#8BBC1F', mt:1 }} />
                </Typography>
              </ScrollAnimationLayout>
              <ScrollAnimationLayout>
                <Typography color={'white'}>Notre solution d'électrification rurale est spécialement conçue pour : </Typography>
              </ScrollAnimationLayout>
              <ul>
                <ScrollAnimationLayout><li><Typography color={'white'}>les ONG </Typography></li></ScrollAnimationLayout>
                <ScrollAnimationLayout><li><Typography color={'white'}>les fondations engagées  </Typography></li></ScrollAnimationLayout>
              </ul>
              <ScrollAnimationLayout>
                <Typography color={'white'}>               
                  La solution VolyVolt s’adresse aux acteurs du secteur philanthropique et du développement durable qui cherchent à avoir un impact positif en fournissant de l'énergie propre aux populations rurales.
                </Typography>
              </ScrollAnimationLayout>
              </Box>
            </Grid>
            

          </Grid>
    {/* end video */}

{/* end cible*/}

{/* ODD */}
    <Grid container sx={{backgroundColor: '#082D0E'}} py={2} >
      <ScrollAnimationLayout>
        <Typography variant='h6'  pb={3} px={{xs:1,md:6}} 
            sx={{
              color: '#8BBC1F',
              fontWeight: 'bold',
            }}>
              Comment participons-nous à l’atteinte des ODD?
              <Divider variant="fullwidth" sx={{ borderBottomWidth: 1, bgcolor: '#8BBC1F', mt:1 }} />
          </Typography>
        </ScrollAnimationLayout>
        
      <Grid item xs={12} md={12} lg={12}>
        <Box display={'flex'} flexWrap={'wrap'} justifyContent={'center'} >
            

            <Box 
              sx={{
                width: {xs:120, sm: 150, md:150},
                marginLeft: 1,
                cursor: 'pointer',
                '&:hover':{
                  border: '2px solid transparent',
                }
              }}>
              <OddSeven width={'100%'} onClick={handleCollapseOddSeven}/>
            </Box>{/* end odd two */}

            <Box ref={refOddSeven}className='panel-horizontal' >{/* start tobecollapse */}
              <Box p={{sm:1,md:2}} sx={{
                backgroundColor: '#FCC30B',
                marginBottom: {xs:1, sm: 1},
                height: {xs:120,sm:150,md:150},
                width: {xs:350,sm:400, md: 490}
              }}>
              <Typography align='center' color={'white'}
              sx={{
                fontSize: {xs:13, sm: 14.5, lg:15}
              }}>En optimisant la productivité agricole grâce à notre technologie de prédiction agricole basée sur l'intelligence artificielle, nous aidons les agriculteurs à améliorer leurs rendements et à accroître la production alimentaire dans les zones rurales, contribuant ainsi à l'éradication de la faim.</Typography>
 
              </Box>
            </Box>{/* tobecollapse */}

            <Box 
              sx={{
                width: {xs:120, sm: 150, md:150},
                marginLeft: 1,
                cursor: 'pointer',
                '&:hover':{
                  border: '2px solid transparent',
                }
              }}>
              <OddNine width={'100%'} onClick={handleCollapseOddNine}/>
            </Box>{/* end odd two */}

            <Box ref={refOddNine}className='panel-horizontal' >{/* start tobecollapse */}
              <Box p={{sm:1,md:2}} sx={{
                backgroundColor: '#F36D25',
                marginBottom: {xs:1, sm: 1},
                height: {xs:120,sm:150,md:150},
                width: {xs:350,sm:400, md: 490}
              }}>
              <Typography align='center' color={'white'}
              sx={{
                fontSize: {xs:13, sm: 14.5, lg:15}
              }}>En optimisant la productivité agricole grâce à notre technologie de prédiction agricole basée sur l'intelligence artificielle, nous aidons les agriculteurs à améliorer leurs rendements et à accroître la production alimentaire dans les zones rurales, contribuant ainsi à l'éradication de la faim.</Typography>
 
              </Box>
            </Box>{/* tobecollapse */}

            <Box 
              sx={{
                width: {xs:120, sm: 150, md:150},
                marginLeft: 1,
                cursor: 'pointer',
                '&:hover':{
                  border: '2px solid transparent',
                }
              }}>
              <OddTen width={'100%'} onClick={handleCollapseOddTen}/>
            </Box>{/* end odd two */}

            <Box ref={refOddTen}className='panel-horizontal' >{/* start tobecollapse */}
              <Box p={{sm:1,md:2}} sx={{
                backgroundColor: '#DD1367',
                marginBottom: {xs:1, sm: 1},
                height: {xs:120,sm:150,md:150},
                width: {xs:350,sm:400, md: 490}
              }}>
              <Typography align='center' color={'white'}
              sx={{
                fontSize: {xs:13, sm: 14.5, lg:15}
              }}>En optimisant la productivité agricole grâce à notre technologie de prédiction agricole basée sur l'intelligence artificielle, nous aidons les agriculteurs à améliorer leurs rendements et à accroître la production alimentaire dans les zones rurales, contribuant ainsi à l'éradication de la faim.</Typography>
 
              </Box>
            </Box>{/* tobecollapse */}

            <Box 
              sx={{
                width: {xs:120, sm: 150, md:150},
                marginLeft: 1,
                cursor: 'pointer',
                '&:hover':{
                  border: '2px solid transparent',
                }
              }}>
              <OddEleven width={'100%'} onClick={handleCollapseOddEleven}/>
            </Box>{/* end odd two */}

            <Box ref={refOddEleven}className='panel-horizontal' >{/* start tobecollapse */}
              <Box p={{sm:1,md:2}} sx={{
                backgroundColor: '#FD9D24',
                marginBottom: {xs:1, sm: 1},
                height: {xs:120,sm:150,md:150},
                width: {xs:350,sm:400, md: 490}
              }}>
              <Typography align='center' color={'white'}
              sx={{
                fontSize: {xs:13, sm: 14.5, lg:15}
              }}>En optimisant la productivité agricole grâce à notre technologie de prédiction agricole basée sur l'intelligence artificielle, nous aidons les agriculteurs à améliorer leurs rendements et à accroître la production alimentaire dans les zones rurales, contribuant ainsi à l'éradication de la faim.</Typography>
 
              </Box>
            </Box>{/* tobecollapse */}

            <Box 
              sx={{
                width: {xs:120, sm: 150, md:150},
                marginLeft: 1,
                cursor: 'pointer',
                '&:hover':{
                  border: '2px solid transparent',
                }
              }}>
              <OddThirteen width={'100%'} onClick={handleCollapseOddThirteen}/>
            </Box>{/* end odd two */}

            <Box ref={refOddThirteen}className='panel-horizontal' >{/* start tobecollapse */}
              <Box p={{sm:1,md:2}} sx={{
                backgroundColor: '#3F7E44',
                marginBottom: {xs:1, sm: 1},
                height: {xs:120,sm:150,md:150},
                width: {xs:350,sm:400, md: 490}
              }}>
              <Typography align='center' color={'white'}
              sx={{
                fontSize: {xs:13, sm: 14.5, lg:15}
              }}>En optimisant la productivité agricole grâce à notre technologie de prédiction agricole basée sur l'intelligence artificielle, nous aidons les agriculteurs à améliorer leurs rendements et à accroître la production alimentaire dans les zones rurales, contribuant ainsi à l'éradication de la faim.</Typography>
 
              </Box>
            </Box>{/* tobecollapse */}

            <Box 
              sx={{
                width: {xs:120, sm: 150, md:150},
                marginLeft: 1,
                cursor: 'pointer',
                '&:hover':{
                  border: '2px solid transparent',
                }
              }}>
              <OddSeventeen width={'100%'} onClick={handleCollapseOddSeventeen}/>
            </Box>{/* end odd two */}

            <Box ref={refOddSeventeen}className='panel-horizontal' >{/* start tobecollapse */}
              <Box p={{sm:1,md:2}} sx={{
                backgroundColor: '#19486A',
                marginBottom: {xs:1, sm: 1},
                height: {xs:120,sm:150,md:150},
                width: {xs:350,sm:400, md: 490}
              }}>
              <Typography align='center' color={'white'}
              sx={{
                fontSize: {xs:13, sm: 14.5, lg:15}
              }}>En optimisant la productivité agricole grâce à notre technologie de prédiction agricole basée sur l'intelligence artificielle, nous aidons les agriculteurs à améliorer leurs rendements et à accroître la production alimentaire dans les zones rurales, contribuant ainsi à l'éradication de la faim.</Typography>
 
              </Box>
            </Box>{/* tobecollapse */}
        </Box>
      </Grid>
      
    </Grid> {/* end grid container */}
{/* end ODD */}






{/* impact */}
    <Grid container sx={{backgroundColor:'#FFC000'}} p={{xs:2,md:6}}>
      <Grid item xs={6} md={3}>
         <Typography variant='h2' align='center'
         sx={{
          fontWeight: 'bold',
          fontSize: {xs:30,md:59}
         }}>
          +45
         </Typography>
         <Typography variant='h6' align='center'
         sx={{
          fontWeight: 'bold',
         }}>
         Communes touchées
         </Typography>
      </Grid>{/* end item */}

      <Grid item xs={6} md={3}>
         <Typography variant='h2' align='center'
         sx={{
          fontWeight: 'bold',
          fontSize: {xs:30,md:59}
         }}>
          +200
         </Typography>
         <Typography variant='h6' align='center'
         sx={{
          fontWeight: 'bold',
         }}>
         Foyers  éclairés
         </Typography>
      </Grid>{/* end item */}

      <Grid item xs={6} md={3}>
         <Typography variant='h2' align='center'
         sx={{
          fontWeight: 'bold',
          fontSize: {xs:30,md:59}
         }}>
          45
         </Typography>
         <Typography variant='h6' align='center'
         sx={{
          fontWeight: 'bold',
         }}>
         Partenaires de projets  
         </Typography>
      </Grid>{/* end item */}

      <Grid item xs={6} md={3} >
         <Typography variant='h2' align='center'
         sx={{
          fontWeight: 'bold',
          fontSize: {xs:30,md:59}
         }}>
          +90
         </Typography>
         <Typography variant='h6' align='center'
         sx={{
          fontWeight: 'bold',
         }}>
         Emplois créés
         </Typography>
      </Grid>{/* end item */}

    </Grid>{/* end container */}
{/* end impact */}

{/* article */}
    <Box backgroundColor={'#2F2121'} p={{xs:0,md:4}} > 
      <Typography variant='h5' px={2} pt={{xs:4,md:0}}
        sx={{
          color: '#8BBC1F',
          width: 'fit-content'
        }}>
          NOS ARTICLES
          <Divider sx={{ borderBottomWidth: 1, bgcolor: '#8BBC1F', mt:1 }} />
      </Typography>
      <Typography color={'white'} px={2} pt={1}>
      Restez informés sur nos actualités, et retrouvez nos sélections d’articles les plus récents
      </Typography>
      <Grid container>
        <Grid item md={6} lg={4} >
          <Articles 
            articleImage={article3} 
            subheading={'Developpement local'} 
            heading={"VolyVolt contribue à l’amélioration des conditions de vie"} 
            date={'14 Aout 2023'} 
            nombre={'5'}
            text={"Depuis l’implémentation du projet Volyvolt, les ménages à Miarinarivo voient leurs conditions de vies s’améliorer. Les paysans enregistrent  des hausses d’une moyenne de 20% sur leurs productions agricoles ..."}
            link={''} />
        </Grid>{/* end item*/}
        
        <Grid item md={6} lg={4} >
          <Articles 
            articleImage={article2} 
            subheading={'Santé'} 
            heading={"Implantation de VolyVolt : un pas vers l’ autonomie énergétique "} 
            date={'27 Juillet 2023'} 
            nombre={'8'}
            text={"Alors que les défis liés à l'accès à l'énergie durable persistent dans les zones rurales, une lueur d'espoir émerge avec l'implantation de VolyVolt. Cette solution novatrice de générateurs d'énergie propre et renouvelable...."}
            link={''} />
        </Grid>{/* end item*/}

        <Grid item md={6} lg={4} >
          <Articles 
            articleImage={article1} 
            subheading={'Santé'} 
            heading={"VolyVolt, projet issu d'Orange Summer Challenge"} 
            date={'04 Juillet 2023'} 
            nombre={'3'}
            text={"Ce projet, porté par une équipe engagée et diversifiée, a vu le jour à la suite de plusieurs mois d'efforts et de recherche. L'idée de combiner l'agriculture durable et l'énergie verte pour répondre ..."}
            link={''} />
            
        </Grid>{/* end item*/}

      </Grid>{/*end container */}
    </Box>
{/* end article */}
    </>
  )
}

export default Home