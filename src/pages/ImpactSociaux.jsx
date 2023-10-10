import { Box, Button, CircularProgress, Divider, Grid, Stack, Typography, Alert, Snackbar, } from '@mui/material'
import React, { useState } from 'react'
import { BenificiairyCarrousel } from '../component/impactsociaux/BenificiairyCarrousel'


import banner from '../asset/image/enfants-smiley-coup-moyen-fenetre-1.webp'
import bannerMobile from '../asset/image/enfants-smiley-coup-moyen-fenetre1-mobile.webp'


import {ReactComponent as FoyerIcon} from '../asset/icon/icons-foyers 1.svg'
import {ReactComponent as CommuneIcon} from '../asset/icon/icons-communes 1.svg'
import {ReactComponent as FidelIcon} from '../asset/icon/icons-fidel.svg'
import {ReactComponent as JobIcon} from '../asset/icon/icons-job 1.svg'
import {ReactComponent as SatisfiedIcon} from '../asset/icon/icons-satisfied.svg'
import {ReactComponent as ShareIcon} from '../asset/icon/icons-share 1.svg'
import { Impact } from '../component/impactsociaux/Impact'
import { ImpactTwo } from '../component/impactsociaux/ImpactTwo'
import { Testimony } from '../component/impactsociaux/Testimony'


//article
import article1 from '../asset/image/image 19.webp'
import article2 from '../asset/image/article2i.webp'
import article3 from '../asset/image/artricle1.webp'
import articlefemmenoir from '../asset/image/image 20.webp'

import articleloren from '../asset/image/PXL_20230726_072127091 1.webp'
import articlejeune from '../asset/image/article5.webp'


import grosplanenfant from '../asset/image/gros-plan-enfant-africain-smiley 1.webp'


import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Article } from '../component/impactsociaux/Article'
import { SliderRight } from '../component/gallery/SliderRight'
import { SliderLeft } from '../component/gallery/SliderLeft'
import { Link, useNavigate } from 'react-router-dom'
//end article
//import {ReactComponent as Icon} from '../asset/icon'
//import {ReactComponent as Icon} from '../asset/icon'



export const ImpactSociaux = () => {
  const [isArticleHover, setArticleHover] = useState('')
  const navigate = useNavigate()
  const [more,setMore] = useState(false)

  const handleMore = () => {
    setMore(true)
    setTimeout(function() {
      setMore(false)
      setSnackbar({children:'Tous nos artciles ont été defilés', severity: 'warning'})
    }, 2000)
  }

  const [snackbar, setSnackbar] = useState(null)
  const handleCloseSnackbar = () => setSnackbar(null)

  return (
    <>
    {!!snackbar && (
        <Snackbar 
          open 
          onClose={handleCloseSnackbar} 
          anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
          autoHideDuration={3000}
          >
          <Alert {...snackbar} onClose={handleCloseSnackbar}/>
        </Snackbar>
      )}

    <Grid container pt={{xs:8,ms:9}} sx={{
      backgroundColor: '#082D0E',
      position: 'relative',
    }}>
       <Box
            component={'img'}
            sx={{
                width:{xs: '100%'},
                display: {xs: 'none', md:'flex'}
            }}
            alt="rdf"
            src= {banner}
        />
        <Box
            component={'img'}
            sx={{
                width:{xs: '100%'},
                display: {xs: 'flex', md:'none'}
            }}
            alt="rdf"
            src= {bannerMobile}
        />
        <Box sx={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          background: {xs:'#00000088',md:'linear-gradient(270deg, #00000088 40%, #ff8e5300 100%)'},
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          //backgroundColor: 'linear-gradient(toright,blue,red)',
         // bgcolor: 'linear-gradient(270deg, #2C2112 0.05%, rgba(44, 33, 18, 0.88) 30.87%, rgba(8, 45, 14, 0.00) 82.78%)'
        }}>
        </Box>

        <Box sx={{
          position: 'absolute',
          bottom: 0,
          width: '100%'
          
        }}>
          <Box sx={{
            display: 'flex',
            justifyContent: 'end'
          }}> 
            <Box sx={{
                width: {xs:'100%', md: 500},
                ml: {xs:2,md:0},
                mr: {xs:2, md: '15%'},
                mb:{xs:3 ,md: '15%'},
                backgroundColor: {xs: '',md:''}
              }}>
                <Typography variant='h6' sx={{
                  color: '#A8E71C',
                  fontWeight: 500,
                  width: 'fit-content',
                  pb: 3,
                  fontSize: {xs: 15 ,sm: 22}
                }}>VolyVolt, pas uniquement une solution Énergétique <br/> Une baume  au cœur  pour les familles rurales</Typography>
              
                <Grid container>
                  <Grid item xs={0.2} md={0.2}>
                    <Divider orientation="vertical"  sx={{ borderLeftWidth: 10,borderRightWidth: 0, borderColor: '#A8E71C' }} />
                  </Grid>
                  <Grid item xs={11.8} md={11.8} pl={2}>   
                    <Typography variant='h6' fontWeight={'bold'} color={'white'} sx={{
                      fontSize: {xs: 15 ,sm: 22}
                    }} >Bienvenue dans notre section "Impacts Sociaux"</Typography> 
                    <Typography color={'white'} sx={{
                      fontSize: {xs: 14 ,sm: 16}
                    }} >
                    Découvrez comment nous travaillons main dans la main avec les communautés rurales pour apporter la lumière, l'espoir et le changement. Ici où nous partageons les histoires et les réalisations qui témoignent de notre mission.  Explorez nos projets, nos partenariats et l'empreinte que nous laissons derrière nous.
                    </Typography>
                  </Grid>
                  
                </Grid>{/*end mini container */}
              </Box>
          </Box>

        </Box>
       
       
    </Grid>

      {/* benificial say */}
      <BenificiairyCarrousel/>
      {/*end benificial say */}

    {/* map */}
    <Box> {/* https://www.google.com/maps/d/viewer?mid=1ztgqsEQAZ5ej0DNawjHzxl10_N5x1f8&usp=sharing */}
      
      <iframe src="https://www.google.com/maps/d/embed?mid=1ztgqsEQAZ5ej0DNawjHzxl10_N5x1f8&ehbc=2E312F" width="100%" height="450" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
    </Box>
    {/* end map */}

    {/* Impact commune */}
    <Grid container >
      <Grid item xs={12} md={5} sx={{bgcolor: '#FFC000'}} p={6} display={'flex'} alignItems={'center'} justifyContent={'center'}>
        <Stack spacing={3} alignItems={'center'}>
          <Typography variant='h6' align='center' sx={{fontWeight: 'bold', fontSize:17}}>Les statistiques previsionnelles de Volyvolt pour sa première année</Typography>
          <Stack display={'flex'} direction={'row'} spacing={3}>
            <Impact value='3' icon={<CommuneIcon width={50} height={50}/>} text='Communes à toucher'/>
            <Impact value='60' icon={<FoyerIcon width={50} height={50}/>} text='Foyers à  éclairer'/>
          </Stack>
          <Stack display={'flex'} direction={'row'}  spacing={3}>
            <Impact value='10' icon={<FidelIcon width={50} height={50}/>} text='Partenaires de projets '/>
            <Impact value='10' icon={<JobIcon width={50} height={50}/>} text='Emplois à créer'/>
          </Stack>
        </Stack>
      </Grid>

      <Grid item xs={12} md={7} sx={{bgcolor: '#2F2121'}} display={'flex'} alignItems={'center'} flexDirection={'column'}>
        {/*<Typography align='center' color={'white'} variant='h6' p={2} fontWeight={'bold'}>COMMUNE RURALE D’ AKADINANDRIANA</Typography>*/}
        <Box width={'fit-content'} px={{xs:3, md:0}} pb={3}>
        {/*   <Typography color={'white'} width={'fit-content'}>Fokotany touchés par la solution : Ambohitrosy, Ambohimahatsinjo,  Andranovelona</Typography>
          <Typography color={'white'} width={'fit-content'}>Nombre des ménages bénéficiaires de la solution : 57 ménages</Typography>
          <Typography color={'white'} width={'fit-content'}>Taux d’adoption moyenne des ménages : 99,8%</Typography>
          <Typography color={'white'} width={'fit-content'}>Production énergétique  moyenne mensuelle : 304 kWh</Typography>
          <Typography color={'white'} width={'fit-content'}>Consommation énergétique  moyenne mensuelle : 248 kWh</Typography>
          <Typography color={'white'} width={'fit-content'}>Cumul de la production énergétique  locale : 793 kWh</Typography>
          <Typography color={'white'} width={'fit-content'}>Cumul de la consommation énergétique locale : 686kWh</Typography>
          <Typography color={'white'} width={'fit-content'}>Nouveaux emplois locaux créés : 8 emplois fixes </Typography>
        */}
          <Typography p={6} color={'white'}>
          Pour l'instant, nous n'avons pas encore deployé la solution mais nous avons dejà quelques localités cibles sur le map au-dessus
          Si vous êtes prêts à apporter votre contribution au niveau de ces localilés, si vous êtes onvaincus que ces localités ont besoin de votre contribution, {/*<Link to={'/contact'}></Link> */} 
          </Typography>
        </Box>
        <Box pb={3}>
        <Button variant='outlined'
          sx={{ color: '#FFC000', borderColor:'#FFC000'}} onClick={()=> navigate("/Contact")}>contactez- nous</Button>
        </Box>
      </Grid>
    </Grid>
    {/* End Impact commune */}

    {/* gallery slider */}
    <Grid container>
      <Grid item xs={12}>
        <SliderRight/>
        <SliderLeft/>
      </Grid>
    </Grid>
    {/* end gallery slider */}

    {/* testomony and impact */}
    <Grid container >
      {/* testomony */}
      <Grid item xs={12} md={7} display={'flex'} alignItems={'center'} flexDirection={'column'}
      sx={{
        bgcolor: '#2F2121',
        p: {xs:3,md:6}
        }} >
        <Testimony/>
      </Grid>
      {/* end testomony */}

      {/* Impact  */}
      <Grid item xs={12} md={5} sx={{bgcolor: '#8BBC1F'}} p={6} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
       {/*  <Stack spacing={3} alignItems={'center'} justifyContent={'center'}>
          <Stack display={'flex'} direction={'row'} spacing={3}>
            <ImpactTwo value='100%' icon={<CommuneIcon width={50} height={50}/>} text='Collaborateurs satisfaits'/>
            <ImpactTwo value='76%' icon={<FidelIcon width={50} height={50}/>} text='Taux de Renouvellement des contrats'/>
          </Stack>
          <Stack display={'flex'} direction={'row'}  spacing={3}>
            <ImpactTwo value='99%' icon={<SatisfiedIcon width={50} height={50}/>} text='Ménages bénéficiaires satisfaits'/>
            <ImpactTwo value='89%' icon={<ShareIcon width={60} height={60}/>} text='Taux de Recommandation des clients'/>
          </Stack>
        </Stack>*/}
          <Typography sx={{
            fontWeight: 'bold',
            mb:2
            //fontSize: 17
          }}>
          Notre solution est en cours de developpement, nous n'avons pas encore de clients mais peut être seriez vous notre premier client?
          </Typography>

          <Button variant='outlined' color='blackvoly' onClick={()=>navigate('/contact')}>Nous Contacter</Button>
      </Grid>
       {/* End Impact  */}
    </Grid>
    {/* end testomony and impact */}

    {/* Article */}
    
    <Box px={{xs:2,md:6}} pt={{xs:4,md:3}}>
      <Typography variant='h5' 
            sx={{
              color: '#8BBC1F',
              width: 'fit-content'
            }}>
              NOS ARTICLES
              <Divider sx={{ borderBottomWidth: 1, bgcolor: '#8BBC1F', mt:1 }} />
          </Typography>
      <Typography py={3} >
        L'électrification rurale ne se résume pas à des technologies. Explorez nos articles pour découvrir les coulisses de notre mission et comprendre les histoires de ceux dont la vie est transformée grâce à nos actions
      </Typography>
    </Box>
    <Grid container px={{md:6}} >
      <Grid item xs={12} md={6} lg={4} p={2}>
          <Article
            isArticleHover={isArticleHover}
            setArticleHover={setArticleHover}
            image={article3} 
            subtitle={'Communication'} 
            title={"Fournir des armes pour mieux combattre : formation Pitch"}
            link={'https://medium.com/@volyvolt.contact/fournir-des-armes-pour-mieux-combattre-formation-pitch-404395417f16'}
          />
      </Grid>
      <Grid item xs={12} md={6} lg={4} p={2}>
          <Article
            isArticleHover={isArticleHover}
            setArticleHover={setArticleHover}
            image={article2} 
            subtitle={'Human Centered Design'} 
            title={"Le 02/10/2023 s'est déroulée une présentation au niveau Interne des projets issus d'Orange Summer Challenge"}
            link={'https://medium.com/@volyvolt.contact/ale-02-10-2023-sest-d%C3%A9roul%C3%A9e-une-pr%C3%A9sentation-au-niveau-interne-des-projets-issus-d-orange-summer-a7873faa8cdd'}
          />
      </Grid>
      <Grid item xs={12} md={6} lg={4} p={2}>
          <Article
            isArticleHover={isArticleHover}
            setArticleHover={setArticleHover}
            image={articlefemmenoir} 
            subtitle={'Developpement rural'} 
            title={"VolyVolt utilise l’approche centrée sur l’humain pour le développement de la solution"}
            link={'https://medium.com/@volyvolt.contact/threvolyvolt-utilise-lapproche-centr%C3%A9e-sur-l-humain-pour-le-d%C3%A9veloppement-de-la-solution-d50c0d86e726'}
          />
      </Grid>
      <Grid item xs={12} md={6} lg={4} p={2}>
          <Article
            isArticleHover={isArticleHover}
            setArticleHover={setArticleHover}
            image={article1} 
            subtitle={'Jeunesse et Technologie'} 
            title={"VolyVolt, projet issu d'Orange Summer Challenge"}
          />
      </Grid>
      <Grid item xs={12} md={6} lg={4} p={2}>
          <Article
            isArticleHover={isArticleHover}
            setArticleHover={setArticleHover}
            image={articlejeune} 
            subtitle={'Énergie'} 
            title={"L’accès à l’énergie"}
            link={'https://www.encyclopedie-energie.org/lacces-a-lenergie/'}
          />
      </Grid>
      <Grid item xs={12} md={6} lg={4} p={2}>
          <Article
            isArticleHover={isArticleHover}
            setArticleHover={setArticleHover}
            image={articleloren} 
            subtitle={'Développement rural'} 
            title={"Implantation de VolyVolt : un pas vers l’ autonomie énergétique"}
            link={'https://medium.com/@volyvolt.contact/cieimplantation-de-volyvolt-un-pas-vers-lautonomie-%C3%A9nerg%C3%A9tique-0f5d2112ccb8'}
          />
      </Grid>
      
    </Grid>
    <Box px={{xs:2,md:6}} py={3}>
      <Divider variant='fullwidth'>
        <Button variant='contained' color='whitevoly' sx={{
          //color: '#799C2B',
          //bgcolor: 'rgba(217, 217, 217, 0.21)',
          boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
        }}
        onClick={handleMore}
        startIcon={more?<CircularProgress size={25}/>:<ExpandMoreIcon style={{ color: '#8BBC1F'}}/>}>CHARGER PLUS D’ARTICLES</Button>
      </Divider>
    </Box>
    
    {/* End Article */}

    {/* ready to get started */}
    <Box px={{xs:2,md:6}} pt={{xs:4,md:3}}>
      <Typography variant='h5' 
            sx={{
              color: '#8BBC1F',
              width: 'fit-content'
            }}>
              Rapports d'Impact
              <Divider sx={{ borderBottomWidth: 1, bgcolor: '#8BBC1F', mt:1 }} />
          </Typography>
      <Typography pt={3} pb={1} >
      Pour des détails plus approfondis sur notre impact social, vous pourriez bientôt consulter nos rapports d'impact annuels. Nous sommes fiers de partager les chiffres et les histoires qui témoignent de notre réussite.
      </Typography>
      {/*<Typography sx={{textDecoration: 'underline', pb:3}} >2023 Rapport d'Impact </Typography>*/}
    </Box>
    <Grid container sx={{
      bgcolor:'#2F2121',
      display: 'flex',
      justifyContent:'center',
      alignItems: 'center'
    }}>
      <Grid item xs={12} md={7} sx={{
        px:{xs:2, md: 6},
        py:{xs:3, md: 6}
      }}>
        <Typography variant='h5' color={'white'} fontWeight={'bold'}>PRÊT À COLLABORER AVEC VOLYVOLT ?</Typography>
        <Typography sx={{
          color: 'white',
          pt:3
        }}>
        L'équipe VolyVolt s'acharne à donner le meilleur pour un impact positif effectif. Nous tenons à coeur Notre mission, nous prônons que l'électricité ne devrait pas être un luxe mais un droit fondamental.  Ensemble, nous pourrions créer ne dynamique positive et illuminer de nombreux foyers. En plus d' éclairer les foyers, travailler avec VolyVolt c'est illuminer les coeurs, semer le changement et faire sourire des familles entières. Nous valorisons le changement grace à la collaboration, et nous avons besoin de vous pour la poursuivre.Et si vous aussi, vous deveniez le responsable des sourires dans les foyers des communautés rurales ?        </Typography>

        <Typography sx={{
          color: 'white',
          pt:1,
        }}>
        Rejoignez-nous pour changer des vies et apporter un avenir plus lumineux aux communautés rurales.
        </Typography>

        <Button 
          variant='outlined' 
          sx={{
            mt: 4,
          }}
          onClick={()=>{
            navigate('/contact')
          }}
        >COLLABORER AVEC NOUS</Button>
      </Grid>
      <Grid item xs={12} md={5}>
      <Box
         component={'img'}
         sx={{
          width: '100%',
          mt:{xs:3,md:0},
         }}
         alt="rdf"
         src= {grosplanenfant}
        />
      </Grid>
      
    </Grid>
    {/* end ready to get started */}
    </>
  )
}
