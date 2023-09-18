import React from 'react'

//image slides right
import slideLeft1 from '../../asset/image/slideLeft/PXL_20230725_065945816 1.png'
import slideLeft2 from '../../asset/image/slideLeft/coup-moyen-femme-souriante-exterieur 1.png'
import slideLeft3 from '../../asset/image/slideLeft/loren-joseph-XoBWUBA3Amg-unsplash 1.png'
import slideLeft4 from '../../asset/image/slideLeft/loren-joseph-XoBWUBA3Amg-unsplash 2.png'
import slideLeft5 from '../../asset/image/slideLeft/prise-vue-au-grand-angle-maisons-construites-champ-sec-cote-quelques-plantes 1.png'
import slideLeft6 from '../../asset/image/slideLeft/travailleurs-campagne-ensemble-terrain 1.png'
import slideLeft7 from '../../asset/image/slideLeft/PXL_20230726_072127091 1 (1).png'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'

import { Box } from '@mui/material'
import { Autoplay } from 'swiper/modules'
/*import slideRight from '../../asset/image/slideright'
import slideRight from '../../asset/image/slideright'
import slideRight from '../../asset/image/slideright'
import slideRight from '../../asset/image/slideright'
import slideRight from '../../asset/image/slideright'
import slideRight from '../../asset/image/slideright'*/


export const SliderLeft = () => {

  return (
    <Swiper
      modules={[Autoplay]}
      loop={true}
      autoplay={{
        delay: 1000,
        reverseDirection: true,
        disableOnInteraction: false
      }}
      //slidesPerView={6.85}
      breakpoints={{
        0 : {
          slidesPerView: 1.2
        },
      300:{
          slidesPerView: 1.9
      },
      390:{
          slidesPerView: 2
      },
      400 : {
        slidesPerView: 2.4
      },
      570 : {
        slidesPerView: 3
      },
      768 : {
        slidesPerView: 4
      },
      950:{
      slidesPerView: 5
      },
      1200 : {
        slidesPerView: 6.85
      }
      }}
    
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide 
        style={{position:'relative',backgroundColor: '#2F2121',height: 229}}>
          <Box
              component={'img'}
              sx={{
                position:'absolute',
                height:'100%',
                //width: '100%'
              //width: {md:450, xs:'100%'},
              //mt:{xs:3,md:0},
              
              // maxHeight: { xs: 50, md: 60},
              // maxWidth: {xs: 50, md: 60 }
              }}
              alt="rdf"
              src= {slideLeft1}
              />
      </SwiperSlide>
      <SwiperSlide 
        style={{position:'relative',backgroundColor: '#2F2121',height: 229}}>
          <Box
              component={'img'}
              sx={{
                position:'absolute',
                height:'100%',
                //width: '100%'
              //width: {md:450, xs:'100%'},
              //mt:{xs:3,md:0},
              
              // maxHeight: { xs: 50, md: 60},
              // maxWidth: {xs: 50, md: 60 }
              }}
              alt="rdf"
              src= {slideLeft2}
              />
      </SwiperSlide>
      <SwiperSlide 
        style={{position:'relative',backgroundColor: '#2F2121',height: 229}}>
          <Box
              component={'img'}
              sx={{
                position:'absolute',
                height:'100%',
                //width: '100%'
              //width: {md:450, xs:'100%'},
              //mt:{xs:3,md:0},
              
              // maxHeight: { xs: 50, md: 60},
              // maxWidth: {xs: 50, md: 60 }
              }}
              alt="rdf"
              src= {slideLeft3}
              />
      </SwiperSlide>
      <SwiperSlide 
        style={{position:'relative',backgroundColor: '#2F2121',height: 229}}>
          <Box
              component={'img'}
              sx={{
                position:'absolute',
                height:'100%',
                //width: '100%'
              //width: {md:450, xs:'100%'},
              //mt:{xs:3,md:0},
              
              // maxHeight: { xs: 50, md: 60},
              // maxWidth: {xs: 50, md: 60 }
              }}
              alt="rdf"
              src= {slideLeft4}
              />
      </SwiperSlide>
      <SwiperSlide 
        style={{position:'relative',backgroundColor: '#2F2121',height: 229}}>
          <Box
              component={'img'}
              sx={{
                position:'absolute',
                height:'100%',
                //width: '100%'
              //width: {md:450, xs:'100%'},
              //mt:{xs:3,md:0},
              
              // maxHeight: { xs: 50, md: 60},
              // maxWidth: {xs: 50, md: 60 }
              }}
              alt="rdf"
              src= {slideLeft5}
              />
      </SwiperSlide>
      <SwiperSlide 
        style={{position:'relative',backgroundColor: '#2F2121',height: 229}}>
          <Box
              component={'img'}
              sx={{
                position:'absolute',
                height:'100%',
                //width: '100%'
              //width: {md:450, xs:'100%'},
              //mt:{xs:3,md:0},
              
              // maxHeight: { xs: 50, md: 60},
              // maxWidth: {xs: 50, md: 60 }
              }}
              alt="rdf"
              src= {slideLeft6}
              />
      </SwiperSlide>
      <SwiperSlide 
        style={{position:'relative',backgroundColor: '#2F2121',height: 229}}>
          <Box
              component={'img'}
              sx={{
                position:'absolute',
                height:'100%',
                //width: '100%'
              //width: {md:450, xs:'100%'},
              //mt:{xs:3,md:0},
              
              // maxHeight: { xs: 50, md: 60},
              // maxWidth: {xs: 50, md: 60 }
              }}
              alt="rdf"
              src= {slideLeft7}
              />
      </SwiperSlide>







      
      <SwiperSlide 
        style={{position:'relative',backgroundColor: '#2F2121',height: 229}}>
          <Box
              component={'img'}
              sx={{
                position:'absolute',
                height:'100%',
                //width: '100%'
              //width: {md:450, xs:'100%'},
              //mt:{xs:3,md:0},
              
              // maxHeight: { xs: 50, md: 60},
              // maxWidth: {xs: 50, md: 60 }
              }}
              alt="rdf"
              src= {slideLeft1}
              />
      </SwiperSlide>
      <SwiperSlide 
        style={{position:'relative',backgroundColor: '#2F2121',height: 229}}>
          <Box
              component={'img'}
              sx={{
                position:'absolute',
                height:'100%',
                //width: '100%'
              //width: {md:450, xs:'100%'},
              //mt:{xs:3,md:0},
              
              // maxHeight: { xs: 50, md: 60},
              // maxWidth: {xs: 50, md: 60 }
              }}
              alt="rdf"
              src= {slideLeft2}
              />
      </SwiperSlide>
      <SwiperSlide 
        style={{position:'relative',backgroundColor: '#2F2121',height: 229}}>
          <Box
              component={'img'}
              sx={{
                position:'absolute',
                height:'100%',
                //width: '100%'
              //width: {md:450, xs:'100%'},
              //mt:{xs:3,md:0},
              
              // maxHeight: { xs: 50, md: 60},
              // maxWidth: {xs: 50, md: 60 }
              }}
              alt="rdf"
              src= {slideLeft3}
              />
      </SwiperSlide>
      <SwiperSlide 
        style={{position:'relative',backgroundColor: '#2F2121',height: 229}}>
          <Box
              component={'img'}
              sx={{
                position:'absolute',
                height:'100%',
                //width: '100%'
              //width: {md:450, xs:'100%'},
              //mt:{xs:3,md:0},
              
              // maxHeight: { xs: 50, md: 60},
              // maxWidth: {xs: 50, md: 60 }
              }}
              alt="rdf"
              src= {slideLeft4}
              />
      </SwiperSlide>
      <SwiperSlide 
        style={{position:'relative',backgroundColor: '#2F2121',height: 229}}>
          <Box
              component={'img'}
              sx={{
                position:'absolute',
                height:'100%',
                //width: '100%'
              //width: {md:450, xs:'100%'},
              //mt:{xs:3,md:0},
              
              // maxHeight: { xs: 50, md: 60},
              // maxWidth: {xs: 50, md: 60 }
              }}
              alt="rdf"
              src= {slideLeft5}
              />
      </SwiperSlide>
      <SwiperSlide 
        style={{position:'relative',backgroundColor: '#2F2121',height: 229}}>
          <Box
              component={'img'}
              sx={{
                position:'absolute',
                height:'100%',
                //width: '100%'
              //width: {md:450, xs:'100%'},
              //mt:{xs:3,md:0},
              
              // maxHeight: { xs: 50, md: 60},
              // maxWidth: {xs: 50, md: 60 }
              }}
              alt="rdf"
              src= {slideLeft6}
              />
      </SwiperSlide>
      <SwiperSlide 
        style={{position:'relative',backgroundColor: '#2F2121',height: 229}}>
          <Box
              component={'img'}
              sx={{
                position:'absolute',
                height:'100%',
                //width: '100%'
              //width: {md:450, xs:'100%'},
              //mt:{xs:3,md:0},
              
              // maxHeight: { xs: 50, md: 60},
              // maxWidth: {xs: 50, md: 60 }
              }}
              alt="rdf"
              src= {slideLeft7}
              />
      </SwiperSlide>
    </Swiper>
    
  )
}

/*

<Swiper
      //loop
      //modules={[Navigation, Pagination , Scrollbar, A11y]}
      spaceBetween={50}
      //initialSlide={5}
      //slidesPerView={3}
      pagination={{clickable:true}}
      //onSwiper={setSwiperRef}
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
      
      onSlideChange={()=>console.log('slide change')}>
        <SwiperSlide>
            <Box
            //component={}
            sx={{
            width: {md:450, xs:'100%'},
            //mt:{xs:3,md:0},
            
             maxHeight: { xs: 50, md: 60},
            // maxWidth: {xs: 50, md: 60 }
            }}
            alt="rdf"
            src= {slideRight1}
            />
        </SwiperSlide>
        <SwiperSlide>
            <Box
            //component={}
            sx={{
            //width: {md:450, xs:'100%'},
            //mt:{xs:3,md:0},
            
            // maxHeight: { xs: 50, md: 60},
            // maxWidth: {xs: 50, md: 60 }
            }}
            alt="rdf"
            src= {slideRight1}
            />
        </SwiperSlide>
      </Swiper>

*/
