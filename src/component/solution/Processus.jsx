import { Box, Typography } from '@mui/material'
import React from 'react'

export const Processus = ({title, image, text,isProcessusHover,setProcessusHover}) => {
    
   
  return (
    <Box
            component={'div'}
            onMouseOver={()=>setProcessusHover(title)}
            onMouseLeave={()=>setProcessusHover('')}
            sx={{
              width: {xs:'95%',sm:320},
              height: 280,
              bgcolor: isProcessusHover === title ? '#082D0E' :'#638715',
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
                {isProcessusHover === title ?
                 <Typography color={'white'}>{text}</Typography>
                 : 
                    <>
                        <Typography align='center' color={'white'}>{title}</Typography>
                        {image}
                    </> 
                }
              
          </Box>
  )
}
