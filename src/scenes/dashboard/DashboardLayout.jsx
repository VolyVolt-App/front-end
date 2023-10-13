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
           <CardDashboard title={'NOMBRE DE FOYERS ECLAIRÉS'} value={dashboard.nbrClient}/>
           <CardDashboard title={'SURFACE TOTALE CULTIVÉES'} value={'4Ha'}/>
          </Box>
        </Grid>
      </Grid>

      <Grid container mb={3}>
        <Grid item xs={12}>

{/* global tendency */}

{/* end global tendency */}
<Typography variant='h6'>COURBES D'EVOLUTION DE TENSION</Typography>
{/* historique tension */}
{/* end historique tension */}
          
          <Chart
            xdata = {['25 Oct','26 Oct','27 Oct','28 Oct','29 Oct','30 Oct', '1 Sept', '2 Sept', '3 Sept', '4 Sept', '5 Sept', '6 Sept']}
            ydata = {[0.08,0.13,0.4,0.6,0.7,0.8,0.78,0.77,0.82,0.8,0.8,0.8]}
            title = {''}
            unity={'V'}
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