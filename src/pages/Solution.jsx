import { Accordion,AccordionSummary ,AccordionDetails ,Box, Divider, Grid, Typography, Chip, CardMedia } from '@mui/material'
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
import { Link } from 'react-router-dom';
import { CarouselAvantageClient } from '../component/solution/CarouselAvantageClient';

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

      
    <BackgroundRevealLayout startBgColor="#082D0E" endBgColor="#638715" amount={0.5}  >
      <Grid container px={{xs:2,md:14}} py={3} 
      sx={{
        //backgroundColor: '#638715'
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
            <CardMedia component={'iframe'}
              src='https://www.youtube.com/embed/XESK2DleVro?si=kuxpv2AhAu-I1bip'
              sx={{
                aspectRatio: '16/9',
                border: 0
              }}
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
        Notre offre principale consiste à <span style={{fontWeight: 'bold'}}> fournir des services d’électrification rurale complets clé en main </span> pour l'installation de générateurs d'énergie locaux, en utilisant les cultures locales.Notre solution s’adresse aux acteurs du secteur philanthropique qui souhaitent maximiser leurs impacts sociaux à travers l’électrification rurale :  Organismes Non Gouvernementaux et Fondations. VolyVolt prend en charge l'ensemble du processus d'implémentation des projets, de l’étude et planification à l'installation des systèmes d'électrification, en veillant à ce que tout fonctionne de manière transparente.
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
              Investir dans un projet à impact énergétique, tel que VolyVolt, revêt une importance cruciale en raison de la disparité d'accès à l'énergie dans les zones rurales. Dans ces régions, de nombreuses communautés sont laissées dans l'obscurité, sans accès à l'électricité de base, ce qui crée une fracture entre les zones rurales et urbaines. Opter pour un projet à impact énergétique signifie reconnaître le potentiel de faire une différence significative dans la vie des ménages ruraux. L'accès à l'énergie permet d’améliorer de manière significative la qualité de vie. En investissant dans de tels projets, vous devenez un catalyseur du changement, un acteur clé pour combler le fossé énergétique et créer un avenir plus égalitaire et prospère pour tous.
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
              VolyVolt se distingue des autres sources d'énergie par plusieurs caractéristiques uniques qui en font une option exceptionnelle. Tout d'abord, VolyVolt est résolument respectueux de l'environnement, fournissant une énergie verte grâce à la technologie innovante de la pile microbienne. Cette approche novatrice promet également de renforcer la visibilité de votre organisation grâce à son caractère avant-gardiste.
              </Typography>
              <Typography pt={1}>
              En produisant de l'énergie directement à partir des cultures locales, VolyVolt favorise l'autonomie énergétique des communautés rurales, ce qui est un avantage significatif par rapport aux sources d'énergie traditionnelles souvent inaccessibles dans ces zones. De plus, notre flexibilité opérationnelle permet une personnalisation des services pour répondre précisément aux besoins de notre clientèle. Nous travaillons en étroite collaboration avec nos clients, tels que les ONG et les Fondations, pour concevoir des solutions sur mesure qui maximisent l'impact social.
              </Typography>
              <Typography pt={1}>
              En fin de compte, choisir VolyVolt signifie choisir une solution qui a un impact positif sur l'environnement, sur les communautés rurales que nous servons, et sur votre organisation. C'est un choix qui incarne l'innovation, la durabilité et la responsabilité sociale, renforçant ainsi votre image et votre engagement envers un avenir plus vert et plus équitable pour tous.
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
              Pour nous assurer que notre offre d'énergie répond convenablement aux demandes d'énergie de chaque communauté rurale que nous servons, nous mettons en place un processus rigoureux. Avant d'installer nos systèmes d'énergie dans une communauté, nous effectuons une étude pour estimer les besoins énergétiques de la localité en tenant compte du nombre de ménages et des besoins énergétiques. Cette étude nous permet de déterminer la taille optimale de nos installations ainsi que la capacité de stockage d'énergie nécessaire pour répondre aux besoins spécifiques de chaque communauté. Nous nous assurons ainsi que nos installations sont dimensionnées de manière à fournir une quantité suffisante d'énergie tout en conservant une marge pour faire face aux éventuels pics de consommation.
              </Typography>
              <Typography pt={1}>
              Une fois que nos installations sont opérationnelles, nous assurons un suivi constant des consommations de chaque ménage. Nous utilisons des technologies avancées, telles que l'intelligence artificielle, pour analyser les tendances de consommation énergétique. En fonction de ces données, nous ajustons notre offre pour fournir une alimentation en énergie adaptée à la demande. 
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
              Nos dispositifs sont conçus pour répondre aux besoins essentiels en énergie des ménages ruraux. Cela comprend l'éclairage (ampoules LED), le rechargement de téléphones mobiles, les radios et d'autres petits appareils électroniques. Notre objectif est de fournir une source d'énergie fiable pour les activités de base. 
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
              Nous nous assurons de la durabilité de nos installations grâce à une conception robuste qui résiste aux conditions difficiles des zones rurales. De plus, nous effectuons une maintenance régulière avec des visites sur site pour inspecter et entretenir nos installations. Nous collaborons également avec les communautés locales, en les formant pour qu'elles puissent prendre en charge certaines opérations de maintenance de base, ce qui renforce la pérennité de nos projets. Cette approche globale garantit que nos installations restent opérationnelles et bénéfiques pour les communautés rurales sur le long terme.              
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
              VolyVolt propose aux ONG et aux Fondations une opportunité exceptionnelle de maximiser leur impact social. En optant pour notre solution énergétique durable, vous contribuez directement à l'amélioration des conditions de vie des communautés rurales, en fournissant un accès à une énergie verte et propre. Votre soutien à VolyVolt crée également des opportunités de visibilité, mettant en avant votre engagement envers le développement durable et votre responsabilité sociale. Notre modèle clé en main simplifie la gestion de projet, permettant à votre organisation de se concentrer pleinement sur sa mission humanitaire et sociale tout en laissant VolyVolt s'occuper des aspects techniques et opérationnels. Ensemble, nous pouvons faire une différence significative dans la vie des communautés rurales tout en renforçant l'impact social de votre organisation.              </Typography>
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
              Vous pouvez être assuré que votre collaboration avec VolyVolt renforcera votre image de RSE (Responsabilité Sociétale des Entreprises) et votre impact social de manière significative. Les projets de VolyVolt apportent des améliorations réelles et tangibles dans la vie des communautés rurales en fournissant un accès à l'énergie propre. Votre soutien direct contribue à ces améliorations, ce qui montre clairement votre engagement envers des causes sociales et environnementales essentielles.
              </Typography>
              <Typography pt={1}>
              VolyVolt s'engage à mesurer et à communiquer de manière transparente les données de consommation et de production d'énergie au niveau local de ses projets. Cela vous permet de suivre et d'évaluer de manière précise l'impact de votre collaboration. Vous pouvez utiliser des indicateurs spécifiques ou collecter les témoignages de bénéficiaires pour mesurer les résultats de vos actions.
              </Typography>
              <Typography>
              En mettant en avant ces résultats concrets dans vos communications externes, vous renforcez votre image de RSE et votre impact social, ce qui peut également susciter la reconnaissance publique. Votre collaboration avec VolyVolt est un moyen efficace de démontrer votre engagement envers des actions positives pour la société et l'environnement, avec des impacts visibles et mesurables.
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
              La durée typique d'un contrat avec VolyVolt varie en fonction des besoins et des objectifs spécifiques de chaque organisation cliente. En général, nos contrats sont conçus pour être flexibles et adaptés aux préférences de nos clients, y compris les ONG et les fondations. Cela signifie que la durée de l'engagement peut être définie en fonction des projets particuliers que nous entreprenons ensemble. Certaines organisations peuvent choisir de s'engager sur des projets à court terme, tandis que d'autres préfèrent des collaborations à plus long terme pour maximiser leur impact social. Nous travaillons en étroite collaboration avec nos clients pour élaborer des accords qui répondent le mieux à leurs objectifs et à leur mission tout en soutenant nos initiatives d'accès à l'énergie verte dans les communautés rurales. Notre objectif principal est de créer des collaborations fructueuses qui apportent des avantages durables aux communautés que nous servons, et nous sommes ouverts à discuter des modalités de collaboration pour répondre à ces objectifs.
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
              Les personnes intéressées à s'impliquer ou à soutenir les initiatives de VolyVolt ont plusieurs options pour contribuer à notre mission de fournir de l'énergie verte aux communautés rurales et améliorer leurs conditions de vie. Voici comment elles peuvent le faire :              
              </Typography>
              <ul>
                <li>
                Devenir un bénévole : Les individus souhaitant s'impliquer activement peuvent devenir des bénévoles pour VolyVolt. Ils peuvent participer à des missions sur le terrain, aider à la mise en place des systèmes d'énergie, ou contribuer à la sensibilisation et à la collecte de fonds.
                </li>
                <li>
                Faire un don : Les personnes qui souhaitent soutenir financièrement nos projets peuvent 
                &nbsp;
                <Link to={'/don'} style={{
                  fontWeight: 'bold',
                  textDecoration: 'underline'
                }}>  faire un don </Link>&nbsp;
                 à VolyVolt. Ces dons contribuent à alléger les coûts financiers de VolyVolt et pourraient permettre à VolyVolt de financer un projet autonome dans des petites localités si le montant collecté le permet.
                </li>
                <li>
                Sensibiliser et partager : Sensibiliser les autres à la mission de VolyVolt en partageant nos initiatives sur les médias sociaux, en participant à nos campagnes de sensibilisation et en encourageant d'autres personnes à s'impliquer.
                </li>
                <li>
                Devenir un ambassadeur : Les personnes passionnées par notre mission peuvent devenir des ambassadeurs de VolyVolt, en représentant notre organisation, en sensibilisant le public et en mobilisant des ressources.
                </li>
              </ul>
              <Typography>
              En choisissant l'une ou plusieurs de ces options, les personnes intéressées peuvent jouer un rôle actif dans notre effort pour fournir de l'énergie propre aux communautés rurales et contribuer à notre mission d'amélioration des conditions de vie. Chaque contribution  fait une différence significative.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        
      </Grid>
    </>
  )
}

