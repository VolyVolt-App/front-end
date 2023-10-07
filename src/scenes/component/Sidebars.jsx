import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useState } from 'react'
import { Sidebar, Menu, MenuItem, SubMenu, sidebarClasses } from 'react-pro-sidebar'
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined"
import { ReactComponent as Logo } from '../../asset/icon/volyvolt-black.svg'
import { ReactComponent as DashboardIcon } from '../../asset/icon/dashboardIcon.svg'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt'
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined'
import AodOutlinedIcon from '@mui/icons-material/AodOutlined'
import ImportantDevicesOutlinedIcon from '@mui/icons-material/ImportantDevicesOutlined'
import AddToQueueOutlinedIcon from '@mui/icons-material/AddToQueueOutlined'

import { ReactComponent as CustomersIcon } from '../../asset/icon/clientIcon.svg'
import { ReactComponent as QuoteIcon } from '../../asset/icon/quotegeneratorIcon.svg'
import { ReactComponent as BellIcon } from '../../asset/icon/icon _bell_.svg'
import { useNavigate } from 'react-router-dom'
import { MessageOutlined } from '@mui/icons-material'


const Item = ({ title, to, icon, selected, setSelected, setCollapsed, isCollapsed}) => {
  const theme = useTheme();
 // const colors = tokens(theme.palette.mode)
  const navigate = useNavigate()

  const handleClick = () =>{
    setSelected(title)
    navigate('/admin'+to)
  }
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: `black`,
        //backgroundColor: selected === title && 'red'
        background: selected === title && 'linear-gradient(90deg, rgba(139, 188, 31, 0.47) 0%, rgba(183, 217, 108, 0.03) 100%)'
      }}
      onClick={handleClick}
      icon={icon}
    >
      <Typography fontWeight={'bold'}>{title}</Typography>
    </MenuItem>
  )
}

export const Sidebars = ({isCollapsed,setIsCollapsed, toggled, setToggled}) => {

  const theme = useTheme()
  //const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  
  const [selected, setSelected] = useState("DASHBOARD")

 // const [toggled, setToggled] = useState(false);
  const [broken, setBroken] = useState(false);



  const handleCollapseSidebar = () => {
    
      setIsCollapsed()

  }

  return (
      <Box sx={{
        position: 'fixed',
        zIndex:5,
        height:'100vh',
        top:0,
        display:{xs:'flex', md:'flex'}
      }}>
 
        <Sidebar
        collapsed={isCollapsed}
        breakPoint={'md'}
        toggled={toggled}
        onBackdropClick={() => setToggled(false)}
        onBreakPoint={setBroken}
        rootStyles={{
          [`.${sidebarClasses.container}`]:{
            backgroundColor: '#b4c1af'
            //backgroundColor: `${theme.palette.secondary.main} !important`
          },
          height: '100%'
        }}>
          <Menu 
              menuItemStyles={{
                button: {
                  ['& .active']:{
                    backgroundColor: 'red',
                    color: 'blue'
                  },
                  ['&:hover']:{
                    backgroundColor: '#ffffff11'
                  },
                },
                subMenuContent : {
                  backgroundColor: '#95a78f88',
                }

              }}
            >
              {/* LOGO AND MENU ICON */}
              <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    pt={2}
                    pb={3}
                  >
                    {!isCollapsed && (<Typography variant="h3" color={'primary'} ml={4} mr={2}>
                    <Logo width={140}  />
                    </Typography>)}
                    <MenuItem
                      onClick={handleCollapseSidebar}
                      icon={<MenuOutlinedIcon />}
                      style={{ 
                        color: 'black',
                        width: '75px',
                        paddingLeft: '13px',
                      }}
                      
                    >
                    </MenuItem>
                </Box>
                <Item
                    title="DASHBOARD"
                    to=""
                    icon={<DashboardIcon />}
                    selected={selected}
                    setSelected={setSelected}
                    setCollapsed={setIsCollapsed}
                    isCollapsed={isCollapsed}
                />
                <SubMenu
                label='CUSTOMERS'
                icon={<CustomersIcon />}
                style={{
                  fontWeight: 'bold'
                  //fontSize: '13px'
                }}
                >
                  <Item
                    title="Les client"
                    to="/customers"
                    icon={<Diversity3OutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                    setCollapsed={setIsCollapsed}
                    isCollapsed={isCollapsed}
                    />
                  <Item
                    title="Ajouter"
                    to="/addclient"
                    icon={<PersonAddAltIcon />}
                    selected={selected}
                    setSelected={setSelected}
                    setCollapsed={setIsCollapsed}
                    isCollapsed={isCollapsed}
                    />
                </SubMenu>
                <SubMenu
                label='APPAREIL'
                icon={<AodOutlinedIcon />}
                style={{
                  fontWeight: 'bold'
                  //fontSize: '13px'
                }}
                >
                  <Item
                    title="Les Appareils"
                    to="/appareil"
                    icon={<ImportantDevicesOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                    setCollapsed={setIsCollapsed}
                    isCollapsed={isCollapsed}
                    />
                  <Item
                    title="Ajouter"
                    to="/newAppareil"
                    icon={<AddToQueueOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                    setCollapsed={setIsCollapsed}
                    isCollapsed={isCollapsed}
                    />
                </SubMenu>
                    
                <Item
                  title="QUOTE GENERATOR"
                  to="/quotegenerator"
                  icon={<QuoteIcon />}
                  selected={selected}
                  setSelected={setSelected}
                  setCollapsed={setIsCollapsed}
                  isCollapsed={isCollapsed}
                />
                <Item
                  title="NOTIFICATIONS"
                  to="/notification"
                  icon={<BellIcon />}
                  selected={selected}
                  setSelected={setSelected}
                  setCollapsed={setIsCollapsed}
                  isCollapsed={isCollapsed}
                />

                <Item
                  title="MESSAGE"
                  to="/message"
                  icon={<MessageOutlined />}
                  selected={selected}
                  setSelected={setSelected}
                  setCollapsed={setIsCollapsed}
                  isCollapsed={isCollapsed}
                />
            
            </Menu>
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
