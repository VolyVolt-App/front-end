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
            text: "Je suis Nadia, du village d'Anjanadoria. La nuit ici, est synonyme de pénombre et d'insécurité. Notre communauté est limitée dans ses activités. "
        },{
            owner: "Clarelle",
            address: "Commune de Ankadinandriana",
            text: "Je m'appelle Clarelle, je réside dans le fokontany d'Ambohitromby, et je suis veuve. Ma fille unique poursuit ses études à Antananarivo. Nous devons rationner l'utilisation de nos téléphones et radios, et l'ensemble du fokontany se sent isolé, privé de nouvelles. Je n'ai que peu de contacts avec ma fille. "
        },{
            owner: "Lalaina et Prisca",
            address: "Commune de Ranovao",
            text: "Nous sommes Lalaina et Prisca, une famille du fokontany d'Ambohimiadana. Nos enfants luttent pour leurs études la nuit. Ils ne peuvent pas étudier convenablement."
        },{
            owner: "Edmond",
            address: "Commune de Ranovao",
            text: "Nos soirées à Ambohimiadana sont toujours plongées dans l'obscurité. La radio reste un luxe que nous ne pouvons pas nous permettre. Nous aimerons bien avoir ce luxe mais surtout avoir l’électricité. "
        },{
            owner: "Claudette",
            address: "Commune de Ranovao",
            text: "En tant que mère de famille, j'ai toujours voulu que mes enfants réussissent à l'école. Les devoirs du soir leurs sont un défi, car nous n'avons pas d'électricité pour l'éclairage. J’aimerai tellement que mes enfants puissent étudier confortablement le soir. Leurs résultats scolaires devraient s’améliorer."
        },{
            owner: "Lantoniaina",
            address: "Commune de Masindray",
            text: "Mon enfant ne supporte ni les bougies ni l'odeur des lampes à pétrole, ce qui rend nos soirées interminables. Nous sommes conscients des dangers causés par les bougies et les lampes à pétrole mais nous n’avons pas le choix. "
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
