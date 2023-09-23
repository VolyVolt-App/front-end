import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { AppOutlet } from './scenes/AppOutlet';
import { Dashboard } from './scenes/Dashboard';
import { Sidebars } from './scenes/component/Sidebars';
import { Box } from '@mui/material';

export const AdminApp = () => {
  return (
    <Box display={'flex'} alignItems={'stretch'} sx={{bgcolor: '#00aaff'}} height={'100vh'}>
      <Sidebars/>
      <main>
        <Routes>   
          <Route path={'/'} element={<AppOutlet/>}>
            <Route index element={<Dashboard/>}/>
          </Route>
        </Routes>
      </main>
    </Box>
  )
}
