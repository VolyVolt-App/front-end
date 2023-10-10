import { Box, Typography } from '@mui/material'
import React from 'react'
import {ReactComponent as Gillemet} from '../../asset/icon/biggillemet.svg'
import Carousel from 'react-material-ui-carousel'

export const Testimony = () => {
  var items = [
    {
        owner: "Steve RAJAOFERANA",
        occupation: 'Responsable Partenariats',
        organisation: "ONG Antsika",
        text: "Quand l'équipe de Volyvolt m'a présenté leur idée de projet, cela me semblait impossible. Cependant, j'ai remarqué leur détermination et leur optimisme face au projet, j'ai vu leurs premiers résultats, ce qui a fait changer mon avis initial de scepticisme. Maintenant, je sais que bien qu'ils ne soient que des jeunes, ils seront réellement capables d'accomplir de grandes choses. "
    }, 
    
    {
      owner: "Minoarivony RIHANJO",
      occupation: 'Présidente',
      organisation: "Fondation Hernest ",
      text: "L'électrification rurale à partir d'énergies provenant de plantes est une idée vraiment originale, mais surtout très responsable. Tout ce que je peux leur dire, c'est que je les encourage fortement à mener à terme leurs projets, car cela pourrait bien être une grande innovation et améliorer les conditions de vie en milieu rural. "
    },
    
    
]
  return (
    <Carousel indicators={false} sx={{width: '100%'}}
        >
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
    </Carousel>
  )
}

function Item(props)
{
    return (
      <Box position={'relative'} height={{xs: 620,sm:400, md:400,lg:355,xl:300}} display={'flex'} alignItems={'center'} justifyContent={'center'}>
        <Box position={'absolute'} top={{xs:-5, md:-20}} left={{xs:-5, md: -20}}>
            <Gillemet/>
        </Box>
        <Box>
              
          <Typography color={'white'} fontSize= {{xs: 14 ,sm: 16}}>{props.item.text}</Typography>
          <Typography variant='h6' sx={{
              mt:3,
              fontWeight: 'bold',
              color: 'white'
          }}>
          -- {props.item.owner}
          </Typography>
          <Typography variant='h6' color={'white'}>
          {props.item.occupation+' '} - {' '+props.item.organisation}
          </Typography>
        </Box>
    </Box>
    )
}
