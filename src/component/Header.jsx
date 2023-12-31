import React, { useState } from 'react'
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"

import MenuIcon from "@mui/icons-material/Menu"
import Container from "@mui/material/Container"
import Button from "@mui/material/Button"
import { Link, useLocation} from 'react-router-dom'

import ClearIcon from '@mui/icons-material/Clear';

import PropTypes from 'prop-types'
import useScrollTrigger from '@mui/material/useScrollTrigger'

import {ReactComponent as Logo} from '../asset/image/logo-volyvolt.svg'
import { Divider, Drawer, List, ListItem, ListItemText } from '@mui/material'
import { useEffect } from 'react'



//import {ReactComponent as LogoMiniXs} from '../image/logo-mini-xs.svg'

const pages = [
    {
      text:"ACCUEIL",
      link: '/'
    },
    {
      text:"NOTRE SOLUTION",
      link: '/solution'
    },
    {
      text:"NOS IMPACTS",
      link: '/impactsociaux'
    },
    {
      text:"CONTACT",
      link: '/contact'
    },
     ]

     function ElevationScroll(props) {
      const { children, window } = props;
      // Note that you normally won't need to set the window ref as useScrollTrigger
      // will default to window.
      // This is only being set here because the demo is in an iframe.
      const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
      });
    
      return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
      });
    }
    
    ElevationScroll.propTypes = {
      children: PropTypes.element.isRequired,
      /**
       * Injected by the documentation to work in an iframe.
       * You won't need it on your project.
       */
      window: PropTypes.func,
    }


export const Header = (props) => {



    const [collapse, setCollapse] = useState(false)
    const [navActive, setNavActive] = useState('')

    const location = useLocation()

    useEffect(()=>{
      setNavActive(location.pathname)
    },[location.pathname])


  const handleOpenNavMenu = (event) => {
    setCollapse(true)
  }


  const handleCloseNavMenu = (active) => {
    //setNavActive(active)
  }
 
  return (
    
    <ElevationScroll {...props}>
    <AppBar color='pale'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* logo */}
          <Box sx={{
                display: { xs: "none", md: "flex"},
              //  height: 130,
              }}>
            <Logo width={180} />
          </Box>
          
          

{/* displayed on small*/}
          {/* icon menu hoan small */}
          <Box sx={{  display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            {/* nav ref @small */}
           {/*  <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.text} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.text}</Typography>
                </MenuItem>
              ))}
              </Menu>*/}
               <Drawer
                      open={collapse}
                      onClose={()=>setCollapse(false)}
                      PaperProps={{
                          elevation: 8,
                          sx: {
                              mt: 6,
                              ml:4,
                              width: 200,
                              height: 'fit-content',
                              color: "#fff",
                              backgroundColor: "#8BBC1F",
                              fontFamily: 'Astro',
                              borderRadius: 2,
                          }
                      }}
                  >
                  <Box position={'relative'}>
                    <Box sx={{ position: 'absolute',width: 'fit-content', right: 2, top: 2, zIndex: 4}}>
                    <IconButton onClick={()=>setCollapse(false)}>
                        <ClearIcon/>
                      </IconButton>
                    </Box>
                    <List>
                      {pages.map((page, index) => (
                        <ListItem button key={page.text}>
                          <Link to={`${page.link}`} style={{fontFamily:'Astro',textDecoration: 'none', color: 'white'}}>
                            <ListItemText primary={page.text} onClick={()=>setCollapse(false)}/>
                          </Link>
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                </Drawer>
            
          </Box>
          <Box sx={{
              display: { xs: "flex", md: "none" }, mr: 1, ml:2,
            //  height: 130,
            }}>
            <Logo width={160} />
          </Box>

         {/*} <LogoMiniXs width={130} height={60} sx={{
            display: { xs: "flex", md: "none" }, mr: 1
          }}/>*/}
          
{/* end  diplayed on small screen */}

{/* displayed on large*/}
          {/* page map ito ilay nav ref @ large*/}
          <Box sx={{  display: { xs: "none", md: "flex" } , justifyContent:'end', alignItems: 'center' , width: '100%', marginRight: {md:0,lg:10} }}>
            {pages.map((page) => (
              <Button
                key={page.text}
                onClick={()=>setNavActive(page.link)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
               <Link 
                to={`${page.link}`} 
                style={{
                  fontFamily:'Astro',
                  textDecoration: 'none', 
                  color: navActive === page.link ? '#96CC1E' : 'white',
                  fontWeight: navActive === page.link ? 'bold': '',
                  }}>
                    {page.text}
                    { navActive === page.link &&            
                        <Divider  sx={{ borderBottomWidth: 2, bgcolor: '#638715', mt:3, m: '0px auto' }} />
                    }
               </Link> 
              </Button>
            ))}
            <Button variant='contained' color='yellowVoly' sx={{mt:1 ,mb:2, ml:{md:1,lg:6,xl:10} ,display: 'block'}}> <Link to='/don' style={{textDecoration:'none', color: 'black', fontWeight: 500, fontSize:17}}>Faire un Don</Link></Button>
          </Box>
{/* displayed on large*/}
         
        </Toolbar>
      </Container>
    </AppBar>
    
    </ElevationScroll>
  )
}
