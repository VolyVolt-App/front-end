import { Box, Typography } from '@mui/material'
import React from 'react'
import {ReactComponent as Gillemet} from '../../asset/icon/biggillemet.svg'
import Carousel from 'react-material-ui-carousel'

export const Testimony = () => {
  var items = [
    {
        owner: "Steve RAJAOFERANA",
        occupation: 'Strategic Manager',
        organisation: "ONG Antsika",
        text: "Je m’appelle Meva, j’habite à Soamonina, j’aime beaucoup lire, le matin je fais mes corvées habituelles. C’est seulement le soir que je  profite pour lire, quand on a des bougies, il faut quand même économiser les bougies car elles sont chères et les épiceries sont à 2km. Depuis que la solution VolyVolt s’est instauré au niveau du fokotany, je profite  des livres chaque soir."
    },
    {
      owner: "Vony RATSINJOARIFETY",
      occupation: 'Chief Executive Officer',
      organisation: "ONG  Andry Iankinana",
      text: "Nous sommes encore relativement nouveaux dans notre partenariat avec VolyVolt, mais nous sommes déjà profondément impressionnés par leur engagement à apporter la lumière dans les régions rurales. Leur solution d'électrification rurale a eu un impact considérable sur nos projets. En plus de fournir de l'électricité propre aux communautés, elle a également ouvert la porte à de nouvelles opportunités économiques locales. VolyVolt a fait preuve d'un engagement solide envers notre mission commune, et grâce à notre collaboration étroite, nous avons déjà réalisé des projets concrets qui ont transformé la vie des gens, leur offrant de nouvelles perspectives et un avenir plus radieux. Je recommande à 100%."
    },
    {
      owner: "Heriniony ANDRIANJOARIFENITRA",
      occupation: 'Responsable Partenariats',
      organisation: "Fondation Energie verte et durable",
      text: "VolyVolt n'est pas seulement un partenaire, c'est aussi un ami précieux. Leur équipe parvient à maintenir un niveau élevé de professionnalisme tout en étant chaleureuse et accueillante envers leurs clients. Ce qui distingue vraiment VolyVolt, c'est leur valorisation de l'aspect humain et de l'interaction. Je pense que c'est la clé de leur réussite. Lors de notre première rencontre, le responsable m'a accueilli avec gentillesse et a patiemment répondu à toutes mes nombreuses questions. Lorsque notre fondation a adopté leur solution, les impacts positifs sont rapidement devenus évidents. Nous envisageons avec enthousiasme de travailler sur de nouveaux projets et d'étendre notre collaboration pour apporter la lumière, l'espoir et le changement à encore plus de communautés rurales. Avec VolyVolt, nous sommes confiants que notre mission commune continuera de prospérer, transformant ainsi la vie de nombreuses personnes."
    },
    {
      owner: "Herbert JOSOARIVELONA",
      occupation: 'Chief Executive Officer',
      organisation: "Fondation TOGETHER",
      text: "L'impact de leur solution d'électrification rurale est incontestable. Cela a eu un effet d'entraînement positif sur de nombreuses familles . Ce qui nous impressionne le plus chez VolyVolt, c'est leur volonté constante d'innover et d'améliorer leur solution. Ils écoutent activement nos besoins et intègrent nos commentaires dans leurs projets. Cela crée une dynamique de collaboration exceptionnelle. Nous envisageons d'étendre notre partenariat avec VolyVolt pour toucher encore plus de communautés et faire progresser notre mission de développement durable. En travaillant ensemble, nous sommes convaincus que nous pouvons accomplir des réalisations encore plus remarquables."
    },
    {
      owner: "Minoarivony RIHANJO",
      occupation: 'Responsable Communication',
      organisation: "ONG  Bel’Avenir",
      text: "Lorsque vous vous interrogez sur la capacité d'une seule entreprise à apporter un changement significatif, je vous invite à découvrir l'histoire de VolyVolt. Ce qui m'inspire le plus, c'est que VolyVolt démontre qu'une entreprise peut être à la fois rentable et socialement responsable. Ils prouvent que l'impact social et environnemental peut être au cœur d'un modèle économique réussi. C'est une source d'inspiration pour nous tous, car cela montre que nous avons le pouvoir de créer un changement positif, quel que soit notre domaine d'activité.Alors, si vous vous demandez comment une seule entreprise peut avoir un impact significatif, je vous invite à suivre l'histoire de VolyVolt. C'est une histoire qui nous rappelle que nous pouvons tous contribuer à rendre ce monde meilleur, un projet à la fois."
    },
    {
      owner: "Jeanne Hernest GALVATIER ",
      occupation: 'Présidente',
      organisation: "Fondation Hernest ",
      text: "Quand on parle de l'avenir et du rôle des jeunes, je dois admettre que je n'étais pas convaincu que cela pouvait changer le monde de manière significative. Cependant, après avoir eu l'occasion de travailler en étroite collaboration avec l'équipe de VolyVolt, j'ai complètement révisé mon point de vue. Leur équipe, composée de jeunes passionnés et déterminés, est une source constante d'inspiration.Ils ont pris les problèmes de l'accès à l'électricité dans les régions rurales et les ont transformés en opportunités. Ce qui est encore plus remarquable, c'est leur engagement envers l'impact social.  Ils ont compris que le succès économique et le bien-être social sont étroitement liés.  Travailler avec VolyVolt a été une expérience transformative pour notre organisation. Leur équipe sait allier professionnalisme, chaleur humaine et une passion inébranlable pour leur mission. C'est une preuve vivante que la jeunesse peut non seulement façonner l'avenir, mais aussi l'illuminer."
    },
    {
      owner: "Thierry Mamy TSARAVELO",
      occupation: 'Chargé de communication',
      organisation: "ONG  Filongoa",
      text: "Nous avons eu le privilège de travailler avec VolyVolt sur plusieurs projets d'électrification rurale, et les résultats ont été tout simplement extraordinaires. Grâce à leur technologie innovante et à leur approche personnalisée, nous avons pu électrifier des centaines de foyers dans des régions isolées. Les sourires sur les visages des habitants sont la meilleure récompense pour notre collaboration. VolyVolt ne se contente pas de fournir de l'électricité, ils apportent de l'espoir et du changement concret. C'est un partenaire de confiance, et nous sommes fiers de contribuer ensemble à un avenir meilleur. "
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
