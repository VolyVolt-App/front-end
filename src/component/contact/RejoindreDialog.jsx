import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from '@mui/material'
import React from 'react'

export const RejoindreDialog = ({rejoindreDialog, setRejoindreDialog}) => {
  return (
    <Dialog 
    open={rejoindreDialog}
    scroll='paper'
    onClose={()=>setRejoindreDialog(false)}
    >
        <DialogTitle sx={{color: '#8BBC1F', bgcolor: '#082D0E'}} variant='h6'>
        Pourquoi Rejoindre VolyVolt en Tant que Bénévole ?
        </DialogTitle>
        <DialogContent
        sx={{
            backgroundColor: '#082D0E'
        }}>
            <DialogContentText>
                <Typography color={'white'}>
                Bienvenue dans l'aventure VolyVolt, une opportunité exceptionnelle d'apporter un impact concret et positif aux communautés rurales de Madagascar. Voici pourquoi vous devriez envisager de faire partie de notre équipe de bénévoles :
                </Typography>
                <Typography color={'white'} py={1}>
                <span style={{fontWeight: 'bold'}}>Réalisation d'un Impact Concret :</span> Chez VolyVolt, nous ne nous contentons pas de rêver d'un monde meilleur, nous le façonnons. En tant que bénévole, vous serez un acteur essentiel de l'électrification rurale durable, améliorant la vie de milliers de personnes en apportant la lumière là où elle est nécessaire. Vous ressentirez directement l'impact positif de votre travail grâce à l'amélioration des conditions de vie des communautés que nous servons.
                </Typography>
                <Typography color={'white'} py={1}>
                <span style={{fontWeight: 'bold'}}>Aventure Humaine et Mentoring :</span> Rejoindre VolyVolt, c'est s'embarquer dans une aventure humaine exceptionnelle. Vous ferez partie d'une équipe passionnée, déterminée à créer un changement significatif. Vous vivrez des expériences qui transcendent les frontières de la vie quotidienne. De plus, notre équipe expérimentée vous encadrera et vous guidera tout au long de votre parcours, offrant un précieux mentoring pour votre développement personnel et professionnel.
                </Typography>
                <Typography color={'white'} py={1}>
                <span style={{fontWeight: 'bold'}}>Acquisition de Compétences :</span> Chez VolyVolt, les compétences ne sont pas limitées aux énergies propres. Nous offrons une vaste gamme d'opportunités pour développer vos compétences, que ce soit dans la gestion de projet, la recherche et le développement, l'analyse de données, la communication et le marketing, les techniques de terrain, l'analyse en développement rural, et bien plus encore. Vous aurez également l'occasion d'acquérir des compétences transversales telles que le leadership, l'adaptabilité et la résilience.
                </Typography>
                <Typography color={'white'} py={1}>
                <span style={{fontWeight: 'bold'}}>Opportunités de Réseautage :</span> Rejoindre VolyVolt vous connectera avec des individus partageant les mêmes valeurs et aspirations. Vous développerez un réseau professionnel précieux tout en contribuant à une cause qui vous tient à cœur. Nous collaborons étroitement avec des ONG et des fondations, ouvrant la porte à des opportunités de réseautage au niveau national et international.
                </Typography>
                <Typography color={'white'} py={1}>
                <span style={{fontWeight: 'bold'}}>Flexibilité :</span> Nous comprenons que votre emploi du temps peut être chargé. C'est pourquoi nous valorisons la flexibilité. Vous pouvez contribuer selon vos disponibilités et vos obligations, tout en sachant que votre engagement contribue à maximiser votre expérience et votre apprentissage tout au long de cette aventure.
                </Typography>
                <Typography color={'white'} py={1}>
                L'aventure VolyVolt vous attend. Rejoignez-nous dès aujourd'hui pour être un moteur positif dans la vie des autres et vivre une expérience gratifiante. Ensemble, nous pouvons éclairer des vies, créer de l'espoir et bâtir un avenir meilleur pour les communautés rurales de Madagascar.
                </Typography>
            </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ display: 'flex', justifyContent: 'center', bgcolor: '#082D0E'}}>
            <Button variant='contained' sx={{
                color: 'white'
            }}>J’EMBARQUE DANS L’AVENTURE</Button>
        </DialogActions>

    </Dialog>
  )
}
