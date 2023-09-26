import React from 'react'

export const CardDashboard = ({title,value}) => {
  return (
    <Box sx={{
        bgcolor: '#F5F5F5',
        width: {xs: '90%', md: 370},
        height: 120,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    }}>
        <Typography align='center' sx={{color: '#6E9F00', fontWeight: 700, fontSize:45}} >{value}</Typography>
        <Typography variant='h6' align='center' sx={{color: '#6E9F00', fontWeight:600}}>{title}</Typography>
    </Box>
  )
}
