import { Grid, Box, Typography, Button } from '@mui/material'
import React, { useEffect, useRef } from 'react'
import '../styles/accordion.css'


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




export const Home = () => {
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

  return (
  <>
    
    <Grid container px={14} pt={9} sx={{
        backgroundColor: '#082D0E'
      }} >

      <Typography align='center' variant='h5' sx={{
        color: '#96CC1E',
        //fontSize: 22,
        fontWeight: 'bold',
        //fontFamily: 'Assistant',
      }}>
        Bienvenue chez VolyVolt, où chaque projet est une ode à la responsabilité sociale, à l’impact positif, et à un avenir plus lumineux pour tous.
      </Typography>

    </Grid>

    <Grid container pt={3} justifyContent={'center'}  
      sx={{
        backgroundColor: '#082D0E'
      }}>
      <Grid item xs={12} md={5}>
        <Typography variant='h6' mt={3} color={'white'}>
        Imaginez un avenir où votre engagement a le pouvoir de faire briller un foyer et d’inspirer des sourires au sein des communautés rurales. 
        </Typography>
        <Typography sx={{color: '#bbb'}}>
        Collaborer avec VolyVolt, c'est bien plus que cultiver de l'énergie durable, c'est semer la transformation,  récolter la gratitude de ceux que vous aidez. 
        </Typography>

        <Box mt={2}>
          <Button variant='contained' size='small' sx={{ color: '#fff'}} >NOTRE SOLUTION</Button> 
          <Button variant='outlined' size='small'
            sx={{
              marginLeft: 2
            }}>
              COLLABORER AVEC NOUS
          </Button>
        </Box>
      </Grid> {/* end grid */}
      
      <Grid item xs={12} md={5} display={'flex'} pl={3} >
      <Box
         component={'img'}
         sx={{
          width: 450,
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
    }}>“Illuminer les cœurs, semer le changement et éclairer les foyers”</Typography>
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
        <ValuePropositionOne width={70} height={70}/>
        <Typography align='center' mt={1} sx={{color: '#fff'}}>
          Accès à l’énergie verte  à partir des cultures locales
        </Typography>
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
        <ValuePropositionTwo width={70} height={70}/>
        
        <Typography align='center' mt={1} sx={{color: '#fff'}}>
          Renforcement de la Responsabilité Sociale des ONGs et des fondations
        </Typography>
      </Grid> {/* end grid item*/}
      
      <Grid item xs={6} sm={6} md={3} mt={1}  display={'flex'} flexDirection={'column'} alignItems={'center'}
        sx={{
          p: {xs: 1,sm: 3, md: 3}
        }}>
        <ValuePropositionThree width={70} height={70}/>

        <Typography align='center' mt={1} sx={{color: '#fff'}}>
        Une solution clé en main pour l'électrification rurale
        </Typography>
      </Grid> {/* end grid item*/}

      
      <Grid item xs={6} sm={6} md={3} mt={1}  display={'flex'} flexDirection={'column'} alignItems={'center'}
        sx={{
          p: {xs: 1,sm: 3, md: 3}
        }}>
        <ValuePropositionFour width={70} height={70} />
        <Typography align='center' mt={1} sx={{color: '#fff'}}>
        Une éléctrification à moindre coûts  au sein des foyers ruraux
        </Typography>
      </Grid> {/* end grid item*/}

    </Grid> {/* end grid container */}
    
{/* end faharoa */}

{/* mission */}
    <Grid container px={6} py={3}>
      <Grid item xs={10} sm={10} md={10} >
        <Typography variant='h5' sx={{
          color: '#638715',
          textDecoration: 'underline',
          fontWeight: 'bold'
        }}>MISSION DE VOLYVOLT</Typography>

        <Typography py={2} sx={{fontSize: 20}}>
        Résoudre le problème d'électrification rurale à Madagascar en permettant aux ménages d'accéder à une solution énergétique verte, durable et à coût abordable 
        </Typography>

        <Typography py={2}>
        Seulement 10,9 % de la population rurale a accès à l'électricité, tandis que ce chiffre atteint 72,6 % en zone urbaine. Cette disparité crée des obstacles au développement socio-économique des communautés rurales, car elles luttent pour éclairer leurs maisons, alimenter leurs appareils électroniques et utiliser des équipements nécessitant de l'énergie.
        </Typography>
        <Typography>
        Face à ce défi, VolyVolt propose de fournir des services  clé en main d'électrification aux des ONG et des fondations  au niveau des localités où ils souhaitent apporter leur contribution. 
        La particularité de notre solution réside dans l'utilisation de la technologie des piles microbiennes. Grâce à des bactéries situées au niveau des racines des plantes, nous générons de l'électricité de manière propre et durable, offrant ainsi une source d'énergie verte à ces communautés. 
        </Typography>
      </Grid>
      <Grid item xs={2} sm={2} md={2} backgroundColor={'main'}>
        
      </Grid>

    </Grid>
{/* end mission */}

{/* cibles*/}
    {/* video */}
    <Grid container px={6} py={5} sx={{backgroundColor:'#082D0E'}} alignItems={'center'}>
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
              <Box margin={'0px auto'} width={'80%'}>
              <Typography variant='h6' align='center' pb={3}
                sx={{
                  color: '#8BBC1F',
                  fontWeight: 'bold',
                  textDecoration: 'underline'
                }}>À QUI S’ADRESSE LA SOLUTION VOLYVOLT?
              </Typography>
              <Typography color={'white'}>Notre solution d'électrification rurale est spécialement conçue pour : </Typography>
              <ul>
                <li><Typography color={'white'}>les ONG </Typography></li>
                <li><Typography color={'white'}>les fondations engagées  </Typography></li>
              </ul>
              <Typography color={'white'}>               
                 La solution VolyVolt s’adresse aux acteurs du secteur philanthropique et du développement durable qui cherchent à avoir un impact positif en fournissant de l'énergie propre aux populations rurales.
              </Typography>
              </Box>
            </Grid>
            

          </Grid>
    {/* end video */}

{/* end cible*/}

{/* ODD */}
    <Grid container sx={{backgroundColor: '#082D0E'}} py={2} >
      <Typography variant='h6'  pb={3} px={6}
          sx={{
            color: '#8BBC1F',
            fontWeight: 'bold',
            textDecoration: 'underline'
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
          45
         </Typography>
         <Typography variant='h6' align='center'
         sx={{
          fontWeight: 'bold'
         }}>
         Partenaires de projets  
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