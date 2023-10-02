import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import { AppOutlet } from './scenes/AppOutlet';
import { Dashboard } from './scenes/Dashboard';
import { Sidebars } from './scenes/component/Sidebars';
import { Box } from '@mui/material';
import { TopBar } from './scenes/component/TopBar';
import { QuoteGenerator } from './scenes/QuoteGenerator';
import { SidebarsFiction } from './scenes/component/SidebarsFiction';
import { Client } from './scenes/client/Client';
import { ClientDetail } from './scenes/client/ClientDetail';

export const AdminApp = () => {
  
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isMobileCollapsed, setMobileCollapsed] = useState('hide')

  return (
    <Box sx={{height:'100%', bgcolor:'red'}}>
      <Sidebars
      isCollapsed={isCollapsed} 
      setIsCollapsed={()=>setIsCollapsed(!isCollapsed)}
      isMobileCollapsed={isMobileCollapsed}
      setMobileCollapsed={setMobileCollapsed}/>

    <Box display={'flex'}  sx={{bgcolor: '#EEF3E4'}} >
      <SidebarsFiction
      isCollapsed={isCollapsed} 
      />
      <main style={{ flexGrow:1}}>

        <TopBar 
          isCollapsed={isCollapsed} 
          setIsCollapsed={()=>setIsCollapsed(!isCollapsed)}
          isMobileCollapsed={isMobileCollapsed}
          setMobileCollapsed={setMobileCollapsed}
          />

        <Box sx={{px:{xs:2,md:3,lg:6}}} py={3} bgcolor={'secondary'}>
          <Routes>   
            <Route path={'/'} element={<AppOutlet/>}>quotegenerator
              <Route index element={<Dashboard/>}/>
              <Route path='/customers' element={<Client/>}/>
              <Route path='/customers/detail/:id' element={<ClientDetail/>}/>
              <Route path='quotegenerator' element={<QuoteGenerator/>}/>
            </Route>
          </Routes>
        </Box>
      </main>
    </Box>
    </Box>
  )
}
