import { Grid, Box, Typography, Stack, Button } from '@mui/material'
import React, { useEffect, useRef } from 'react'
import '../styles/accordion.css'


import bannerImage from '../asset/image/banner-image.png'
import img1 from '../asset/icon/image 29.png'
import img2 from '../asset/icon/image 30.png'
import img3 from '../asset/icon/image 31.png'
import img4 from '../asset/icon/image 32.png'
import videoImg from '../asset/image/kaboompics_green-garden-plants-2687 1.png'
import article1 from '../asset/image/image 19.png'
import article2 from '../asset/image/image 20.png'
import article3 from '../asset/image/travailleurs-campagne-ensemble-terrain 1.png'
import { ReactComponent as OddTwo } from '../asset/image/odd2.svg'
import { ReactComponent as OddSeven } from '../asset/image/odd7_adobe_express.svg'
import { ReactComponent as OddNine } from '../asset/image/odd09_adobe_express.svg'
import { ReactComponent as OddTen } from '../asset/image/odd10_adobe_express.svg'
import { ReactComponent as OddEleven } from '../asset/image/odd11.svg'
import { ReactComponent as OddThirteen } from '../asset/image/odd13_adobe_express.svg'

import { Articles } from '../component/Home/Articles'
import { Cibles } from '../component/Home/Cibles'




export const Home = () => {
  //for odd

  const refOddTwo = useRef(null)
  const refOddSeven = useRef(null)
  const refOddNine = useRef(null)
  const refOddTen = useRef(null)
  const refOddEleven = useRef(null)
  const refOddThirteen = useRef(null)

  const handleCollapseOddTwo = () => {
    refOddTwo.current.style.maxWidth=refOddTwo.current.scrollWidth+'px'
    refOddSeven.current.style.maxWidth= null
    refOddNine.current.style.maxWidth= null
    refOddTen.current.style.maxWidth= null
    refOddEleven.current.style.maxWidth= null
    refOddThirteen.current.style.maxWidth= null
   // refTwo.current.style.maxWidth=null
  }

  const handleCollapseOddSeven = () => {
    refOddSeven.current.style.maxWidth=refOddSeven.current.scrollWidth+'px'
    refOddTwo.current.style.maxWidth= null
    refOddNine.current.style.maxWidth= null
    refOddTen.current.style.maxWidth= null
    refOddEleven.current.style.maxWidth= null
    refOddThirteen.current.style.maxWidth= null
  }
  const handleCollapseOddNine = () => {
    refOddNine.current.style.maxWidth=refOddNine.current.scrollWidth+'px'
    refOddSeven.current.style.maxWidth= null
    refOddTwo.current.style.maxWidth= null
    refOddTen.current.style.maxWidth= null
    refOddEleven.current.style.maxWidth= null
    refOddThirteen.current.style.maxWidth= null
  }
  const handleCollapseOddTen = () => {
    refOddTen.current.style.maxWidth=refOddTen.current.scrollWidth+'px'
    refOddSeven.current.style.maxWidth= null
    refOddNine.current.style.maxWidth= null
    refOddTwo.current.style.maxWidth= null
    refOddEleven.current.style.maxWidth= null
    refOddThirteen.current.style.maxWidth= null
  }
  const handleCollapseOddEleven = () => {
    refOddEleven.current.style.maxWidth=refOddEleven.current.scrollWidth+'px'
    refOddSeven.current.style.maxWidth= null
    refOddNine.current.style.maxWidth= null
    refOddTen.current.style.maxWidth= null
    refOddTwo.current.style.maxWidth= null
    refOddThirteen.current.style.maxWidth= null
  }
  const handleCollapseOddThirteen = () => {
    refOddThirteen.current.style.maxWidth=refOddThirteen.current.scrollWidth+'px'
    refOddSeven.current.style.maxWidth= null
    refOddNine.current.style.maxWidth= null
    refOddTen.current.style.maxWidth= null
    refOddEleven.current.style.maxWidth= null
    refOddTwo.current.style.maxWidth= null
  }

  useEffect(()=>{
    refOddTwo.current.style.maxWidth=refOddTwo.current.scrollWidth+'px'
  },[])

  return (
  <>
    <Grid container justifyContent={'center'}  p={2} pt={9}
      sx={{
        backgroundColor: '#082D0E'
      }}>
      <Grid item xs={12} md={6}>
        <Typography 
          sx={{
            color: 'green'
          }}>
          ENERGIE VERTE ET AGRICULTURE DURABLE
        </Typography>
        <Typography variant='h4' mt={1} color={'white'}>
          Imaginer un avenir ou vous pouvez produire votre propre énergie verte directement à partir de vos culture.
        </Typography>
        <Typography sx={{color: '#bbb'}}>
          Construisons un futur ou l'agriculture et l'énergie s'unissent pour créer une véritable dynamique positive, pour les familles rurales et pour notre planete.
        </Typography>

        <Box mt={2}>
          <Button variant='contained' size='small' sx={{ color: '#fff'}} >Nos produits</Button> 
          <Button variant='outlined' size='small'
            sx={{
              marginLeft: 2
            }}>
              Nos solution
          </Button>
        </Box>
      </Grid> {/* end grid */}
      
      <Grid item xs={12} md={4} display={'flex'} justifyContent={'center'} mt={2}>
      <Box
         component={'img'}
         sx={{
          width: 300,
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
      color: '#ffbe18'
    }}>"Du champs à  votre prise: L'Energie Verte, cultivée par vous et pour vous"</Typography>
{/* end voloan */}
{/* faharoa */}
    <Grid container
      sx={{
        backgroundColor: '#8BBC1F',
      }}>

      <Grid item xs={6} sm={6} md={3} mt={1}  display={'flex'} flexDirection={'column'} alignItems={'center'}
        sx={{
          p: {xs: 1,sm: 3, md: 3}
        }}>
        <Box
         component={'img'}
         sx={{
          height: 60,
          width: 60,
          maxHeight: { xs: 50, md: 60},
          maxWidth: {xs: 50, md: 60 }
         }}
         alt="rdf"
         src= {img1}
        />
        <Typography align='center' mt={1} sx={{color: '#fff'}}>
          Premiere solution a double tranchant agriculture et energie
        </Typography>
      </Grid> {/* end grid item*/}

      
      <Grid item xs={6} sm={6} md={3} mt={1}  display={'flex'} flexDirection={'column'} alignItems={'center'}
        sx={{
          p: {xs: 1,sm: 3, md: 3}
        }}>
        <Box
         component={'img'}
         sx={{
          height: 60,
          width: 60,
          maxHeight: { xs: 50, md: 60},
          maxWidth: {xs: 50, md: 60 }
         }}
         alt="rdf"
         src= {img2}
        />
        
        <Typography align='center' mt={1} sx={{color: '#fff'}}>
          Premiere solution a double tranchant agriculture et energie
        </Typography>
      </Grid> {/* end grid item*/}
      
      <Grid item xs={6} sm={6} md={3} mt={1}  display={'flex'} flexDirection={'column'} alignItems={'center'}
        sx={{
          p: {xs: 1,sm: 3, md: 3}
        }}>
        <Box
         component={'img'}
         sx={{
          height: 60,
          width: 60,
          maxHeight: { xs: 50, md: 60},
          maxWidth: {xs: 50, md: 60 }
         }}
         alt="rdf"
         src= {img3}
        />

        <Typography align='center' mt={1} sx={{color: '#fff'}}>
          Premiere solution a double tranchant agriculture et energie
        </Typography>
      </Grid> {/* end grid item*/}

      
      <Grid item xs={6} sm={6} md={3} mt={1}  display={'flex'} flexDirection={'column'} alignItems={'center'}
        sx={{
          p: {xs: 1,sm: 3, md: 3}
        }}>
        <Box
         component={'img'}
         sx={{
          height: 60,
          width: 60,
          maxHeight: { xs: 50, md: 60},
          maxWidth: {xs: 50, md: 60 }
         }}
         alt="rdf"
         src= {img4}
        />
        <Typography align='center' mt={1} sx={{color: '#fff'}}>
          Premiere solution a double tranchant agriculture et energie
        </Typography>
      </Grid> {/* end grid item*/}

    </Grid> {/* end grid container */}
    
{/* end faharoa */}


{/* ODD */}
    <Grid container sx={{backgroundColor: '#4C3012'}} py={2} justifyContent={'center'}>
      <Typography variant='h6' align='center' pb={3}
          sx={{
            color: '#FFC000',
            fontWeight: 'bold'
          }}>
            Comment participons-nous à l’atteinte des ODD?
        </Typography>
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
              <OddTwo width={'100%'} onClick={handleCollapseOddTwo}/>
            </Box>{/* end odd two */}

            <Box ref={refOddTwo}className='panel-horizontal' >{/* start tobecollapse */}
              <Box p={{sm:1,md:2}} sx={{
                backgroundColor: '#D3A029',
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
        </Box>
      </Grid>
      
    </Grid> {/* end grid container */}
{/* end ODD */}


{/* cibles*/}
    <Box 
      sx={{
        backgroundColor:'#082D0Ebb',
        p: 6
      }}>
      <Typography variant='h6' align='center' pb={3}
        sx={{
          color: '#FFC000',
          fontWeight: 'bold'
        }}>
          POUR QUI EST VOLYVOLT?
      </Typography>
      <Grid container justifyContent={'center'} spacing={2}>
        <Grid item xs={12} md={4}>
            <Cibles heading={'MÉNAGES RURAUX'} text={"VolyVolt est spécialement conçu pour répondre aux besoins énergétiques des ménages résident dans des zones rurales. Notre solution offre une alternative fiable et abordable aux bougies, lampes pétroles, permettant aux familles rurales de profiter d'une source d'énergie autonome et durable."}/>
        </Grid>
        <Grid item xs={12} md={4}>
            <Cibles heading={'MÉNAGES RURAUX'} text={"VolyVolt est spécialement conçu pour répondre aux besoins énergétiques des ménages résident dans des zones rurales. Notre solution offre une alternative fiable et abordable aux bougies, lampes pétroles, permettant aux familles rurales de profiter d'une source d'énergie autonome et durable."}/>
        </Grid>
        <Grid item xs={12} md={4}>
            <Cibles heading={'MÉNAGES RURAUX'} text={"VolyVolt est spécialement conçu pour répondre aux besoins énergétiques des ménages résident dans des zones rurales. Notre solution offre une alternative fiable et abordable aux bougies, lampes pétroles, permettant aux familles rurales de profiter d'une source d'énergie autonome et durable."}/>
        </Grid>
        {/*<Grid item>
            <Cibles heading={''} text={""}/>
        </Grid> */}

      </Grid>
    </Box>
{/* end cible*/}

{/* video */}
      <Grid container>
        <Grid item>
          <Box
            component={'img'}
            sx={{
            
              width: '100%',
            }}
            alt="rdf"
            src= {videoImg}
          />
        </Grid>
        

      </Grid>
{/* end video */}

{/* impact */}
    <Grid container sx={{backgroundColor:'#FFC000'}} p={6}>
      <Grid item xs={6} md={3}>
         <Typography variant='h2' align='center'
         sx={{
          fontWeight: 'bold'
         }}>
          +45
         </Typography>
         <Typography variant='h6' align='center'
         sx={{
          fontWeight: 'bold'
         }}>
         Communes touchées
         </Typography>
      </Grid>{/* end item */}

      <Grid item xs={6} md={3}>
         <Typography variant='h2' align='center'
         sx={{
          fontWeight: 'bold'
         }}>
          +200
         </Typography>
         <Typography variant='h6' align='center'
         sx={{
          fontWeight: 'bold'
         }}>
         Foyers  éclairés
         </Typography>
      </Grid>{/* end item */}

      <Grid item xs={6} md={3}>
         <Typography variant='h2' align='center'
         sx={{
          fontWeight: 'bold'
         }}>
          +30%
         </Typography>
         <Typography variant='h6' align='center'
         sx={{
          fontWeight: 'bold'
         }}>
         Hausse de productivité 
         </Typography>
      </Grid>{/* end item */}

      <Grid item xs={6} md={3}>
         <Typography variant='h2' align='center'
         sx={{
          fontWeight: 'bold'
         }}>
          +90
         </Typography>
         <Typography variant='h6' align='center'
         sx={{
          fontWeight: 'bold'
         }}>
         Emplois créés
         </Typography>
      </Grid>{/* end item */}

    </Grid>{/* end container */}
{/* end impact */}

{/* article */}
    <Box backgroundColor={'#CACEB1'} p={4}> 
      <Typography variant='h5' align='center'
        sx={{
          color: '#6D3F0D',
        }}>
          NOS ARTICLES
      </Typography>
      <Typography align='center'>
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