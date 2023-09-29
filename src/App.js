
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { AppOutlet } from './pages/AppOutlet';
import  Home  from './pages/Home';
import { Contact } from './pages/Contact';
import { Solution } from './pages/Solution';
import { ImpactSociaux } from './pages/ImpactSociaux';
import { Don } from './pages/Don';
import { Confidentialite } from './pages/Confidentialite';
import { GeneralCondition } from './pages/GeneralCondition';
import { AdminApp } from './AdminApp';
import { Login } from './auth/Login';


function App() {
  return (
    <Routes>   
      {/* public route */}
      <Route path={'/'} element={<AppOutlet/>}>
        <Route index element={<Home/>}/>
        <Route path='solution' element={<Solution/>} />
        <Route path='impactsociaux' element={<ImpactSociaux/>} />
        
        <Route path='contact' element={<Contact/>} />
        
        <Route path='don' element={<Don/>} />

        <Route path='confidentialite' element={<Confidentialite/>} />
        <Route path='condition' element={<GeneralCondition/>}/>

      </Route>
      
      {/* admin route */}
  
      <Route path='/admin/*' element={<AdminApp/>} />
      <Route path='/login' element={<Login/>}/>
      
  {/*<Route path='' element={} /> */}
    </Routes>

  )
}

export default App;
