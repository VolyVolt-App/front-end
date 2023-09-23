import { Typography, useTheme } from '@mui/material'
import React from 'react'
import { Sidebar, Menu, MenuItem, SubMenu, sidebarClasses } from 'react-pro-sidebar'

const Item = ({ title, to, icon, selected, setSelected, setCollapsed, isCollapsed}) => {
  const theme = useTheme();
 // const colors = tokens(theme.palette.mode)
 // const navigate = useNavigate()

  const handleClick = () =>{
   // setSelected(title)
    //navigate(to)
  }
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: `blue`,
      }}
      onClick={handleClick}
      icon={icon}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  )
}

export const Sidebars = () => {
  const theme = useTheme()
  return (
    <Sidebar
    rootStyles={{
      [`.${sidebarClasses.container}`]:{
        backgroundColor: `${theme.palette.secondary.main} !important`
      },
      height: '100%'
    }}>
    </Sidebar>
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
