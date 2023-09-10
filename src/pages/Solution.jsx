import { Accordion,AccordionSummary ,AccordionDetails ,Box, Divider, Grid, Typography } from '@mui/material'
import React from 'react'


import bannerImage from '../asset/image/Group 104.png'
import bannerVideo from '../asset/image/Group 103.png'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Analyse } from '../component/solution/Analyse';

export const Solution = () => {
 /* const AccordionSummary = ({
    root: {
      flexDirection: "column"
    },
    content: {
      marginBottom: 0
    },
    expandIcon: {
      marginRight: 0,
      paddingTop: 0
    }
  })(MuiAccordionSummary);*/
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
            L'ENERGIE VERTE AU COEUR DE VOS ACTIONS
            </Typography>
            <Typography variant='h6' color={'white'} fontWeight={'bold'} my={2}>
            Embarquez aujourd'hui dans le courant de l'énergie verte et osez faire la différence au cœur des communautés rurales.
            </Typography>
            <Typography sx={{color: '#bbb'}}>
            Chaque initiative que vous entreprenez devient une vague d'impact positif, éclairant les foyers et les horizons des communautés rurales. Prenez la tête en tant que catalyseur audacieux du changement.
            </Typography>
        </Grid>
      </Grid>{/* end container */}

      <Grid container px={{xs:2,md:14}} py={3} 
      sx={{
        backgroundColor: '#638715'
      }}>
        <Grid item xs={12} md={8} >
            <Typography variant='h6' sx={{color: '#08280D', fontSize:15}}>
                ENERGIE À PARTIR DES CULTURES
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
        <Grid item xs={12} md={4} >
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

      {/* OFFRE */}
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

        <Analyse />
        <Divider variant="middle" sx={{ borderBottomWidth: 2, bgcolor: '#638715', mt:3, width:'60%', m: '0px auto' }} />

        <Typography variant='h6' sx={{color: '#08280D', fontSize:18, mt:3}}>
        DE VOS BESOINS A UNE ELECTRIFICATION RURALE REUSSIE
        </Typography>
        <Typography variant='h5'  mb={3} sx={{color: '#638715'}}>
            Processus de collaboration et de personnalisation chez VolyVolt
        </Typography>

        <Typography >
        Chez VolyVolt, nous comprenons que chaque projet est unique et nécessite une approche personnalisée pour assurer un impact positif durable. Notre processus est conçu pour vous fournir des solutions sur mesure qui sont alignées sur vos objectifs et répondent aux besoins spécifiques des communautés que vous servez.
        </Typography>
      </Box>
      {/* END OFFRE */}

      {/* FOIRE AUX QUESTION */}
      <Grid >
        <Typography variant='h5' align='center' sx={{color: '#638715', fontWeight: 'bold'}} pt={3}>FOIRE AUX QUESTIONS</Typography>
        <Typography px={{xs:1, md:12}} py={3}>
        Vous avez des questions sur VolyVolt ? Nous avons rassemblé les questions les plus fréquemment posées pour vous fournir toutes les réponses dont vous avez besoin. Si vous ne trouvez pas la réponse à votre question, n'hésitez pas à nous contacter. Nous sommes ravis de vous accompagner dans votre découverte de VolyVolt et de vous offrir une expérience énergétique sans pareille. Laissez-nous vous guider à travers notre FAQ et découvrez tout ce que vous devez savoir sur notre solution.
        </Typography>
      </Grid>
      <Grid container display={'flex'} justifyContent={'center'} pb={3}>
        <Grid item xs={12} md={8}>
          <Accordion>
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

          <Accordion>
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

          <Accordion>
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

          <Accordion>
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

          <Accordion>
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

          <Accordion>
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

          <Accordion>
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

          <Accordion>
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

          <Accordion>
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
          
          <Accordion>
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
