import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/font.css'
import App from './App';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme';
import { ScrollToTop } from './component/ScrollToTop';
import { AuthContextProvider } from './auth/AuthContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <Router>

    <AuthContextProvider>
    <QueryClientProvider client={queryClient}> 
    <ScrollToTop>
      <Routes>
        <Route path='/*' element={<App />} />
      </Routes>
    </ScrollToTop>
    </QueryClientProvider>
    </AuthContextProvider>
  </Router>
  </ThemeProvider>
  </React.StrictMode>
);

