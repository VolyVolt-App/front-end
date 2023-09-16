import { Box, Typography } from '@mui/material'
import React from 'react'

export const Embarque = ({title, image, text,isEmbarqueHover,setEmbarqueHover}) => {
    
   
  return (
    <Box
            component={'div'}
            onMouseOver={()=>setEmbarqueHover(title)}
            onMouseLeave={()=>setEmbarqueHover('')}
            sx={{
              width: {xs:'95%'},
              height: {xs:280,sm:200},
              bgcolor: isEmbarqueHover === title ? '#082D0E' :'#638715',
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
                {isEmbarqueHover === title ?
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
