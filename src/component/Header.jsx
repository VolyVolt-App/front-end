import React, { useState } from 'react'
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import Menu from "@mui/material/Menu"
import MenuIcon from "@mui/icons-material/Menu"
import Container from "@mui/material/Container"
import Button from "@mui/material/Button"
import MenuItem from "@mui/material/MenuItem"
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'
import useScrollTrigger from '@mui/material/useScrollTrigger'

import {ReactComponent as Logo} from '../asset/image/logo-volyvolt.svg'



//import {ReactComponent as LogoMiniXs} from '../image/logo-mini-xs.svg'

const pages = [
    {
      text:"ACCUEL",
      link: ''
    },
    {
      text:"NOTRE SOLUTION",
      link: 'solution'
    },
    {
      text:"ESPACE CLIENT",
      link: 'client'
    },
    {
      text:"CONTACTS",
      link: 'contact'
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


    const [anchorElNav, setAnchorElNav] = useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }


  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
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
            <Menu
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
            </Menu>
            
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
          <Box sx={{  display: { xs: "none", md: "flex" } , justifyContent:'end', width: '100%', marginRight: 10 }}>
            {pages.map((page) => (
              <Button
                key={page.text}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
               <Link to={`/${page.link}`} style={{fontFamily:'Astro',textDecoration: 'none', color: 'white'}}>{page.text}</Link> 
              </Button>
            ))}
          </Box>
{/* displayed on large*/}
         
        </Toolbar>
      </Container>
    </AppBar>
    
    </ElevationScroll>
  )
}
