import { Typography, Box, useTheme } from "@mui/material"


export const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  return (
    <Box mb="30px">
      <Typography
        variant="h5"
        fontWeight="bold"
        sx={{ m: "0 0 5px 0" }}
      >
        {title}
      </Typography>
      <Typography variant="h6" color={'grey'}>
        {subtitle}
      </Typography>
    </Box>
  )
}


