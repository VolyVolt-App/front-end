import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../component/Header'
import { Box, CssBaseline, ThemeProvider } from '@mui/material'
import { Footer } from '../component/Footer'
import { theme } from '../theme'

export const AppOutlet = () => {
  return (
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Header/>    
              <Box sx={{ width: '100%'}}>
                <Outlet />
              </Box>    
        <Footer/>
      </ThemeProvider>
  )
}
