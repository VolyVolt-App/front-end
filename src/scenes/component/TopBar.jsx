import { Box, Button, IconButton, InputAdornment, InputBase, TextField } from '@mui/material'
import React from 'react'
import SearchIcon from "@mui/icons-material/Search"
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined"
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined"



export const TopBar = ({ isMobileCollapsed, setMobileCollapsed}) => {
  return (
    <Box sx={{
        //bgcolor: 'red',
        display: 'flex',
        justifyContent: 'space-between',
        px:{xs:2,md:3,lg:6},
        py: 1,
    }}>
    
        <Box display={'flex'}>
        <IconButton 
          onClick={()=>{setMobileCollapsed('init');console.log(isMobileCollapsed)}}
          sx={{display : {xs:'block', md: 'none'}, bgcolor: 'rgba(8, 45, 14, 0.25)', width:45, height:45, pt:1.5, mr:3}}>
            <MenuOutlinedIcon/>
        </IconButton>
        <TextField size='small' placeholder='Recherche' sx={{backgroundColor: '#EAE4DC', borderColor: '#296307'}}
            InputProps={{
                endAdornment: 
                  <InputAdornment position='end'>
                        <IconButton type="button" >
                        <SearchIcon  sx={{fill: '#8BBC1F'}}/>
                        </IconButton>
                  </InputAdornment>
            }}/>
        </Box>
        <Box display={'flex'}>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        </Box>
    


    </Box>
  )
}
