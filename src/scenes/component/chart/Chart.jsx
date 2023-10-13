import React from 'react'
import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
import { Box, Divider, Typography } from '@mui/material'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

export const Chart = ({xdata,ydata,ytitle,bigtitle,unity, title}) => { 

   const data = {
    labels: xdata,
    datasets: [{
        data: ydata,
        label: ytitle,
        //label: 'Dataset 1',
        backgroundColor: '#FFC000', //couleur round point
        borderColor: '#FFC000',//couleur main
        pointBorderColor: 'green',
        pointBorderwidth: 4

    }]
   }

   const options = {
    responsive: true,
    interaction: {
        mode: 'index',
        intersect: false,
      },
    plugins: {
        legend: false,
    },
    elements: {
        line: {
            borderJoinStyle: 'round'
        }
    },
    scales: {
        x: {
            grid: {
                display: false
            }
        },
        y: {
            min:0,
            //max:10,
            ticks: {
                callback: (value) => value + unity,
                //stepSize: 2,
            },
            grid: {
                borderDash: [100]
            }
        }

    }
   }
  return (
    <Box sx={{
        //width: {xs:'90%', md: '500px'},
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
        }}>{bigtitle} 
            
            <Divider variant="fullwidth" sx={{ borderBottomWidth: 1, bgcolor: '#8BBC1F', mt:1 }} />
        </Typography>
        <Line data={data} options={options}></Line>
    </Box>
  )
}
