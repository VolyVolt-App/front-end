import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import { AppOutlet } from './scenes/AppOutlet';
import { Dashboard } from './scenes/Dashboard';
import { Sidebars } from './scenes/component/Sidebars';
import { Box } from '@mui/material';
import { TopBar } from './scenes/component/TopBar';
import { QuoteGenerator } from './scenes/QuoteGenerator';
import { SidebarsFiction } from './scenes/component/SidebarsFiction';

export const AdminApp = () => {
  
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <Box sx={{position: 'relative'}}>
      <Sidebars
      isCollapsed={isCollapsed} 
      setIsCollapsed={()=>setIsCollapsed(!isCollapsed)}/>

    <Box display={'flex'} alignItems={'stretch'} sx={{bgcolor: '#EEF3E4'}} >
      <SidebarsFiction
      isCollapsed={isCollapsed} 
      />
      <main style={{ flexGrow:1}}>
        <TopBar/>
        <Box sx={{px:{xs:2,md:3,lg:6}}} py={3} bgcolor={'secondary'}>
          <Routes>   
            <Route path={'/'} element={<AppOutlet/>}>quotegenerator
              <Route index element={<Dashboard/>}/>
              <Route path='quotegenerator' element={<QuoteGenerator/>}/>
            </Route>
          </Routes>
        </Box>
      </main>
    </Box>
    </Box>
  )
}
