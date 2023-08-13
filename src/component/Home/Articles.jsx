import { Box, Link, Stack, Typography } from '@mui/material'
import React from 'react'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'


export const Articles = ({articleImage,subheading,heading,date,nombre, text, link}) => {
  return (
    <Box p={2}>
        <Box
         component={'img'}
         sx={{
            width:{xs: '100%'}
         }}
         alt="rdf"
         src= {articleImage}
        />

        <Typography sx={{py:1}}>{subheading}</Typography>
        <Typography variant='h5' 
        sx={{
            fontWeight: 'bold'
        }}
        >
            {heading}
        </Typography>
        <Stack direction={'row'} spacing={1}>
            <Box display={'flex'} alignItems={'center'}>
                <CalendarTodayIcon sx={{fontSize: 15}}/>
                <Typography 
                    sx={{
                        fontSize: 10,
                        marginLeft:'2px'
                    }}> 
                    {date}
                </Typography>
            </Box>
            <Box display={'flex'} alignItems={'center'} >
                <ChatBubbleOutlineIcon sx={{fontSize: 15}}/>
                <Typography
                    sx={{
                        fontSize: 10,
                        marginLeft: '2px'
                    }}> 
                        
                        {nombre} commentaires
                </Typography>
            </Box>
        </Stack>
        <Typography 
            sx={{
                paddingTop: 2,
                paddingBottom: 1
            }}>
                {text}
        </Typography>
        <Link>Voir plus</Link>
    </Box>
  )
}
