import { Grid } from '@mui/material'
import React from 'react'
import { BenificiairyCarrousel } from '../component/impactsociaux/BenificiairyCarrousel'
import banner from '../asset/image/enfants-smiley-coup-moyen-fenetre 1.png'

export const Client = () => {
  return (
    <>
    <Grid container px={{xs:2,md:14}} pt={9} sx={{
      backgroundColor: '#082D0E'
    }}>
       <Grid item sx={{
        backgroundColor: '#082D0E'
        //backgroundImage: `url(${banner})`,
        //backgroundSize: "cover",
        //height: "100vh",
       }}>
       
       </Grid>
    </Grid>
      {/* benificial say */}
      <BenificiairyCarrousel/>
      {/*end benificial say */}
    </>
  )
}
