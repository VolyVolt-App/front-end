import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { CardDashboard } from '../component/dasboard/CardDashboard'
import { LineChart } from '@mui/x-charts'
import { TendencyChart } from '../component/chart/TendencyChart'
import { MultiLineTendancy } from '../component/chart/MultiLineTendancy'
import { Chart } from '../component/chart/Chart'
import { AllClient } from './AllClient'
import { AllAppareil } from './AllAppareil'

export const DashboardLayout = ({dashboard,allclient,allappareil}) => {
  return (
    <Box>
      <Grid container>
        <Grid item xs={12}>
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
           <CardDashboard title={'NOMBRE DE FOYERS ECLAIRÉS'} value={'3'}/>
           <CardDashboard title={'SURFACE TOTALE CULTIVÉES'} value={'4Ha'}/>
          </Box>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>

{/* global tendency */}

{/* end global tendency */}
<Typography variant='h6'>COURBES D'EVOLUTION DE TENSION</Typography>
{/* historique tension */}
{/* end historique tension */}
          
          <Chart
            xdata = {['semaine 1','semaine 2','semaine 3','semaine 4','semaine 5','semaine 6', 'semaine 7']}
            ydata = {[0.8,1,2.1,4,1,9,7]}
            title = {''}
            unity={'mV'}
            />
        </Grid>
      </Grid>
{/* all client */}

      <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap'
      }}>
      <Box mx={1}>
      <Typography variant='h6' color={'primary'} mb={2}>Quelques Clients</Typography>
      <AllClient data={allclient}/>
      </Box>
{/*end all client */}
      <Box mx={1}>
      <Typography variant='h6' color={'primary'} mb={2}>Quelques Appareils</Typography>
      <AllAppareil data={allappareil}/>
      </Box>
{/* all appareil */}
{/*end all appareil */}
</Box>
    </Box>
  )
}

 
//DashboardLayout