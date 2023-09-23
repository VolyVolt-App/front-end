import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/font.css'
import App from './App';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme';
import { ScrollToTop } from './component/ScrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <Router>

    {/*<AuthContextProvider>*/}
    <ScrollToTop>
      <Routes>
        <Route path='/*' element={<App />} />
      </Routes>
    </ScrollToTop>
      
    {/*</AuthContextProvider>*/}
  </Router>
  </ThemeProvider>
  </React.StrictMode>
);

