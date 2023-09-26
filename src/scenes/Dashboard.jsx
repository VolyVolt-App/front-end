import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { CardDashboard } from './component/dasboard/CardDashboard'
import { LineChart } from '@mui/x-charts'

export const Dashboard = () => {
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
          <Typography variant='h6'>COURBES DE TENDANCE</Typography>
          <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            
            series={[
              {
                data: [2, 5.5, 2, 8.5, 1.5, 5],
              },
            ]}
            width={500}
            height={300}
          />
        </Grid>
      </Grid>
    </Box>
  )
}
