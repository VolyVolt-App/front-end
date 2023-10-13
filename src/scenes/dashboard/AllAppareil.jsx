import { Box, Stack, Typography } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const AllAppareil = ({data}) => {
    const row = data.map((row)=>({
        id: row.id,
        clientId: row.clientId,
        clientNom:row.clientNom,
        appareilID: row.appareilID,
      }))
      const [rows, setRows]= useState(row)
    
      const columns = [
        {
          field: "appareilID",
          headerName: "ID Appareil",
          
          cellClassName: "header",
          width:150,
          renderCell:({row: {appareilID}})=>{
            return(
              <Box  m="0 auto" p='0 15px' backgroundColor= 'rgba(183, 217, 108)' borderRadius={45}
              >{appareilID}</Box>
            )
          },
        },
        { 
            field: "id",
            headerName: "Client",
            width:200,
            renderCell: (params)=>
            <Stack direction={'row'} spacing={1}>
              <Typography color='primary' sx={{fontWeight:'bold'}}>{params.row.clientNom} :</Typography>
              <Typography>{params.row.clientId}</Typography>
            </Stack>
        
        },
    
    ]
    
      return (
        <Box
        sx={{height: '82vh'}}>
          <Box
            m={{
              xs:'5px auto',
              md:"5px 20px 20px 20px"
            }}
        
            width={{
              xs:'95%',
              sm:'95%',
              md:'fit-content',
              lg:'fit-content'
            }}
            
            //height="70vh"
            sx={{
              "& .MuiDataGrid-root": {
                border: "none",
              },
              "& .MuiDataGrid-cell": {
                borderBottom: "none",
              },
              "& .name-column--cell": {
                color: 'green',
              },
              "& .MuiDataGrid-columnHeaders": {
                backgroundColor: '#b4c1af',
                borderBottom: "none",
              },
              "& .MuiDataGrid-virtualScroller": {
                backgroundColor: '#b4c1af88',
              },
              "& .MuiDataGrid-footerContainer": {
                borderTop: "none",
                backgroundColor: 'red',
              },
              "& .MuiCheckbox-root": {
                color: `black !important`,
              },
            }}
          >
            {/*checkboxSelection*/}
            <DataGrid  rows={rows} columns={columns} hideFooter/>
            <Link to={'customers'} style={{ color:'#6E9F00', marginTop:1, marginLeft:'auto'}}>Voir tous les appareils</Link>
          </Box>
        </Box>
      )
    }