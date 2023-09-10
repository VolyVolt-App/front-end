
import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#8bbc1f',
    },
    secondary: {
      main: '#ffc000',
    },
    pale: {
     main: '#082D0E',
     contrastText: '#fff',
    }
  },
    typography: {
      "fontFamily": `"Assistant","Roboto", "Helvetica", "Arial", sans-serif`,
      "fontSize": 14,
      "fontWeightLight": 300,
      "fontWeightRegular": 400,
      "fontWeightMedium": 500
     }
});