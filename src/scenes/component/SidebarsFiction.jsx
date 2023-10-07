import { Box } from '@mui/material'
import React from 'react'
import { Sidebar, sidebarClasses } from 'react-pro-sidebar'




export const SidebarsFiction = ({isCollapsed}) => {


  return (
    <Box sx={{
        display:{xs:'none', md:'flex'}
    }}>
      <Sidebar  
      collapsed={isCollapsed}
      breakPoint='md'
      rootStyles={{
        [`.${sidebarClasses.container}`]:{
          backgroundColor: `#00000000 !important`
        },
        height: '100%'
      }}>
      </Sidebar>
    
    </Box>
      )
}

/*

    <Sidebar
    rootStyles={{
      [`.${sidebarClasses.container}`]:{
        backgroundColor: `${theme.palette.secondary.main} !important`
      },
      height: '100%'
    }}>
    </Sidebar>

*/
