
import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#8bbc1f',
    },
    secondary: {
      main: '#082D0E',
    },
    pale: {
     main: '#082D0E',
     contrastText: '#fff',
    },
    yellowVoly: {
      main:'#FFC000',  
      contrastText: '#fff',
      //dark:'#CC9600',
      //light:'#FFD800',
    },
    blackvoly: {
      main: '#000',
      contrastText: '#fff'
    },
    whitevoly:{
      main: '#fff',
      contrastText: '#8bbc1f'
    },
  },
    typography: {
      "fontFamily": `"Assistant","Roboto", "Helvetica", "Arial", sans-serif`,
      "fontSize": 14,
      "fontWeightLight": 300,
      "fontWeightRegular": 400,
      "fontWeightMedium": 500
     }
});