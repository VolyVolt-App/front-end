import { Box, Divider, Typography } from '@mui/material'
import React from 'react'
import { TendencyChart } from '../component/chart/TendencyChart'
import { MultiLineTendancy } from '../component/chart/MultiLineTendancy'

export const ClientCourbeReelAndPredit = ({data}) => {
    console.log(data)
  return (
    <>
    
    <Typography variant='h6' sx={{
        fontWeight: 'bold',
        color: '#8BBC1F',
         width: 'fit-content'
    }}>
                Flux des données de consomation
                <Divider variant="middle" sx={{ borderBottomWidth: 1, bgcolor: '#8BBC1F', mt:1 }} />
            </Typography>

    {data.consomation.length === 0 && (
        
            <Box sx={{
                width:'fit-content',
                py:2,
                pl:3
            }}>                
                <Typography pt={1} >Il n'y a pas encore de donnée</Typography>
            </Box>
        
    )}

    {data.consomation.length !== 0 && (
        <Box>
        <Box sx={{
            display: 'flex',
            flexWrap: 'wrap'
        }}>
            <Box py={1} pr={1}>
                <TendencyChart xdata={data.label} ydata={data.consomation} bigtitle={'CONSOMMATION MOYENNE MENSUELLE'} ytitle={'gh'} />
            </Box>
            <Box pl={1} py={1}>
                <TendencyChart xdata={data.label} ydata={data.consomationPredit} ytitle={'gh'} bigtitle={'CONSOMMATION MENSUELLE PREDIT'} />
            </Box>

        </Box>

        <Box>
            <MultiLineTendancy xdata={data.label} ydataReel={data.consomation} ydataPredit={data.consomationPredit} bigtitle={'CONSOMMATION ESTIMÉE  / CONSOMMATION RÉELLE'}/>
        </Box>

        </Box>
    )}
    </>
  )
}
