import React from 'react'

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { Box, Grid, Stack } from '@mui/material';
import { DevisCard } from './DevisCard';
import { CardQuote } from '../component/quotegenerator/CardQuote';
import { ThxUsingVolyvolt } from './ThxUsingVolyvolt';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  })

export const SuccessGeneration = ({open, setOpen, data}) => {
    const [ok, setOk] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleOk = () => {
      setOpen(false);
      setOk(true)
    }

    const handleClose = () => {
        setOpen(false);
      }
  
    return (
      <>
        <ThxUsingVolyvolt open={ok} setOpen={setOk}/>
        <Dialog
          fullScreen
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}        
        >
          <AppBar sx={{ position: 'relative' }}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <Typography align='center' sx={{ ml: 2, flex: 1, fontWeight: 'bold' }} variant="h6" >
                DETAIL DU DEVIS
              </Typography>
              <Button autoFocus color="inherit" onClick={handleClose}>
                OK
              </Button>
            </Toolbar>
          </AppBar>
          <Box sx={{
            backgroundColor: '#EEF3E4'
          }}>
          <Grid container px={{xs:2,md:6,lg:12}} mt={3}>
            <Grid item xs={12}>
                <Stack >
                    <Stack direction={'row'} spacing={1}>
                        <Typography>Nom de l’organisme</Typography>
                        <Typography sx={{
                            fontWeight: 'bold',
                            color: '#76A40F',
                        }}>{data.organisme}</Typography>   
                    </Stack>
                    
                    <Stack direction={'row'} spacing={1}>
                        <Typography><MailOutlineIcon/></Typography>
                        <Typography sx={{
                            fontWeight: 'bold',
                            color: '#76A40F',
                        }}>{data.email}</Typography>   
                    </Stack>

                    <Stack direction={'row'} spacing={1}>
                        <Typography>Numéro de téléphone</Typography>
                        <Typography sx={{
                            fontWeight: 'bold',
                            color: '#76A40F',
                        }}>{data.numero}</Typography>   
                    </Stack>
                </Stack>
            </Grid> 
          </Grid>
          
          <Grid container px={{xs:2,md:6,lg:12}} my={3}>
            <Grid item xs={12} sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap'
                    }}>
                <DevisCard title={'INSTALLATION DES GÉNÉRATEURS'}>
                </DevisCard>
                <CardQuote title={"PRODUCTION D’ENERGIE NECESSAIRE "} value={'124kWh'} />
                <CardQuote title={"SURFACE TOTALE À CULTIVER"} value={'4Ha'} />
                <CardQuote title={"DEVIS  dES SERVICES"} value={'4Ha'} />
                
            </Grid>
          </Grid>
          <Grid container px={{xs:2,md:6,lg:12}} my={3}>
            <Grid item xs={12} sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap'
                    }}>

                <DevisCard title={'DEVIS  DES SERVICES'}>
                    <Stack ml={2}>
                        <Typography mt={2}>Devis</Typography>
                        <Typography variant='h6' sx={{
                            fontWeight: 'bold'
                        }}>
                            {data.devis} Ar
                        </Typography>

                        <Typography mt={2}>Devis avec Marge 25%</Typography>
                        <Typography variant='h4' sx={{
                            fontWeight: 'bold'
                        }}>
                            {data.devis+(data.devis*25/100)} Ar
                        </Typography>
                    </Stack>
                </DevisCard>
                
            </Grid>
          </Grid>
          <Box sx={{
            display:'flex',
            justifyContent:'center',
          }} px={{xs:2,md:6,lg:12}}>
            <Button variant='contained' size='large'
            onClick={handleOk}
            sx={{
                width:'70%',
                mb:3
            }}>ACCEPTER LE DEVIS</Button>
          </Box>
          
          </Box>
        </Dialog>
      </>
    )
}

/*
<DialogActions >
          <Box sx={{}} px={{xs:2,md:6,lg:12}}>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
          </Box>
        </DialogActions>

*/