
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { AppOutlet } from './pages/AppOutlet';
import  Home  from './pages/Home';
import { Contact } from './pages/Contact';
import { Solution } from './pages/Solution';
import { ImpactSociaux } from './pages/ImpactSociaux';
import { Don } from './pages/Don';


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
      </Route>
      
  {/*<Route path='' element={} /> */}
    </Routes>

  )
}

export default App;
