import { Box, Typography } from '@mui/material'
import React from 'react'

export const Embarque = ({title, image, text,isHover,setHover}) => {
    
   
  return (
    <Box
            component={'div'}
            onMouseOver={()=>setHover(title)}
            onMouseLeave={()=>setHover('')}
            sx={{
              width: {xs:'95%'},
              height: {xs:280,sm:200},
              bgcolor: isHover === title ? '#082D0E' :'#638715',
              borderTopLeftRadius: 20,
              borderBottomRightRadius: 20,
              boxShadow:'2px 6px 8px 0px rgba(26, 64, 9, 0.35)',

              p:3,
              m:1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              ' :hover': {
                cursor: 'pointer',
                bgcolor: '#082D0E'
              }
            }}>
                {isHover === title ?
                 <Box>{text}</Box>
                 : 
                    <Box display={'flex'} alignItems={'center'}>
                        {image}
                        <Typography align='center' color={'white'} px={2}>{title}</Typography>
                    </Box>
                    
                }
              
          </Box>
  )
}
