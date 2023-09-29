import React from 'react';

import { Box, Divider, Typography } from '@mui/material';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
//import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const MultiLineTendancy = () => {
    const options = {
        responsive: true,
        interaction: {
          mode: 'index',
          intersect: false,
        },
        stacked: false,
        plugins: {
          title: {
            display: false,
            text: '',
          },
        },
        scales: {
          y: {
            type: 'linear' ,
            display: true,
            position: 'left' ,
            ticks: {
                callback: (value) => value + 'kWH',
                stepSize: 2
            },
            grid: {
                display: false
            }
          },
          x: {
            
            grid: {
                display: false
            }
          }
         /* y1: {
            type: 'linear' ,
            display: true,
            position: 'right' ,
            grid: {
              drawOnChartArea: false,
            },
          },*/
        },
      };

      const labels = ['semaine 1','semaine 2','semaine 3','semaine 4','semaine 5','semaine 6', 'semaine 7']

      const data = {
        labels,
        datasets: [
          {
            label: 'Consommation réelle',
            data: [0.8,1,2.1,4,1,9,7],
            borderColor: '#FFC000',//couleur main
            backgroundColor: '#FFC000',//couleur round point
            yAxisID: 'y',
          },
          {
            label: 'Consommation estimée',
            data: [3,4,1.1,4,1,8,9],
            borderColor: '#8BBC1F',//couleur main
            backgroundColor: '#8BBC1F',//couleur round point
           // yAxisID: 'y',
          },
        ],
      };

  return (
    <Box
    sx={{
        width: {xs:'90%', md: '500px'},
        height: {xs:100, md: 400},
        pt:1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }}>
        <Typography sx={{
            pb:2,
            color: '#8BBC1F',
            width: 'fit-content'
        }}>CONSOMMATION ESTIMÉE  / CONSOMMATION RÉELLE
            
            <Divider variant="fullwidth" sx={{ borderBottomWidth: 1, bgcolor: '#8BBC1F', mt:1 }} />
        </Typography>
        <Line options={options} data={data} />
    </Box>
  )
}

