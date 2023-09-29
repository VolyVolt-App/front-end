import { Box, Typography } from '@mui/material'
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { ReactComponent as GillemetStart } from '../../asset/icon/Gillemetstart.svg'
import { ReactComponent as GillemetEnd } from '../../asset/icon/Gillemetend.svg'

export const BenificiairyCarrousel = () => {
    var items = [
        {
            owner: "Meva",
            address: "Commune d’Ankadinandriana",
            text: "Je m’appelle Meva, j’habite à Soamonina, j’aime beaucoup lire, le matin je fais mes corvées habituelles. C’est seulement le soir que je  profite pour lire, quand on a des bougies, il faut quand même économiser les bougies car elles sont chères et les épiceries sont à 2km. Depuis que la solution VolyVolt s’est instauré au niveau du fokotany, je profite  des livres chaque soir."
        },
        {
            owner: "Nadia",
            address: "Commune de Anjanadoria",
            text: "Je suis Nadia, du village d'Anjanadoria. Avant VolyVolt, la nuit était synonyme de pénombre et d'insécurité. Notre communauté était limitée dans ses activités. Maintenant, grâce à l'éclairage de VolyVolt, nous organisons des réunions communautaires en soirée et nos enfants jouent en toute sécurité. C'est un changement tangible dans notre vie quotidienne."
        },{
            owner: "Clarelle",
            address: "Commune de Ankadinandriana",
            text: "Je m'appelle Clarelle, je réside dans le fokontany d'Ambohitromby, et je suis veuve. Ma fille unique poursuit ses études à Antananarivo. VolyVolt a véritablement révolutionné notre vie. Auparavant, nous devions rationner l'utilisation de nos téléphones et radios, et l'ensemble du fokontany se sentait isolé, privé de nouvelles. Je n'avais que peu de contacts avec ma fille. Désormais, je peux m'informer grâce à la radio, appeler plus fréquemment ma fille."
        },{
            owner: "Lalaina et Prisca",
            address: "Commune de Ranovao",
            text: "Nous sommes Lalaina et Prisca, une famille du fokontany d'Ambohimiadana. Avant VolyVolt, nos enfants luttaient pour leurs études la nuit. Grâce à cette solution, nos enfants peuvent maintenant étudier avec facilité. Nous sommes fiers de les voir réussir et sommes reconnaissants envers VolyVolt pour avoir éclairé leur avenir."
        },{
            owner: "Edmond",
            address: "Commune de Ranovao",
            text: "Avant l'arrivée de VolyVolt, nos soirées à Ambohimiadana étaient plongées dans l'obscurité. La radio était un luxe que nous ne pouvions pas nous permettre. Maintenant, grâce à l'électricité fournie par VolyVolt, nous écoutons la radio chaque soir. Nous avons également installé des ampoules dans nos maisons, ce qui rend nos soirées plus lumineuses et agréables."
        },{
            owner: "Claudette",
            address: "Commune de Ranovao",
            text: "En tant que mère de famille, j'ai toujours voulu que mes enfants réussissent à l'école. Avant VolyVolt, les devoirs du soir étaient un défi, car nous n'avions pas d'électricité pour l'éclairage. Maintenant, avec les dispositifs fournies par VolyVolt et l’ONG Angovosoa, mes enfants peuvent étudier confortablement le soir. Leurs résultats scolaires s'améliorent, et cela me remplit de fierté."
        },{
            owner: "Lantoniaina",
            address: "Commune de Masindray",
            text: "Mon enfant ne supportait ni les bougies ni l'odeur des lampes à pétrole, ce qui rendait nos soirées . Grâce à l'électricité fournie par VolyVolt, nous pouvons maintenant éclairer notre maison avec des ampoules lumineuses et sans danger pour la santé. La sécurité et le bien-être de ma famille sont ma priorité, et VolyVolt a contribué à les améliorer considérablement."
        },
        
    ]

  return (
    <Carousel sx={{width: '100%', backgroundColor: '#6E9F00'}}
        indicatorIconButtonProps={{
            style: {
                //padding: '10px',    // 1
                color: '#84AF4D'       // 3
            }
        }}

        activeIndicatorIconButtonProps={{
            style: {
                color: '#9AD516' // 2
            }
        }}>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
    </Carousel>
  )
}

function Item(props)
{
    return (
        <Box  sx={{
            px: {xs: 1,sm: 6, md: 6},
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: {xs: 290, sm: 210, md:150, lg: 120}
          }}>
            <Box sx={{alignSelf: 'flex-start'}}><GillemetStart width={20}/></Box>
            <Box>
                <Typography align='center' color={'white'} sx={{
                    fontFamily: 'Cantarell',
                    p:1,
                    fontSize: {xs: 14 ,sm: 16}
                    }}>
                        {props.item.text}
                </Typography>
                <Typography textAlign={'center'} color={'white'} fontWeight={'bold'}>{props.item.owner+'  '}  -  {'  '+props.item.address}</Typography>
            </Box>

            <Box sx={{alignSelf: 'flex-end'}}><GillemetEnd width={20} sx={{alignSelf: 'flex-end'}}/></Box>
        </Box>
    )
}
