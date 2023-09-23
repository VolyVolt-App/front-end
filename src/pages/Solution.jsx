import { Accordion,AccordionSummary ,AccordionDetails ,Box, Divider, Grid, Typography, Chip } from '@mui/material'
import React, { useState } from 'react'


import bannerImage from '../asset/image/Group 104.png'
import bannerVideo from '../asset/image/Group 103.png'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Analyse } from '../component/solution/Analyse';

import { ReactComponent as IconContact } from '../asset/icon/icons-contact.svg'
import { ReactComponent as IconConvention } from '../asset/icon/icons-convention.svg'
import { ReactComponent as IconDevis } from '../asset/icon/icons-devis.svg'
import { ReactComponent as IconEvaluation } from '../asset/icon/icons-evaluation.svg'
import { ReactComponent as IconAnalyse } from '../asset/icon/icons-analyse.svg'
import { ReactComponent as IconMiseOeuvre } from '../asset/icon/icons-mise en oeuvre.svg'
import { Processus } from '../component/solution/Processus';
import { AvantageClient } from '../component/solution/AvantageClient'
import { BackgroundRevealLayout } from '../component/Layout/BackgroundRevealLayout';

//https://www.google.com/maps/d/u/0/viewer?fbclid=IwAR3dV8VGIPs3KpA2PutMkTCvdoiSAqoyj47q-WxxHOqIDc_su2Qbtm6nL2Y&mid=1ztgqsEQAZ5ej0DNawjHzxl10_N5x1f8&ll=-18.95798824431245%2C47.92853244749729&z=10

export const Solution = () => {

  //mission
  const [solution, setSolution] = useState('analyse')
  const [isProcessusHover,setProcessusHover]= useState('')

  return (
    <>
    <Grid container px={{xs:2,md:14}} pt={9} pb={3} sx={{
        backgroundColor: '#082D0E'
      }} >
        <Grid item xs={12} md={6} >
            <Box
                component={'img'}
                sx={{
                    width: {md:'100%',lg:'80%', xs:'95%'},
                    mt:{xs:3,md:0},
                    
                    // maxHeight: { xs: 50, md: 60},
                    // maxWidth: {xs: 50, md: 60 }
                }}
                alt="rdf"
                src= {bannerImage}
            />
        </Grid>
        <Grid item xs={12} md={6} px={2}>
            <Typography variant='h6' sx={{color: '#8BBC1F', fontSize:15}}>
            L'ÉNERGIE VERTE AU COEUR DE VOS ACTIONS
            </Typography>
            <Typography variant='h6' color={'white'} fontWeight={'bold'} my={2}>
            Embarquez aujourd'hui dans le courant de l'énergie verte et osez faire la différence au cœur des communautés rurales.
            </Typography>
            <Typography sx={{color: '#bbb'}}>
            Chaque initiative que vous entreprenez devient une vague d'impact positif, éclairant les foyers et les horizons des communautés rurales. Prenez la tête en tant que catalyseur audacieux du changement.
            </Typography>
        </Grid>
      </Grid>{/* end container */}

      <BackgroundRevealLayout initial={'#082D0E'} bgColor={'#638715'}>
      <Grid container px={{xs:2,md:14}} py={3} 
      sx={{
        //backgroundColor: '#638715ff'
      }}>
        <Grid item xs={12} md={8} >
            <Typography variant='h6' sx={{color: '#08280D', fontSize:15}}>
            ÉNERGIE À PARTIR DES CULTURES
            </Typography>
            <Typography variant='h6' color={'white'} mb={3}>
            Techniquement, comment ça fonctionne ..?
            </Typography>

            
            <Grid container>
              <Grid item xs={0.1} md={0.1}>
                <Divider orientation="vertical"  sx={{ borderLeftWidth: 5,borderRightWidth: 0, borderColor: '#A8E71C' }} />
              </Grid>
              <Grid item xs={11.9} md={11.9}>    
                <Typography color={'white'} px={1} >
                Le fonctionnement de VolyVolt est basé sur une technologie appelée "pile microbienne". Ces piles utilisent des micro-organismes, tels que des bactéries, pour produire de l'électricité. Les bactéries présentes dans les racines des plantes consomment des matières organiques et libèrent des électrons lors de leur dégradation. Ces électrons sont ensuite capturés par un circuit électrique, générant ainsi de l'électricité pour alimenter les équipements tels que les lampes, les chargeurs de téléphone et les radios.
                </Typography>
              </Grid>
            </Grid>{/*end mini container */}
            
        </Grid>
        <Grid item xs={12} md={4} pt={{xs:3, md:0}} >
            <Box
                component={'img'}
                sx={{
                    width: {md:'100%',lg:'80%', xs:'95%'},
                    mt: 'auto',
                    
                    // maxHeight: { xs: 50, md: 60},
                    // maxWidth: {xs: 50, md: 60 }
                }}
                alt="rdf"
                src= {bannerVideo}
            />
        </Grid>
      </Grid>{/*end container */}
      </BackgroundRevealLayout>

      {/* OFFRE */}
      <BackgroundRevealLayout initial={'#638715'} bgColor={'white'}>
      <Box sx={{ px: {xs:1, md: 12}}}>
        <Typography variant='h6' 
          sx={{
            color: '#638715', 
            fontWeight: 'bold', 
            pt:3, 
            }}>
              Plus exactement, quelles sont les offres de service de VolyVolt?
        </Typography>

        <Typography py={2} >
        Notre offre principale consiste à fournir des <span style={{fontWeight: 'bold'}}> services techniques complets  clé en main pour l'installation de générateurs d'énergie locaux</span>, en utilisant les cultures locales aux ONG et aux fondations qui cherchent à avoir un impact positif en électrifiant les zones rurales. VolyVolt prend en charge l'ensemble du processus d'implémentation des projets, de l’étude et planification à l'installation des systèmes d'électrification, en veillant à ce que tout fonctionne de manière transparente.

        </Typography>

        {/* action */}
        <Grid container px={1}>
          <Grid item xs={12} sm={6} md={4}
            sx={{
              '& .missionTextActive': {
                fontWeight: 'bold',
                fontStyle: 'Assistant',
              },
              '& .missionButtonActive': {
                backgroundColor: '#8BBC1F'
              }
            }} >
            <Box display={'flex'} mb={6} mt={3}>

              <Box width={'50%'} position={'relative'} onClick={()=>setSolution('analyse')}
              sx={{
                '&:hover':{
                  cursor: 'pointer',
                  '& .hoverbutton': {
                    backgroundColor: '#8BBC1F'
                },
                '& .hovertext': {
                    fontWeight: 'bold',
                    fontStyle: 'Assistant',
                  }
                  }
              }}>     
                <Divider variant='fullwidth'>
                  <Typography
                  className={ solution === 'analyse' ? 'hovertext missionTextActive': 'hovertext'}
                  sx={{
                    position: 'absolute',
                    top: 25,
                    right: {xs:'19%',sm:'21%'},
                    fontSize: {xs:10,md:13},
                  }}>Analyse et consultation</Typography>
                  <Typography sx={{position: 'absolute', pl:1, fontWeight:'bold'}}>1</Typography>
                  <Chip 
                  className={ solution === 'analyse' ? 'hoverbutton missionButtonActive': 'hoverbutton'}
                  sx={{width:26, height:26 }}/>
                </Divider>
              </Box>
              
              <Box width={'50%'} position={'relative'} onClick={()=>setSolution('installation')}
              sx={{
                '&:hover':{
                  cursor: 'pointer',
                  '& .hoverbutton': {
                    backgroundColor: '#8BBC1F'
                },
                '& .hovertext': {
                    fontWeight: 'bold',
                    fontStyle: 'Assistant',
                  }
                  }
              }}>     
                <Divider variant='fullwidth'>
                  <Typography
                  className={ solution === 'installation' ? 'hovertext missionTextActive': 'hovertext'}
                  sx={{
                    position: 'absolute',
                    top: 25,
                    right: {xs:'13%',sm:'21%'},
                    fontSize: {xs:10,md:13},
                  }}>Installation des Générateurs</Typography>
                  <Typography sx={{position: 'absolute', pl:1, fontWeight:'bold'}}>2</Typography>
                  <Chip 
                  className={ solution === 'installation' ? 'hoverbutton missionButtonActive': 'hoverbutton'}
                  sx={{width:26, height:26 }}/>
                </Divider>
              </Box>
              
            </Box>
            
          </Grid>
          
          <Grid item xs={12} sm={6} md={4}
            sx={{
              '& .missionTextActive': {
                fontWeight: 'bold',
                fontStyle: 'Assistant',
              },
              '& .missionButtonActive': {
                backgroundColor: '#8BBC1F'
              }
            }} >
            <Box display={'flex'} mb={6} mt={3}>

            <Box width={'50%'} position={'relative'} onClick={()=>setSolution('distribution')}
              sx={{
                '&:hover':{
                  cursor: 'pointer',
                  '& .hoverbutton': {
                    backgroundColor: '#8BBC1F'
                },
                '& .hovertext': {
                    fontWeight: 'bold',
                    fontStyle: 'Assistant',
                  }
                  }
              }}>     
                <Divider variant='fullwidth'>
                  <Typography
                  className={ solution === 'distribution' ? 'hovertext missionTextActive': 'hovertext'}
                  sx={{
                    position: 'absolute',
                    top: 25,
                    right: {xs:'5%',sm:'10%'},
                    fontSize: {xs:10,md:13},
                  }}>Distribution des dispositifs de stcokage</Typography>
                  <Typography sx={{position: 'absolute', pl:1, fontWeight:'bold'}}>3</Typography>
                  <Chip 
                  className={ solution === 'distribution' ? 'hoverbutton missionButtonActive': 'hoverbutton'}
                  sx={{width:26, height:26 }}/>
                </Divider>
              </Box>
              
            <Box width={'50%'} position={'relative'} onClick={()=>setSolution('kiosque')}
              sx={{
                '&:hover':{
                  cursor: 'pointer',
                  '& .hoverbutton': {
                    backgroundColor: '#8BBC1F'
                },
                '& .hovertext': {
                    fontWeight: 'bold',
                    fontStyle: 'Assistant',
                  }
                  }
              }}>     
                <Divider variant='fullwidth'>
                  <Typography
                  className={ solution === 'kiosque' ? 'hovertext missionTextActive': 'hovertext'}
                  sx={{
                    position: 'absolute',
                    top: 25,
                    right: {xs:'5%',sm:'5%'},
                    fontSize: {xs:10,md:13},
                  }}>Création de kiosques de Distribution</Typography>
                  <Typography sx={{position: 'absolute', pl:1, fontWeight:'bold'}}>4</Typography>
                  <Chip 
                  className={ solution === 'kiosque' ? 'hoverbutton missionButtonActive': 'hoverbutton'}
                  sx={{width:26, height:26 }}/>
                </Divider>
              </Box>
            
            </Box>
            </Grid>

          <Grid item xs={12} sm={6} md={4}
            sx={{
              '& .missionTextActive': {
                fontWeight: 'bold',
                fontStyle: 'Assistant',
              },
              '& .missionButtonActive': {
                backgroundColor: '#8BBC1F'
              }
            }} >
            <Box display={'flex'} mb={6} mt={3}>

              
              <Box width={'50%'} position={'relative'} onClick={()=>setSolution('maintenance')}
              sx={{
                '&:hover':{
                  cursor: 'pointer',
                  '& .hoverbutton': {
                    backgroundColor: '#8BBC1F'
                },
                '& .hovertext': {
                    fontWeight: 'bold',
                    fontStyle: 'Assistant',
                  }
                }
                    
                
              }}>     
                <Divider variant='fullwidth'>
                  <Typography
                  className={ solution === 'maintenance' ? 'hovertext missionTextActive': 'hovertext'}
                  sx={{
                    position: 'absolute',
                    top: 25,
                    right: {xs:'20%',sm:'21%'},
                    fontSize: {xs:10,md:13},
                  }}>Maintenance et Entretien</Typography>
                  <Typography sx={{position: 'absolute', pl:1, fontWeight:'bold'}}>5</Typography>
                  <Chip 
                  className={ solution === 'maintenance' ? 'hoverbutton missionButtonActive': 'hoverbutton'}
                  sx={{width:26, height:26 }}/>
                </Divider>
              </Box>
              
              <Box width={'50%'} position={'relative'} onClick={()=>setSolution('suivi')}
              sx={{
                '&:hover':{
                  cursor: 'pointer',
                  '& .hoverbutton': {
                    backgroundColor: '#8BBC1F'
                },
                '& .hovertext': {
                    fontWeight: 'bold',
                    fontStyle: 'Assistant',
                  }
                  }
              }}>     
                <Divider variant='fullwidth'>
                  <Typography
                  className={ solution === 'suivi' ? 'hovertext missionTextActive': 'hovertext'}
                  sx={{
                    position: 'absolute',
                    top: 25,
                    right: {xs:'27%',sm:'26%'},
                    fontSize: {xs:10,md:13},
                  }}>Suivi et rapportage </Typography>
                  <Typography sx={{position: 'absolute', pl:1, fontWeight:'bold'}}>6</Typography>
                  <Chip 
                  className={ solution === 'suivi' ? 'hoverbutton missionButtonActive': 'hoverbutton'}
                  sx={{width:26, height:26 }}/>
                </Divider>
              </Box>
              
            </Box>
            
          </Grid>


        </Grid>

        {/* debut miova text solution */}
        { solution === 'analyse' && <Analyse 
        text={"VolyVolt collabore avec vous pour analyser des projets d'électrification rurale sur mesure. VolyVolt commence par une analyse approfondie du projet d'électrification, en tenant compte des besoins spécifiques et des ressources disponibles de l'ONG ou de la fondation. Cette étape permet de définir la portée du projet et d'identifier les meilleures approches."}/>
        }

        { solution === 'installation' && <Analyse 
        text={"VolyVolt utilise des terres locales, telles que des plantations, pour mettre en place des générateurs d'énergie. Grâce à un système d'intelligence artificielle avancé, VolyVolt détermine avec précision la surface de cultures nécessaire pour produire l'énergie requise pour répondre aux besoins des ménages, tout en assurant une marge de sécurité. Cette approche garantit une production d'énergie optimale et durable, adaptée aux spécificités de chaque localité."}/>
        }

        { solution === 'distribution' && <Analyse 
        text={" VolyVolt assure la distribution des dispositifs de stockage d'énergie dans les localités concernées. Ces dispositifs permettent de stocker l'électricité produite, assurant ainsi l’alimentation continue au sein des foyers."}/>
        }

        { solution === 'kiosque' && <Analyse 
        text={"Pour assurer une distribution efficace de l'électricité produite, VolyVolt installe des kiosques de distribution d'énergie stratégiquement situés dans les localités ciblées. Le nombre de ces kiosques est défini en fonction des ressources disponibles et des besoins de chaque projet."}/>
        }

        { solution === 'maintenance' && <Analyse 
        text={"VolyVolt prend en charge la maintenance et l'entretien continus des installations pour garantir leur bon fonctionnement. Cela comprend la surveillance des équipements et les réparations nécessaires."}/>
        }

        { solution === 'suivi' && <Analyse 
        text={" Pour optimiser l'offre d'énergie et répondre de manière précise aux besoins des ménages, VolyVolt met en place des systèmes de suivi des données de consommation. VolyVolt vous fournit également des rapports sur la consommation au niveau des communautés rurales."}/>
        }
        
        {/* debut miova text solution */}
        <Typography pt={2}>
        Notre solution est spécifiquement conçue pour les ONG et les fondations qui partagent la vision selon laquelle : 
        </Typography>
      
        <Typography fontSize={19}>
        “ l'accès à une énergie fiable ne devrait pas être un luxe, mais un droit fondamental ”
        </Typography>
        <Typography pb={3}>
        Si vous vous reconnaissez dans cette vision et que vous cherchez à avoir un impact positif, alors la solution VolyVolt est faite pour vous.
        </Typography>
        <Divider variant="middle" sx={{ borderBottomWidth: 2, bgcolor: '#638715', mt:3, width:'60%', m: '0px auto' }} />

        <Typography variant='h6' sx={{color: '#08280D', fontSize:18, mt:3}}>
        DE VOS BESOINS A UNE ÉLECTRIFICATION RURALE REUSSIE
        </Typography>
        <Typography variant='h5'  mb={3} sx={{color: '#638715'}}>
            Processus de collaboration et de personnalisation chez VolyVolt
        </Typography>

        <Typography >
        Chez VolyVolt, nous comprenons que chaque projet est unique et nécessite une approche personnalisée pour assurer un impact positif durable. Notre processus est conçu pour vous fournir des solutions sur mesure qui sont alignées sur vos objectifs et répondent aux besoins spécifiques des communautés que vous servez.
        </Typography>

        
      </Box>
      </BackgroundRevealLayout>
      {/* End Offre */}

      {/* processus */}
      <Box display={'flex'} flexWrap={'wrap'} justifyContent={'center'} py={3}>

         <Processus 
          isProcessusHover={isProcessusHover}
          setProcessusHover={setProcessusHover}
          title={'1.PRISE DE CONTACT'} 
          image={<IconContact width={100} height={100}/>}
          text={"Lorsque vous envisagez de travailler avec VolyVolt, la première étape consiste à nous contacter. Vous nous faites part de vos besoins initiaux, notamment le nombre de ménages bénéficiaires, la localité et sa distance de localisation, la durée du contrat souhaitée, le nombre de kiosques de distribution souhaités, ainsi que toute limite budgétaire applicable."}
          />
         <Processus 
          isProcessusHover={isProcessusHover}
          setProcessusHover={setProcessusHover}
          title={'2.ANALYSE ET CONSULTATION'} 
          image={<IconAnalyse width={150} height={150}/>}
          text={"Après avoir reçu vos informations initiales, nous entamons une phase d'analyse et de consultation approfondies. Nous envoyons nos spécialistes sur le terrain pour comprendre de manière concrète les particularités de la région. Cette étape vise à analyser les ressources disponibles et à identifier les meilleures approches."}
          />
         <Processus 
          isProcessusHover={isProcessusHover}
          setProcessusHover={setProcessusHover}
          title={'3.DEVIS PERSONNALISÉ'} 
          image={<IconDevis width={150} height={150}/>}
          text={"Sur la base des informations collectées lors de l'étape précédente, nous élaborons un devis personnalisé. Ce devis détaille les coûts estimés, la planification du projet et toutes les spécifications techniques pertinentes. Il reflète précisément votre projet sur mesure."}
          />
         <Processus 
          isProcessusHover={isProcessusHover}
          setProcessusHover={setProcessusHover}
          title={'4.VALIDATION  & ACCORDS'} 
          image={<IconConvention width={150} height={150}/>}
          text={"Une fois le devis présenté, nous apportons les ajustements nécessaires. Une fois que vous êtes satisfait du devis, nous procédons à la validation et à la formalisation de l'accord. Cela implique la finalisation du contrat, la signature des accords et la définition claire des responsabilités et des attentes de chaque partie."}
          />
         <Processus 
          isProcessusHover={isProcessusHover}
          setProcessusHover={setProcessusHover}
          title={'5.MISE EN OEUVRE'} 
          image={<IconMiseOeuvre width={150} height={150}/>}
          text={"Avec l'accord en place, nous procédons à la mise en œuvre concrète du projet. Cela comprend l'installation des générateurs d'énergie locale, la distribution des dispositifs de stockage, la création des points de distribution d'énergie et toutes les activités nécessaires pour rendre le projet opérationnel."}
          />
         <Processus 
          isProcessusHover={isProcessusHover}
          setProcessusHover={setProcessusHover}
          title={'6.ÉVALUATION'} 
          image={<IconEvaluation width={150} height={150}/>}
          text={"Après la mise en œuvre, notre collaboration se poursuit par le biais d'un suivi et évaluation. Nous surveillons les données de consommation et apportons des améliorations au besoin. Cette étape garantit que le projet évolue de manière optimale pour répondre aux besoins des ménages bénéficiaires."}
          />
      
      </Box>
      {/*end  processus */}

      {/* END OFFRE */}

      {/* Avantage client */}
      <Grid container py={3}  sx={{
        background: 'linear-gradient(360deg, #2F2121 59%, #082D0E 100%)',
      }}>
        <Grid item xs={12} >
          <Typography variant='h6' sx={{color: '#8BBC1F'}} px={{xs:2, md: 12}}>
          AVANTAGES CLIENTS
          </Typography>
          <Typography pt={1} pb={3} color={'white'} px={{xs:2, md: 12}}>
          VolyVolt offre plusieurs avantages à ses segments de clients, les ONGs et les fondations, par rapport à la concurrence :
          </Typography>
            <AvantageClient/>
        </Grid>

      </Grid>
      {/* END Avantage client */}

      {/* FOIRE AUX QUESTION */}
      <Grid >
        <Typography variant='h5' align='center' sx={{color: '#638715', fontWeight: 'bold'}} pt={3}>FOIRE AUX QUESTIONS</Typography>
        <Typography px={{xs:1, md:12}} py={3}>
        Vous avez des questions sur VolyVolt ? Nous avons rassemblé les questions les plus fréquemment posées pour vous fournir toutes les réponses dont vous avez besoin. Si vous ne trouvez pas la réponse à votre question, n'hésitez pas à nous contacter. Nous sommes ravis de vous accompagner dans votre découverte de VolyVolt et de vous offrir une expérience énergétique sans pareille. Laissez-nous vous guider à travers notre FAQ et découvrez tout ce que vous devez savoir sur notre solution.
        </Typography>
      </Grid>
      <Grid container display={'flex'} justifyContent={'center'} pb={3}>
        <Grid item xs={12} md={8} sx={{ mx:{xs:1, md:0}}}>
          <Accordion sx={{my:1}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{color: '#8BBC1F'}}/>}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{backgroundColor: 'rgba(182, 194, 147, 0.54)'}}
            >
              <Typography sx={{ fontWeight: 'bold'}}>
                Comment fonctionne cette solution ? Comment générer de l'énergie à partir des cultures?
              </Typography>
            </AccordionSummary>
            <AccordionDetails
            sx={{
              bgcolor: '#E4EFC38A'
            }}>
              <Typography>
              Notre solution repose sur une technologie appelée "pile microbienne". Les micro-organismes présents dans le sol décomposent la matière organique des plantes en produisant de l'électricité. Cette électricité est ensuite stockée dans des batteries pour être utilisée par les ménages ruraux. Ainsi, nous générons de l'énergie propre directement à partir des cultures.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{my:1}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: '#8BBC1F'}}/>}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{backgroundColor: 'rgba(182, 194, 147, 0.54)'}}
            >
              <Typography sx={{ fontWeight: 'bold'}}>
              Pourquoi investir dans un projet à impact énergétique? Pourquoi ne pas opter pour un autre projet à impact social quelconque?
              </Typography>
            </AccordionSummary>
            <AccordionDetails
            sx={{
              bgcolor: '#E4EFC38A'
            }}>
              <Typography>
              Notre solution repose sur une technologie appelée "pile microbienne". Les micro-organismes présents dans le sol décomposent la matière organique des plantes en produisant de l'électricité. Cette électricité est ensuite stockée dans des batteries pour être utilisée par les ménages ruraux. Ainsi, nous générons de l'énergie propre directement à partir des cultures.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{my:1}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: '#8BBC1F'}}/>}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{backgroundColor: 'rgba(182, 194, 147, 0.54)'}}
            >
              <Typography sx={{ fontWeight: 'bold'}}>
              En quoi cette solution se différencie-t-elle des autres sources d'énergie ? Pourquoi choisir VolyVolt ?
              </Typography>
            </AccordionSummary>
            <AccordionDetails
            sx={{
              bgcolor: '#E4EFC38A'
            }}>
              <Typography>
              Notre solution repose sur une technologie appelée "pile microbienne". Les micro-organismes présents dans le sol décomposent la matière organique des plantes en produisant de l'électricité. Cette électricité est ensuite stockée dans des batteries pour être utilisée par les ménages ruraux. Ainsi, nous générons de l'énergie propre directement à partir des cultures.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{my:1}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: '#8BBC1F'}}/>}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{backgroundColor: 'rgba(182, 194, 147, 0.54)'}}
            >
              <Typography sx={{ fontWeight: 'bold'}}>
              Comment assurez-vous que l’offre d’énergie puisse  répondre convenablement aux demandes  d'énergie?
              </Typography>
            </AccordionSummary>
            <AccordionDetails
            sx={{
              bgcolor: '#E4EFC38A'
            }}>
              <Typography>
              Notre solution repose sur une technologie appelée "pile microbienne". Les micro-organismes présents dans le sol décomposent la matière organique des plantes en produisant de l'électricité. Cette électricité est ensuite stockée dans des batteries pour être utilisée par les ménages ruraux. Ainsi, nous générons de l'énergie propre directement à partir des cultures.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{my:1}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: '#8BBC1F'}}/>}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{backgroundColor: 'rgba(182, 194, 147, 0.54)'}}
            >
              <Typography sx={{ fontWeight: 'bold'}}>
              Quels appareils sont supportés par les dispositifs de stockage VolyVolt ?
              </Typography>
            </AccordionSummary>
            <AccordionDetails
            sx={{
              bgcolor: '#E4EFC38A'
            }}>
              <Typography>
              Notre solution repose sur une technologie appelée "pile microbienne". Les micro-organismes présents dans le sol décomposent la matière organique des plantes en produisant de l'électricité. Cette électricité est ensuite stockée dans des batteries pour être utilisée par les ménages ruraux. Ainsi, nous générons de l'énergie propre directement à partir des cultures.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{my:1}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: '#8BBC1F'}}/>}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{backgroundColor: 'rgba(182, 194, 147, 0.54)'}}
            >
              <Typography sx={{ fontWeight: 'bold'}}>
              Comment VolyVolt garantit-il la durabilité des installations et la maintenance à long terme dans les environnements ruraux ?
              </Typography>
            </AccordionSummary>
            <AccordionDetails
            sx={{
              bgcolor: '#E4EFC38A'
            }}>
              <Typography>
              Notre solution repose sur une technologie appelée "pile microbienne". Les micro-organismes présents dans le sol décomposent la matière organique des plantes en produisant de l'électricité. Cette électricité est ensuite stockée dans des batteries pour être utilisée par les ménages ruraux. Ainsi, nous générons de l'énergie propre directement à partir des cultures.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{my:1}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: '#8BBC1F'}}/>}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{backgroundColor: 'rgba(182, 194, 147, 0.54)'}}
            >
              <Typography sx={{ fontWeight: 'bold'}}>
              Quels sont les avantages concrets que VolyVolt peut offrir  aux ONG et/ou  Fondations, pour soutenir leurs objectifs de développement durable ?
              </Typography>
            </AccordionSummary>
            <AccordionDetails
            sx={{
              bgcolor: '#E4EFC38A'
            }}>
              <Typography>
              Notre solution repose sur une technologie appelée "pile microbienne". Les micro-organismes présents dans le sol décomposent la matière organique des plantes en produisant de l'électricité. Cette électricité est ensuite stockée dans des batteries pour être utilisée par les ménages ruraux. Ainsi, nous générons de l'énergie propre directement à partir des cultures.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{my:1}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: '#8BBC1F'}}/>}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{backgroundColor: 'rgba(182, 194, 147, 0.54)'}}
            >
              <Typography sx={{ fontWeight: 'bold'}}>
              Comment pouvons nous être sûre que notre collaboration avec VolyVolt renforcera notre image de RSE et/ou notre impact social ?
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                bgcolor: '#E4EFC38A'
              }}>
              <Typography>
              Notre solution repose sur une technologie appelée "pile microbienne". Les micro-organismes présents dans le sol décomposent la matière organique des plantes en produisant de l'électricité. Cette électricité est ensuite stockée dans des batteries pour être utilisée par les ménages ruraux. Ainsi, nous générons de l'énergie propre directement à partir des cultures.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{my:1}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: '#8BBC1F'}}/>}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{backgroundColor: 'rgba(182, 194, 147, 0.54)'}}
            >
              <Typography sx={{ fontWeight: 'bold'}}>
              Quelle est la durée typique d'un contrat avec VolyVolt ?
              </Typography>
            </AccordionSummary>
            <AccordionDetails
            sx={{
              bgcolor: '#E4EFC38A'
            }}>
              <Typography>
              Notre solution repose sur une technologie appelée "pile microbienne". Les micro-organismes présents dans le sol décomposent la matière organique des plantes en produisant de l'électricité. Cette électricité est ensuite stockée dans des batteries pour être utilisée par les ménages ruraux. Ainsi, nous générons de l'énergie propre directement à partir des cultures.
              </Typography>
            </AccordionDetails>
          </Accordion>
          
          <Accordion sx={{my:1}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: '#8BBC1F'}}/>}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{backgroundColor: 'rgba(182, 194, 147, 0.54)'}}
            >
              <Typography sx={{ fontWeight: 'bold'}}>
              Comment les personnes intéressées peuvent-elles s'impliquer ou soutenir les initiatives de VolyVolt?
              </Typography>
            </AccordionSummary>
            <AccordionDetails
            sx={{
              bgcolor: '#E4EFC38A'
            }}>
              <Typography>
              Notre solution repose sur une technologie appelée "pile microbienne". Les micro-organismes présents dans le sol décomposent la matière organique des plantes en produisant de l'électricité. Cette électricité est ensuite stockée dans des batteries pour être utilisée par les ménages ruraux. Ainsi, nous générons de l'énergie propre directement à partir des cultures.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        
      </Grid>
    </>
  )
}
