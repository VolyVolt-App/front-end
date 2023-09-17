import React from 'react'

//image slides right
import slideRight1 from '../../asset/image/slideright/371927658_1030419691302630_7834568546544710039_n 3.png'
import slideRight2 from '../../asset/image/slideright/PXL_20230725_062759167 1.png'
import slideRight3 from '../../asset/image/slideright/PXL_20230725_063353941 1.png'
import slideRight4 from '../../asset/image/slideright/coup-moyen-enfants-hecureux-posant 1.png'
import slideRight5 from '../../asset/image/slideright/gros-plan-enfant-africain-smiley 1.png'
import slideRight6 from '../../asset/image/slideright/siddhant-soni-CvqCzwVOhCM-unsplash 1.png'
import slideRight7 from '../../asset/image/slideright/siddhant-soni-CvqCzwVOhCM-unsplash 2.png'
import slideRight8 from '../../asset/image/slideright/PXL_20230725_063353941 1 (1).png'
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


export const SliderRight = () => {
    //SwiperCore.use([Autoplay])

  return (
    <Swiper
      modules={[Autoplay]}
      loop={true}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false
      }}
      //slidesPerView={6.85}
      breakpoints={{
        0 : {
            slidesPerView: 1.5
          },
        220:{
            slidesPerView: 2.3
        },
        390:{
            slidesPerView: 3
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
              src= {slideRight1}
              />
      </SwiperSlide>
      <SwiperSlide 
        style={{position:'relative',backgroundColor: 'blue',height: 229}}>
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
              src= {slideRight2}
              />
      </SwiperSlide>
      <SwiperSlide 
        style={{position:'relative',backgroundColor: 'blue',height: 229}}>
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
              src= {slideRight3}
              />
      </SwiperSlide>
      <SwiperSlide 
        style={{position:'relative',backgroundColor: 'blue',height: 229}}>
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
              src= {slideRight4}
              />
      </SwiperSlide>
      <SwiperSlide 
        style={{position:'relative',backgroundColor: 'blue',height: 229}}>
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
              src= {slideRight5}
              />
      </SwiperSlide>
      <SwiperSlide 
        style={{position:'relative',backgroundColor: 'blue',height: 229}}>
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
              src= {slideRight6}
              />
      </SwiperSlide>
      <SwiperSlide 
        style={{position:'relative',backgroundColor: 'blue',height: 229}}>
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
              src= {slideRight7}
              />
      </SwiperSlide>
      <SwiperSlide 
        style={{position:'relative',backgroundColor: 'blue',height: 229}}>
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
              src= {slideRight8}
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
              src= {slideRight1}
              />
      </SwiperSlide>
      <SwiperSlide 
        style={{position:'relative',backgroundColor: 'blue',height: 229}}>
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
              src= {slideRight2}
              />
      </SwiperSlide>
      <SwiperSlide 
        style={{position:'relative',backgroundColor: 'blue',height: 229}}>
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
              src= {slideRight3}
              />
      </SwiperSlide>
      <SwiperSlide 
        style={{position:'relative',backgroundColor: 'blue',height: 229}}>
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
              src= {slideRight4}
              />
      </SwiperSlide>
      <SwiperSlide 
        style={{position:'relative',backgroundColor: 'blue',height: 229}}>
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
              src= {slideRight5}
              />
      </SwiperSlide>
      <SwiperSlide 
        style={{position:'relative',backgroundColor: 'blue',height: 229}}>
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
              src= {slideRight6}
              />
      </SwiperSlide>
      <SwiperSlide 
        style={{position:'relative',backgroundColor: 'blue',height: 229}}>
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
              src= {slideRight7}
              />
      </SwiperSlide>
      <SwiperSlide 
        style={{position:'relative',backgroundColor: 'blue',height: 229}}>
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
              src= {slideRight8}
              />
      </SwiperSlide>
      
    </Swiper>
    
  )
}

/*






<SwiperSlide>
        <Box
            component={'img'}
            sx={{
            //width: {md:450, xs:'100%'},
            //mt:{xs:3,md:0},
            
            // maxHeight: { xs: 50, md: 60},
            // maxWidth: {xs: 50, md: 60 }
            }}
            alt="rdf"
            src= {slideRight2}
            />
      </SwiperSlide>
      <SwiperSlide>
        <Box
            component={'img'}
            sx={{
            //width: {md:450, xs:'100%'},
            //mt:{xs:3,md:0},
            
            // maxHeight: { xs: 50, md: 60},
            // maxWidth: {xs: 50, md: 60 }
            }}
            alt="rdf"
            src= {slideRight3}
            />
      </SwiperSlide>
      <SwiperSlide>
        <Box
            component={'img'}
            sx={{
            //width: {md:450, xs:'100%'},
            //mt:{xs:3,md:0},
            
            // maxHeight: { xs: 50, md: 60},
            // maxWidth: {xs: 50, md: 60 }
            }}
            alt="rdf"
            src= {slideRight4}
            />
      </SwiperSlide>
      <SwiperSlide>
        <Box
            component={'img'}
            sx={{
            //width: {md:450, xs:'100%'},
            //mt:{xs:3,md:0},
            
            // maxHeight: { xs: 50, md: 60},
            // maxWidth: {xs: 50, md: 60 }
            }}
            alt="rdf"
            src= {slideRight5}
            />
      </SwiperSlide>
      <SwiperSlide>
        <Box
            component={'img'}
            sx={{
            //width: {md:450, xs:'100%'},
            //mt:{xs:3,md:0},
            
            // maxHeight: { xs: 50, md: 60},
            // maxWidth: {xs: 50, md: 60 }
            }}
            alt="rdf"
            src= {slideRight6}
            />
      </SwiperSlide>
      <SwiperSlide>
        <Box
            component={'img'}
            sx={{
            //width: {md:450, xs:'100%'},
            //mt:{xs:3,md:0},
            
            // maxHeight: { xs: 50, md: 60},
            // maxWidth: {xs: 50, md: 60 }
            }}
            alt="rdf"
            src= {slideRight7}
            />
      </SwiperSlide>
            
      <SwiperSlide>
        <Box
            component={'img'}
            sx={{
            //width: {md:450, xs:'100%'},
            //mt:{xs:3,md:0},
            
            // maxHeight: { xs: 50, md: 60},
            // maxWidth: {xs: 50, md: 60 }
            }}
            alt="rdf"
            src= {slideRight2}
            />
      </SwiperSlide>









      
      <SwiperSlide>
        <Box
            component={'img'}
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
      <SwiperSlide>
        <Box
            component={'img'}
            sx={{
            //width: {md:450, xs:'100%'},
            //mt:{xs:3,md:0},
            
            // maxHeight: { xs: 50, md: 60},
            // maxWidth: {xs: 50, md: 60 }
            }}
            alt="rdf"
            src= {slideRight2}
            />
      </SwiperSlide>
      <SwiperSlide>
        <Box
            component={'img'}
            sx={{
            //width: {md:450, xs:'100%'},
            //mt:{xs:3,md:0},
            
            // maxHeight: { xs: 50, md: 60},
            // maxWidth: {xs: 50, md: 60 }
            }}
            alt="rdf"
            src= {slideRight3}
            />
      </SwiperSlide>
      <SwiperSlide>
        <Box
            component={'img'}
            sx={{
            //width: {md:450, xs:'100%'},
            //mt:{xs:3,md:0},
            
            // maxHeight: { xs: 50, md: 60},
            // maxWidth: {xs: 50, md: 60 }
            }}
            alt="rdf"
            src= {slideRight4}
            />
      </SwiperSlide>
      <SwiperSlide>
        <Box
            component={'img'}
            sx={{
            //width: {md:450, xs:'100%'},
            //mt:{xs:3,md:0},
            
            // maxHeight: { xs: 50, md: 60},
            // maxWidth: {xs: 50, md: 60 }
            }}
            alt="rdf"
            src= {slideRight5}
            />
      </SwiperSlide>
      <SwiperSlide>
        <Box
            component={'img'}
            sx={{
            //width: {md:450, xs:'100%'},
            //mt:{xs:3,md:0},
            
            // maxHeight: { xs: 50, md: 60},
            // maxWidth: {xs: 50, md: 60 }
            }}
            alt="rdf"
            src= {slideRight6}
            />
      </SwiperSlide>
      <SwiperSlide>
        <Box
            component={'img'}
            sx={{
            //width: {md:450, xs:'100%'},
            //mt:{xs:3,md:0},
            
            // maxHeight: { xs: 50, md: 60},
            // maxWidth: {xs: 50, md: 60 }
            }}
            alt="rdf"
            src= {slideRight7}
            />
      </SwiperSlide>
            
      <SwiperSlide>
        <Box
            component={'img'}
            sx={{
            //width: {md:450, xs:'100%'},
            //mt:{xs:3,md:0},
            
            // maxHeight: { xs: 50, md: 60},
            // maxWidth: {xs: 50, md: 60 }
            }}
            alt="rdf"
            src= {slideRight2}
            />
      </SwiperSlide>






/////////////////////////////

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
