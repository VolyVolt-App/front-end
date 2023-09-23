import { Dashboard } from '@mui/icons-material';
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { AppOutlet } from './scenes/AppOutlet';

export const AdminApp = () => {
  return (
    
    <Routes>   

      <Route path={'/'} element={<AppOutlet/>}>
        <Route index element={<Dashboard/>}/>
            </Route>
        </Routes>
  )
}
