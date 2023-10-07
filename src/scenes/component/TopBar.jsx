import { Avatar, Box, Button, Divider, IconButton, InputAdornment, InputBase, ListItemIcon, Menu, MenuItem, TextField, Tooltip } from '@mui/material'
import React, { useState } from 'react'
import SearchIcon from "@mui/icons-material/Search"
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined"
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined"
import { Logout, PersonAdd, Settings } from '@mui/icons-material'
import { useAuth } from '../../auth/useAuth'


export const TopBar = ({ toggled,setToggled}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const auth = useAuth()
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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
          onClick={()=>{setToggled(!toggled)}}
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

          {/* for menu*/}
          <Tooltip title="Parametre du compte">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <Avatar sx={{ width: 32, height: 32, backgroundColor: '#6E9F00' }}>M</Avatar>
            </IconButton>
        </Tooltip>
        {/*end for menu*/}
        </Box>

        <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
      {/*<MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
      </MenuItem>*/}
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={()=>{auth.handleLogout()}}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>


    </Box>
  )
}

/**
         <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
          </IconButton>
        </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>

 */