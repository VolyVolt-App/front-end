import { Box } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import React from 'react'
import { useState } from 'react'

export const LastConsomation = ({data}) => {
    //appareilId consomation date id

    const row = data.map((row)=>({
        id: row.id,
        appareilId: row.appareilId,
        consomation:row.consomation,
        date: row.date,
      }))

    const [rows, setRows]= useState(row)

    //colums
    const columns = [
        {
          field: "appareilId",
          headerName: "ID Appareil",
          
          cellClassName: "header",
          width:100,
          renderCell:({row: {appareilId}})=>{
            return(
              <Box  m="0 auto" p='0 15px' backgroundColor= 'rgba(183, 217, 108)' borderRadius={45}
              >{appareilId}</Box>
            )
          },
        },
        ,
        { 
            field: "consomation",
            headerName: "Consomation",
            cellClassName: "header",
        },
        
        { 
            field: "date",
            headerName: "date",
            width:150,
        },

    ]
  return (
    <Box>

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
        
        height="70vh"
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

    </Box>
  )
}
