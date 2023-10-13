import { Box } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export const AllClient = ({data}) => {

    
    const row = data.map((row)=>({
        id: row.id,
        clientId: row.clientId,
        nom:row.nom,
        address:row.address,
        usedDevices:row.usedDevices,
        uDevices:row.uDevices,
        nombrePerson:row.nombrePerson,
        lastConsomation:row.lastConsomation
      }))
    
    
      const [rows, setRows]= useState(row)

       //colums
    const columns = [
        {
          field: "clientId",
          headerName: "ID Client",
          
          cellClassName: "header",
          width:100,
          renderCell:({row: {clientId}})=>{
            return(
              <Box  m="0 auto" p='0 15px' backgroundColor= 'rgba(183, 217, 108)' borderRadius={45}
              >{clientId}</Box>
            )
          },
        },
        ,
        { 
            field: "nom",
            headerName: "Nom",
            cellClassName: "header",
        },
        { 
            field: "address",
            headerName: "address",
        },
        { 
            field: "nombrePerson",
            headerName: "nombre de personne",
        },

    ]


  return (
    <Box m="0">
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
        
       // height="70vh"
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
        <Link to={'customers'} style={{ color:'#6E9F00', marginTop:1, marginLeft:'auto'}}>Voir tous les clients</Link>
        
      </Box>
      </Box>
  )
}