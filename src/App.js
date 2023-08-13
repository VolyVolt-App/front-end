
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { AppOutlet } from './pages/AppOutlet';
import  Home  from './pages/Home';
import { Products } from './pages/Products';
import { Client } from './pages/Client';
import { Contact } from './pages/Contact';


function App() {
  return (
    <Routes>   
      {/* public route */}
      <Route path={'/'} element={<AppOutlet/>}>
        <Route index element={<Home/>}/>
        <Route path='products' element={<Products/>} />
        
        <Route path='client' element={<Client/>} />
        
        <Route path='contact' element={<Contact/>} />
      </Route>
      
  {/*<Route path='' element={} /> */}
    </Routes>

  )
}

export default App;
