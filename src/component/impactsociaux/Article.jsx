import { Box, Button, Typography } from '@mui/material'
import React from 'react'

export const Article = ({title,subtitle,image, isArticleHover, setArticleHover,link}) => {
  return (
    <Box
     component={'div'}
     onMouseOver={()=>setArticleHover(title)}
     onMouseLeave={()=>setArticleHover('')}
     sx={{
        position: 'relative',
        bgcolor: '#6E9F00',
        borderTopLeftRadius: 40,
        borderBottomRightRadius: 40,
        overflow: 'hidden',
        boxShadow: '0px 4px 14px 0px rgba(0, 0, 0, 0.25)',
     }}>
        {
            isArticleHover === title && 
            <Box sx={{
                position: 'absolute',
                zIndex: 5,
                backgroundColor: 'rgba(8, 45, 14, 0.70)',
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
              <Button component='a' variant='outlined' size='large' href={link} target="_blank" rel="noopener noreferrer"
                sx={{ 
                    fontWeight: 'bold',
                    border: 3,
                    }}>
                        VOIR L’ARTICLE
                </Button>
            </Box>
        }
        <Box
            component={'img'}
            sx={{
                width:{xs: '100%'},
            }}
            alt="rdf"
            src= {image}
        />
        <Box px={{xs:1, sm: 2}} py={2} sx={{
            bgcolor: '#6E9F00',
        }}>
            <Typography color={'white'} fontSize={15}>
            {subtitle}
            </Typography>
            <Typography sx={{
                fontWeight: 'bold',
                color: 'white',
                fontSize: 21,

            }}>
            {title}
            </Typography>
        </Box>
    </Box>
  )
}
