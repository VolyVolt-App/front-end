import { Box, IconButton } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React, { useState } from 'react'
import {  Preview } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom';


export const ClientLayout = ({data}) => {
    //id clientId nom cin address usedDevices nombrePerson lastConsomation
    const navigate = useNavigate()

    const row = data.map((row)=>({
        id: row.id,
        clientId: row.clientId,
        nom:row.nom,
        cin: row.cin,
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
            field: "cin",
            headerName: "Numero CIN",
            width:150,
        },
        { 
            field: "address",
            headerName: "address",
        },
        { 
            field: "nombrePerson",
            headerName: "nombre de personne",
        },
        { 
            field: "uDevices",
            headerName: "Appareil",
            width:150,
        },
        
        { 
            field: "id",
            headerName: "Action",
            width:150,
            renderCell: (params)=>
            <IconButton onClick={()=>navigate('detail/'+params.row.id)}>
                <Preview />
            </IconButton>
        
        },

    ]

    console.log(data);
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
      </Box>
      </Box>
  )
}
