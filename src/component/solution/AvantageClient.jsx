import React, { useCallback, useState } from 'react'
import { Box, Button, Divider, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material'


import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import {Navigation, Pagination , Scrollbar, A11y} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import { ReactComponent as ArrowBack } from '../../asset/icon/Arrowback.svg'
import { ReactComponent as ArrowForward } from '../../asset/icon/ArrowForward.svg'
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded'
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded'

//import "slick-carousel/slick/"

export const AvantageClient = () => {
  const items = [
    {
      title:'Technologie Innovante',
      text:"En utilisant des générateurs d'énergie à base de piles microbiennes, VolyVolt offre à ses clients une solution technologiquement innovante. Cela peut se traduire par une plus grande visibilité et un attrait pour les partenaires et les bailleurs de fonds qui recherchent des projets novateurs.",
    },
    {
      title:'Approche Clé en main et Personnalisée',
      text:"VolyVolt propose une approche clé en main, ce qui signifie que les clients n'ont pas à se soucier des aspects techniques complexes de l'électrification. De plus, chaque projet est adapté aux besoins spécifiques de la communauté, ce qui se démarque des solutions génériques et facilite la gestion pour les clients.",
    },
    {
      title:'Solution à Grand Impact Local',
      text:"L'électrification rurale de VolyVolt a un impact tangible sur les communautés locales. L'accès à une énergie propre et fiable améliore la qualité de vie, et la création d'emplois locaux renforce le développement économique. Cette dimension du projet peut générer une grande visibilité et un soutien accru.",
    },
    {
      title:'Adaptation en Temps Réel',
      text:"Grâce à l'utilisation de l'intelligence artificielle pour gérer la demande, VolyVolt peut ajuster la production en temps réel pour répondre aux besoins des clients. Cela garantit une alimentation électrique fiable et efficace, un atout majeur pour les ONGs et les fondations qui dépendent de cette électricité pour leurs projets.",
    },
    {
      title:'Modalités de Paiement Flexibles',
      text:"Les modalités de paiement flexibles offertes par VolyVolt facilitent la collaboration avec les ONGs et les fondations, qui ont souvent des budgets limités et des besoins de financement spécifiques.",
    },
    {
      title:'Sensibilisation environnementale',
      text:"En optant pour une solution d'énergie propre, les clients de VolyVolt renforcent leur engagement en faveur de la durabilité environnementale. Cela peut avoir un impact positif sur leur image et leur réputation, ce qui peut être un avantage concurrentiel.",
    },
  ] 

  
  const theme = useTheme()
  const sm = useMediaQuery(theme.breakpoints.down('md'))
  const md = useMediaQuery(theme.breakpoints.down('lg'))
  
  const [swiperRef, setSwiperRef] = useState(null)
  const [indexActive, setIndexActive] = useState(0)

  const handleNextSlide = useCallback(() => {
    console.log(swiperRef.activeIndex)
    swiperRef.slideNext()
  },[swiperRef])

  const handlePrevSlide = useCallback(() => {
    swiperRef.slidePrev()
    console.log(swiperRef.activeIndex)
  },[swiperRef])

  
  const handleNextSlideLarge = useCallback(() => {
    /*if(md){
      if(swiperRef.activeIndex !== 3){
        setIndexActive(indexActive+1)
        //swiperRef.slideTo(ind)
      }
    }
     if(sm){
      console.log('sm')
    }*/
    console.log('activeIndex: ',swiperRef.activeIndex)
    //isEnd,isBeginning previousIndex
    swiperRef.slideNext()
  },[swiperRef])

  const handlePrevSlideLarge = useCallback(() => {
    swiperRef.slidePrev()
    console.log(swiperRef.activeIndex)
  },[swiperRef])


  return (
    <>

    {/* xs */}
    <Box display={{xs:'flex'}} >
      <Box display={'flex'} alignItems={'center'} pr={{xs:0, md:2}}>
        <IconButton onClick={handlePrevSlide}>
          <ArrowBack width={30}/>
        </IconButton>
      </Box>
      
      <Swiper
      loop
      modules={[Navigation, Pagination , Scrollbar, A11y]}
      spaceBetween={50}
      initialSlide={5}
      //slidesPerView={3}
      //pagination={{clickable:true}}
      onSwiper={setSwiperRef}
      breakpoints={{
        640 : {
          slidesPerView: 1
        },
        768 : {
          slidesPerView: 2
        },
        1200 : {
          slidesPerView: 3
        }
      }}
      mousewheel={{
        forceToAxis: true
      }}
      
      onSlideChange={()=>console.log('slide change')}>
        
        {
          items.map((item,index)=>{
            return (

          <SwiperSlide key={index}>
            {({isActive})=> (
              <SwiperLayout isActive={isActive} item={item} index={index}/>
              )
            }
          </SwiperSlide>
            )
          })
        }
      </Swiper>
      <Box display={'flex'} alignItems={'center'} >
        <IconButton onClick={handleNextSlide}>
          <ArrowForward width={30}/>
        </IconButton>
      </Box>
    </Box>


    {/* large */}

   {/**  <Box display={{xs:'none', sm:'flex'}} >
      <Box display={'flex'} alignItems={'center'} pr={{xs:0, md:2}}>
        <IconButton onClick={handlePrevSlideLarge}>
          <ArrowBack width={30}/>
        </IconButton>
      </Box>
      
      <Swiper
      //loop
      modules={[Navigation, Pagination , Scrollbar, A11y]}
      spaceBetween={50}
      initialSlide={5}
      //slidesPerView={3}
      //pagination={{clickable:true}}
      onSwiper={setSwiperRef}
      breakpoints={{
        600 : {
          slidesPerView: 2
        },
        900 : {
          slidesPerView: 3
        },
        1200 : {
          slidesPerView: 4
        }
      }}
      mousewheel={{
        forceToAxis: true
      }}
      
      onSlideChange={()=>console.log('slide change')}>
        
        {
          items.map((item,index)=>{
            return (

          <SwiperSlide key={index}>
            
              <SwiperLayoutLarge isActive={indexActive} item={item} index={index}/>
          
          </SwiperSlide>
            )
          })
        }
      </Swiper>
      <Box display={'flex'} alignItems={'center'} >
        <IconButton onClick={handleNextSlideLarge}>
          <ArrowForward width={30}/>
        </IconButton>
      </Box>
    </Box>*/}
    
      
    </>
  )
}

const SwiperLayout = ({isActive,item, index}) => {
  const swiper = useSwiper()
  return (
    <>
    {/*{
      isActive ?*/}
        <Box sx={{
            p: 2,
            display: 'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems: 'center',
            bgcolor: '#E4F0D4',
            borderRadius: 1,
            height: 230
        }}>
          <Typography  align='center' sx={{
            color: '#7BA71C',
            width: 'fit-content'
            }}>
              {item.title}
              <Divider sx={{ borderBottomWidth: 1, bgcolor: '#8BBC1F', mt:1 }} />
          </Typography>

          <Typography pt={1} fontSize={13}>
           {item.text}
          </Typography>
        </Box>

    {/*   :
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          height: '100%'
        }}> 
          <Box 
          onClick={()=>{swiper.slideTo(index);console.log(index)}}
          sx={{
              py: 7,
              px: 3,
              display: 'flex',
              flexDirection:'column',
              justifyContent:'center',
              alignItems: 'center',
              bgcolor: '#E4F0D4',
              mt:'auto',
              mb:'auto',
              borderRadius: 1
            }}>
              <Typography variant='h6' align='center' sx={{
                color: '#7BA71C',
                width: 'fit-content'
              }}>
                {item.title}
              </Typography>
            </Box>
        </Box>*/}
        
    {/** }*/}
    </>
  )
}


const SwiperLayoutLarge = ({isActive,item, index}) => {
  const swiper = useSwiper()
  return (
    <>
    {
      isActive === index ?
        <Box sx={{
            p: 2,
            display: 'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems: 'center',
            bgcolor: '#E4F0D4',
            borderRadius: 1,
            height: 230
        }}>
          <Typography  align='center' sx={{
            color: '#7BA71C',
            width: 'fit-content'
            }}>
              {item.title}
              <Divider sx={{ borderBottomWidth: 1, bgcolor: '#8BBC1F', mt:1 }} />
          </Typography>

          <Typography pt={1} fontSize={13}>
           {item.text}
          </Typography>
        </Box>

      :
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          height: '100%'
        }}> 
          <Box 
          onClick={()=>{swiper.slideTo(index);console.log(index)}}
          sx={{
              py: 7,
              px: 3,
              display: 'flex',
              flexDirection:'column',
              justifyContent:'center',
              alignItems: 'center',
              bgcolor: '#E4F0D4',
              mt:'auto',
              mb:'auto',
              borderRadius: 1
            }}>
              <Typography variant='h6' align='center' sx={{
                color: '#7BA71C',
                width: 'fit-content'
              }}>
                {item.title}
              </Typography>
            </Box>
        </Box>
        
    }
    </>
  )
}

/*
sm:600 md:900 lg:1200 xl:1536

*/