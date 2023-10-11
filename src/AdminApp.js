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
import { RequireAuth } from './auth/RequireAuth';
import { Playground } from './scenes/component/SideBarTest';
import { AddClient } from './scenes/client/AddClient';
import { Appareil } from './scenes/appareil/Appareil';
import AddAppareil from './scenes/appareil/AddAppareil';
import { UnReadMessage } from './scenes/message/UnReadMessage';

export const AdminApp = () => {
  
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [toggled,setToggled] = useState(false)

  return (
    <Box sx={{height:'100%', bgcolor:'red'}}>
      <Sidebars
      isCollapsed={isCollapsed} 
      setIsCollapsed={()=>setIsCollapsed(!isCollapsed)}
      toggled={toggled}
      setToggled={setToggled}
      />

      <Box display={'flex'}  sx={{bgcolor: '#EEF3E4'}} >
      <SidebarsFiction
          isCollapsed={isCollapsed} 
      /> 

      <main style={{ flexGrow:1}}>

        <TopBar 
          isCollapsed={isCollapsed} 
          setIsCollapsed={()=>setIsCollapsed(!isCollapsed)}
          toggled={toggled}
          setToggled={setToggled}
          />

        <Box sx={{px:{xs:2,md:3,lg:6}}} py={3} bgcolor={'secondary'}>
          <Routes>   
            <Route path={'/'} element={<RequireAuth allowedRoles={['ADMIN']}/>}>
              <Route index element={<Dashboard/>}/>
              <Route path='/customers' element={<Client/>}/>
              <Route path='/customers/detail/:id' element={<ClientDetail/>}/>
              <Route path='/addclient' element={<AddClient/>}/>
              <Route path='/quotegenerator' element={<QuoteGenerator/>}/>
              <Route path='/appareil' element={<Appareil/>}/>
              <Route path='/addappareil' element={<AddAppareil/>}/>
              <Route path='/message' element={<UnReadMessage/>}/>
            </Route>
          </Routes>
        </Box>
      </main>
    </Box>
    </Box>
  )
}
