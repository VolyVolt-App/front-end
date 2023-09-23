import { Box, Link, Stack, Typography } from '@mui/material'
import React from 'react'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'

import ScrollAnimationLayout from '../Layout/ScrollAnimationLayout'

export const Articles = ({articleImage,subheading,heading,date,nombre, text, link}) => {
  return (
    <Box p={2}>
        <Box
         component={'img'}
         sx={{
            width:{xs: '100%'},
         }}
         alt="rdf"
         src= {articleImage}
        />
        <ScrollAnimationLayout>
            <Typography sx={{py:1}} color={'white'}>{subheading}</Typography>
        </ScrollAnimationLayout>
        <ScrollAnimationLayout>
            <Typography variant='h5'  color={'white'}
            sx={{
                fontWeight: 'bold'
            }}
            >
                {heading}
            </Typography>
        </ScrollAnimationLayout>
        <Stack direction={'row'} spacing={1}>
            <Box display={'flex'} alignItems={'center'}>
                <ScrollAnimationLayout>
                    <CalendarTodayIcon sx={{fontSize: 15, fill: '#8BBC1F'}}/>
                </ScrollAnimationLayout>
                <ScrollAnimationLayout>
                    <Typography  color={'white'}
                        sx={{
                            fontSize: 10,
                            marginLeft:'2px'
                        }}> 
                        {date}
                    </Typography>
                </ScrollAnimationLayout>
            </Box>
            <Box display={'flex'} alignItems={'center'} >
                <ChatBubbleOutlineIcon sx={{fontSize: 15, fill: '#8BBC1F'}}/>
                <ScrollAnimationLayout>
                    <Typography
                        sx={{
                            fontSize: 10,
                            marginLeft: '2px',
                            color: 'white'
                        }}> 
                            
                            {nombre} commentaires
                    </Typography>
                </ScrollAnimationLayout>
            </Box>
        </Stack>
        <ScrollAnimationLayout>
            <Typography 
                sx={{
                    paddingTop: 2,
                    paddingBottom: 1,
                    color: 'white'
                }}>
                    {text}
            </Typography>
        </ScrollAnimationLayout>
        <ScrollAnimationLayout>
            <Link>Voir plus</Link>
        </ScrollAnimationLayout>
    </Box>
  )
}
